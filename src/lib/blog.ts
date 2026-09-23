import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostFaq = {
  question: string;
  answer: string;
};

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  keywords: string[];
  excerpt: string;
  faqs?: PostFaq[];
};

export type Post = PostFrontmatter & {
  slug: string;
  contentHtml: string;
  readingTimeMinutes: number;
};

export type PostSummary = PostFrontmatter & {
  slug: string;
  readingTimeMinutes: number;
};

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getAllPosts(): PostSummary[] {
  const slugs = readSlugs();

  const posts = slugs.map((slug) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf-8");
    const { data, content } = matter(raw);
    const frontmatter = data as PostFrontmatter;
    return {
      slug,
      ...frontmatter,
      readingTimeMinutes: readingTime(content),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);

  return {
    slug,
    ...frontmatter,
    contentHtml: processed.toString(),
    readingTimeMinutes: readingTime(content),
  };
}

export function getAllSlugs(): string[] {
  return readSlugs();
}

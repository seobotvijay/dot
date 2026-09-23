import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guidance on NEP 2020, early childhood development, and running a play-based pre-primary curriculum — from the team behind the DOT program.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "DOT Learning Circle Blog",
    description:
      "Guidance on NEP 2020, early childhood development, and running a play-based pre-primary curriculum.",
    url: `${SITE_URL}/blog`,
  },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-light px-4 py-1.5 text-sm font-semibold text-teal-dark">
              From the DOT team
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-ink">The DOT Blog</h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Practical guidance on NEP 2020, early childhood development, and what a
              genuinely play-based pre-primary curriculum looks like in the classroom.
            </p>
          </div>

          <div className="mt-14 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block py-8 transition-colors"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  {formatDate(post.date)} · {post.readingTimeMinutes} min read
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink transition-colors group-hover:text-coral">
                  {post.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-coral">
                  Read the post
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10.3 3.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 10H4a1 1 0 010-2h9.6l-3.3-3.3a1 1 0 010-1.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}

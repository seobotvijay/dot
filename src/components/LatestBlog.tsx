import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function LatestBlog() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="bg-teal-light/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="section-heading-underline font-display text-3xl font-bold text-ink sm:text-4xl">
              From the DOT blog
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              Practical guidance on NEP 2020, early childhood development, and running a
              genuinely play-based pre-primary curriculum.
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 rounded-full border-2 border-ink/10 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal-dark"
          >
            View all posts
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-ink/5 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                {formatDate(post.date)} · {post.readingTimeMinutes} min read
              </p>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-coral">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {post.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral">
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
  );
}

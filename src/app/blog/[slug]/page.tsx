import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const faqJsonLd = post.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <article className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <nav className="flex items-center gap-2 text-xs font-semibold text-ink-soft" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-coral">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-coral">
            Blog
          </Link>
        </nav>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-soft">
          {formatDate(post.date)} · {post.readingTimeMinutes} min read
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{post.excerpt}</p>

        <div
          className="prose-blog mt-10"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-16 border-t border-ink/10 pt-10">
            <h2 className="font-display text-2xl font-bold text-ink">Frequently asked questions</h2>
            <div className="mt-6 space-y-3">
              {post.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-ink/10 bg-cream px-6 py-4 open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold text-ink marker:content-none">
                    {faq.question}
                    <svg
                      className="h-5 w-5 shrink-0 text-coral transition-transform group-open:rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1z" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 rounded-3xl bg-teal-light/40 p-8 text-center">
          <h2 className="font-display text-xl font-bold text-ink">
            See how DOT puts this into practice
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            DOT is a play-based, NEP 2020 &amp; NCF-aligned early years program — curriculum,
            teacher training, parent engagement and progress tracking in one.
          </p>
          <Link
            href="/#partner"
            className="mt-6 inline-block rounded-full bg-coral px-7 py-3 text-sm font-semibold text-cream shadow-md shadow-coral/30 transition-transform hover:scale-105 hover:bg-coral-dark"
          >
            Partner Your School
          </Link>
        </div>

        <div className="mt-10">
          <Link href="/blog" className="text-sm font-semibold text-teal-dark hover:underline">
            ← Back to all posts
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </article>
  );
}

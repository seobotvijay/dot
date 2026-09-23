import { faqs } from "@/data/content";

export default function Faq() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading-underline font-display text-3xl font-bold text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">
            Everything school leaders usually ask before partnering with DOT.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((faq) => (
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}

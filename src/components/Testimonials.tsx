import { testimonials } from "@/data/content";

const colorMap: Record<string, { bg: string; text: string }> = {
  coral: { bg: "bg-coral-light", text: "text-coral-dark" },
  teal: { bg: "bg-teal-light", text: "text-teal-dark" },
  sun: { bg: "bg-sun-light", text: "text-sun-dark" },
  lavender: { bg: "bg-lavender-light", text: "text-lavender-dark" },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading-underline font-display text-3xl font-bold text-ink sm:text-4xl">
            From schools, teachers and parents
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">
            Real voices from the DOT learning circle.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => {
            const c = colorMap[t.color];
            return (
              <figure
                key={t.quote}
                className="flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink/5"
              >
                <svg
                  className={`h-8 w-8 ${c.text}`}
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full ${c.bg} ${c.text} font-display text-sm font-bold`}>
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">{t.name}</span>
                    <span className="block text-xs text-ink-soft">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-ink-soft">
          Illustrative feedback from the DOT community. Names withheld for privacy.
        </p>
      </div>
    </section>
  );
}

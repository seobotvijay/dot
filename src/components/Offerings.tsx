import { offerings } from "@/data/content";

const colorMap: Record<
  string,
  { bg: string; text: string; border: string; check: string }
> = {
  coral: {
    bg: "bg-coral-light",
    text: "text-coral-dark",
    border: "hover:border-coral",
    check: "text-coral-dark",
  },
  teal: {
    bg: "bg-teal-light",
    text: "text-teal-dark",
    border: "hover:border-teal",
    check: "text-teal-dark",
  },
  sun: {
    bg: "bg-sun-light",
    text: "text-sun-dark",
    border: "hover:border-sun",
    check: "text-sun-dark",
  },
  lavender: {
    bg: "bg-lavender-light",
    text: "text-lavender-dark",
    border: "hover:border-lavender",
    check: "text-lavender-dark",
  },
};

export default function Offerings() {
  return (
    <section id="offerings" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading-underline font-display text-3xl font-bold text-ink sm:text-4xl">
            What we offer schools
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">
            A complete, digital-first program — curriculum, people and technology,
            with no physical materials for your school to order, store or run out of.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {offerings.map((offer) => {
            const c = colorMap[offer.color];
            return (
              <div
                key={offer.title}
                className={`rounded-3xl border-2 border-transparent bg-cream p-8 transition-colors ${c.border}`}
              >
                <span
                  className={`inline-flex rounded-full ${c.bg} ${c.text} px-3 py-1 text-xs font-bold uppercase tracking-wide`}
                >
                  {offer.tagline}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-ink">
                  {offer.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {offer.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {offer.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-ink">
                      <svg
                        className={`mt-0.5 h-5 w-5 shrink-0 ${c.check}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

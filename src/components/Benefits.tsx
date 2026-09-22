import { benefits } from "@/data/content";

const colorMap: Record<string, { bg: string; text: string; border: string; check: string }> = {
  coral: { bg: "bg-coral-light", text: "text-coral-dark", border: "border-coral/30", check: "text-coral-dark" },
  teal: { bg: "bg-teal-light", text: "text-teal-dark", border: "border-teal/30", check: "text-teal-dark" },
  sun: { bg: "bg-sun-light", text: "text-sun-dark", border: "border-sun/30", check: "text-sun-dark" },
  lavender: { bg: "bg-lavender-light", text: "text-lavender-dark", border: "border-lavender/30", check: "text-lavender-dark" },
};

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading-underline font-display text-3xl font-bold text-ink sm:text-4xl">
            Who DOT benefits — and how
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">
            One program, built to work for everyone in a child&apos;s learning circle.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((group) => {
            const c = colorMap[group.color];
            return (
              <div
                key={group.audience}
                className={`rounded-3xl border ${c.border} bg-cream p-6`}
              >
                <span className={`inline-flex rounded-full ${c.bg} ${c.text} px-3 py-1 text-xs font-bold uppercase tracking-wide`}>
                  {group.audience}
                </span>
                <ul className="mt-5 space-y-3">
                  {group.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
                      <svg
                        className={`mt-0.5 h-4 w-4 shrink-0 ${c.check}`}
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
                      <span>{benefit}</span>
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

import { howItWorks, whyEarlyYears } from "@/data/content";

export default function HowAndWhy() {
  return (
    <section id="how-it-works" className="bg-teal-light/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="section-heading-underline font-display text-3xl font-bold text-ink sm:text-4xl">
              How DOT works
            </h2>
            <p className="mt-8 text-ink-soft">
              We partner with your existing school — not the other way around.
              DOT layers onto your classrooms in five simple steps.
            </p>

            <ol className="mt-10 space-y-8 border-l-2 border-teal/30 pl-8">
              {howItWorks.map((step, i) => (
                <li key={step.title} className="relative">
                  <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-teal font-display text-sm font-bold text-cream">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="section-heading-underline font-display text-3xl font-bold text-ink sm:text-4xl">
              Why early years matter
            </h2>
            <p className="mt-8 text-ink-soft">
              The years before primary school aren&apos;t a warm-up — they&apos;re
              when the foundation for lifelong learning is built.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {whyEarlyYears.map((point) => (
                <div
                  key={point.description}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5"
                >
                  <p className="font-display text-3xl font-bold text-coral">
                    {point.stat}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

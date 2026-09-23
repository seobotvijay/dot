import { whyDot } from "@/data/content";

const colorMap: Record<string, { bg: string; text: string }> = {
  coral: { bg: "bg-coral-light", text: "text-coral-dark" },
  teal: { bg: "bg-teal-light", text: "text-teal-dark" },
  sun: { bg: "bg-sun-light", text: "text-sun-dark" },
  lavender: { bg: "bg-lavender-light", text: "text-lavender-dark" },
};

export default function WhyDot() {
  return (
    <section id="why-dot" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading-underline font-display text-3xl font-bold text-ink sm:text-4xl">
            Why DOT?
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">{whyDot.intro}</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyDot.points.map((point, i) => {
            const c = colorMap[point.color];
            return (
              <div
                key={point.title}
                className="rounded-2xl border border-ink/5 bg-cream p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${c.bg} ${c.text} font-display text-base font-bold`}
                >
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-base font-bold leading-snug text-ink">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

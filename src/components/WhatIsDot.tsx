import { learningAreas, nepAlignment } from "@/data/content";

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  coral: { bg: "bg-coral-light", text: "text-coral-dark", ring: "ring-coral" },
  teal: { bg: "bg-teal-light", text: "text-teal-dark", ring: "ring-teal" },
  sun: { bg: "bg-sun-light", text: "text-sun-dark", ring: "ring-sun" },
  lavender: { bg: "bg-lavender-light", text: "text-lavender-dark", ring: "ring-lavender" },
  leaf: { bg: "bg-leaf-light", text: "text-leaf-dark", ring: "ring-leaf" },
  rose: { bg: "bg-rose-light", text: "text-rose-dark", ring: "ring-rose" },
  sky: { bg: "bg-sky-light", text: "text-sky-dark", ring: "ring-sky" },
  steel: { bg: "bg-steel-light", text: "text-steel-dark", ring: "ring-steel" },
};

const dotBgMap: Record<string, string> = {
  coral: "bg-coral",
  teal: "bg-teal",
  sun: "bg-sun",
  lavender: "bg-lavender",
  leaf: "bg-leaf",
  rose: "bg-rose",
  sky: "bg-sky",
  steel: "bg-steel",
};

export default function WhatIsDot() {
  return (
    <section id="what-is-dot" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading-underline font-display text-3xl font-bold text-ink sm:text-4xl">
            What is the DOT program?
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">
            DOT stands for connecting the dots of early childhood. Instead of treating
            language, literacy, numeracy, feelings and creativity as separate subjects,
            DOT weaves 8 areas of learning into a single play-based classroom experience —
            so schools deliver whole-child development, not a checklist of activities.
          </p>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-leaf-light px-4 py-1.5 text-sm font-semibold text-leaf-dark">
            {nepAlignment.badge}
          </span>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            {nepAlignment.description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h3 className="font-display text-xl font-bold text-ink">Our 8 Areas of Learning</h3>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {learningAreas.map((area, i) => {
            const c = colorMap[area.color];
            return (
              <div
                key={area.name}
                className="group relative rounded-2xl border border-ink/5 bg-cream p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${c.bg} ${c.text} font-display text-base font-bold`}
                >
                  {i + 1}
                </div>
                <h4 className="mt-4 font-display text-base font-bold leading-snug text-ink">
                  {area.name}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{area.description}</p>
                <span
                  className={`absolute -top-2 -right-2 h-4 w-4 rounded-full ${dotBgMap[area.color]}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

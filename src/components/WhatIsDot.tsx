import { pillars } from "@/data/content";

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  coral: { bg: "bg-coral-light", text: "text-coral-dark", ring: "ring-coral" },
  teal: { bg: "bg-teal-light", text: "text-teal-dark", ring: "ring-teal" },
  sun: { bg: "bg-sun-light", text: "text-sun-dark", ring: "ring-sun" },
  lavender: { bg: "bg-lavender-light", text: "text-lavender-dark", ring: "ring-lavender" },
  leaf: { bg: "bg-leaf-light", text: "text-leaf-dark", ring: "ring-leaf" },
};

const dotBgMap: Record<string, string> = {
  coral: "bg-coral",
  teal: "bg-teal",
  sun: "bg-sun",
  lavender: "bg-lavender",
  leaf: "bg-leaf",
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
            DOT stands for connecting the dots of early childhood. Instead of
            treating literacy, movement, feelings and creativity as separate
            subjects, DOT weaves five developmental &ldquo;dots&rdquo; into a single
            play-based classroom experience — so schools deliver whole-child
            development, not a checklist of activities.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => {
            const c = colorMap[pillar.color];
            return (
              <div
                key={pillar.name}
                className={`group relative rounded-2xl border border-ink/5 bg-cream p-6 transition-transform hover:-translate-y-1 hover:shadow-lg ${
                  i === pillars.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${c.bg} ${c.text} font-display text-lg font-bold`}
                >
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {pillar.short}
                </h3>
                <p className="mt-1 text-sm font-semibold text-ink-soft">{pillar.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {pillar.description}
                </p>
                <span
                  className={`absolute -top-2 -right-2 h-4 w-4 rounded-full ${dotBgMap[pillar.color]}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

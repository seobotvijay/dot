import { programLevels } from "@/data/content";

const colorMap: Record<string, { bg: string; text: string; solid: string }> = {
  coral: { bg: "bg-coral-light", text: "text-coral-dark", solid: "bg-coral" },
  teal: { bg: "bg-teal-light", text: "text-teal-dark", solid: "bg-teal" },
  sun: { bg: "bg-sun-light", text: "text-sun-dark", solid: "bg-sun" },
  lavender: { bg: "bg-lavender-light", text: "text-lavender-dark", solid: "bg-lavender" },
};

export default function ProgramLevels() {
  return (
    <section id="program-levels" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading-underline font-display text-3xl font-bold text-ink sm:text-4xl">
            Program levels, from LKG to Std 2
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">
            DOT grows with every child — four program levels carry them from their first
            classroom routines through the early years of primary school.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-11 hidden h-0.5 bg-ink/10 lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {programLevels.map((level) => {
              const c = colorMap[level.color];
              return (
                <div key={level.grade} className="relative flex flex-col items-center text-center">
                  <div
                    className={`z-10 flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full ${c.bg} ${c.text} ring-8 ring-cream`}
                  >
                    <span className="font-display text-lg font-bold leading-none">{level.dotName.split(" ")[0]}</span>
                    <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wide">Dot</span>
                  </div>
                  <span className={`mt-4 inline-flex items-center gap-1.5 rounded-full ${c.bg} ${c.text} px-3 py-1 text-xs font-bold`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${c.solid}`} />
                    {level.grade}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink">{level.dotName}</h3>
                  <p className="mt-1 text-xs font-semibold text-ink-soft">{level.ageRange}</p>
                  <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-ink-soft">
                    {level.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

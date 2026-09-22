import { growthByYear, impactStats, parentSatisfaction } from "@/data/content";
import StatCounter from "./StatCounter";

const statIcons: Record<string, string> = {
  "Partner Schools": "school",
  "Children Benefited": "children",
  "Teachers Trained": "teacher",
  "Cities Reached": "pin",
};

function StatIcon({ kind }: { kind: string }) {
  const common = "h-6 w-6";
  switch (kind) {
    case "school":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 10.5 12 5l9 5.5-9 5.5-9-5.5Z" strokeLinejoin="round" />
          <path d="M6 12.5V17c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-4.5" strokeLinejoin="round" />
        </svg>
      );
    case "children":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="7" r="2.5" />
          <circle cx="17" cy="9" r="2" />
          <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" strokeLinecap="round" />
          <path d="M15 19c0-2 1-3.5 3-3.5s3.5 1.5 3.5 3.5" strokeLinecap="round" />
        </svg>
      );
    case "teacher":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="7" r="3" />
          <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" strokeLinecap="round" />
          <path d="M9 12.5 12 15l6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" strokeLinejoin="round" />
          <circle cx="12" cy="9.5" r="2.2" />
        </svg>
      );
  }
}

export default function Insights() {
  const maxSchools = Math.max(...growthByYear.map((d) => d.schools));

  return (
    <section id="impact" className="bg-ink py-24 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Our impact so far
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/70">
            Real numbers from real classrooms — this is what happens when schools
            connect the dots with us.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-coral/20 text-coral">
                <StatIcon kind={statIcons[stat.label] ?? "pin"} />
              </div>
              <p className="mt-5 font-display text-4xl font-bold">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm font-semibold text-cream/80">{stat.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-cream/50">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
            <h3 className="font-display text-lg font-bold">Partner schools, year over year</h3>
            <div className="mt-8 flex items-end gap-3 sm:gap-5">
              {growthByYear.map((d) => (
                <div key={d.year} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-40 w-full items-end">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-teal to-teal-light"
                      style={{ height: `${(d.schools / maxSchools) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-cream/60">{d.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 sm:p-8">
            <p className="font-display text-5xl font-bold text-sun">
              <StatCounter value={parentSatisfaction} suffix="%" />
            </p>
            <p className="mt-3 text-sm font-semibold text-cream/80">
              Parent satisfaction
            </p>
            <p className="mt-2 text-xs leading-relaxed text-cream/50">
              of parents surveyed say DOT helped them stay meaningfully involved in
              their child&apos;s learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

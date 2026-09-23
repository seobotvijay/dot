import { materialsIncluded } from "@/data/content";
import StatCounter from "./StatCounter";

const checkSvg = (
  <svg className="h-6 w-6 text-teal-dark" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function MaterialsIncluded() {
  return (
    <section id="materials" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading-underline font-display text-3xl font-bold text-ink sm:text-4xl">
            Everything included with DOT
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">
            A full set of hands-on materials for every classroom — nothing extra to
            design, print, or source on your own.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {materialsIncluded.map((item) => (
            <div
              key={item.label}
              className="flex flex-col justify-center rounded-2xl bg-cream p-6 text-center ring-1 ring-ink/5"
            >
              {item.value ? (
                <p className="font-display text-3xl font-bold text-coral">
                  <StatCounter value={item.value} suffix={item.suffix} />
                </p>
              ) : (
                <span className="mx-auto flex h-9 w-9 items-center justify-center">{checkSvg}</span>
              )}
              <p className="mt-2 text-sm font-semibold leading-snug text-ink">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { progressTracking } from "@/data/content";

export default function ProgressTracking() {
  return (
    <section id="progress-tracking" className="bg-teal-light/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-teal-dark ring-1 ring-teal/20">
              Built into the DOT app
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
              {progressTracking.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              {progressTracking.description}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {progressTracking.steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal font-display text-sm font-bold text-cream">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

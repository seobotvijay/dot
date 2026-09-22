import { impactStats } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24">
      <div className="dot-grid-bg pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-light px-4 py-1.5 text-sm font-semibold text-teal-dark">
            A play-based program for pre-primary schools
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Every child is a{" "}
            <span className="relative whitespace-nowrap text-coral">
              constellation
            </span>{" "}
            waiting to connect.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            DOT is a whole-child early years program that schools bring in as their
            pre-primary curriculum — pairing play-based learning with teacher
            training, parent engagement and a dedicated app, so every dot of a
            child&apos;s development connects into confident growth.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#partner"
              className="rounded-full bg-coral px-7 py-3.5 text-center text-base font-semibold text-cream shadow-md shadow-coral/30 transition-transform hover:scale-105 hover:bg-coral-dark"
            >
              Partner Your School
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border-2 border-ink/10 px-7 py-3.5 text-center text-base font-semibold text-ink transition-colors hover:border-teal hover:text-teal-dark"
            >
              See How It Works
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {impactStats.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-ink sm:text-3xl">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </dt>
                <dd className="mt-1 text-xs font-medium text-ink-soft sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-md">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-coral-light" />
            </div>
            {[
              { color: "bg-coral", pos: "left-4 top-6", delay: "0s" },
              { color: "bg-teal", pos: "right-2 top-16", delay: "1s" },
              { color: "bg-sun", pos: "left-10 bottom-8", delay: "2s" },
              { color: "bg-lavender", pos: "right-8 bottom-4", delay: "1.5s" },
              { color: "bg-leaf", pos: "left-1/2 top-2 -translate-x-1/2", delay: "0.5s" },
            ].map((dot, i) => (
              <span
                key={i}
                style={{ animationDelay: dot.delay }}
                className={`animate-float-slow absolute ${dot.pos} h-16 w-16 rounded-full ${dot.color} shadow-lg sm:h-20 sm:w-20`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

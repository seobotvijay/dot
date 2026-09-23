import LeadForm from "./LeadForm";

export default function PartnerSection() {
  return (
    <section id="partner" className="relative overflow-hidden bg-cream py-24">
      <div className="dot-grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-coral-light px-4 py-1.5 text-sm font-semibold text-coral-dark">
            For school leaders
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
            Bring DOT to your school
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Tell us a little about your school and one of our partnership
            specialists will walk you through curriculum, materials, training
            and rollout — everything included.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "A free classroom demo before you commit",
              "Full teacher certification within your first term",
              "Hands-on materials included — story books, worksheets, workbooks and more",
              "Dedicated onboarding for your leadership team",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-teal-dark" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}

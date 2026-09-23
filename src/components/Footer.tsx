import Link from "next/link";

const quickLinks = [
  { href: "/#what-is-dot", label: "What is DOT" },
  { href: "/#program-levels", label: "Program Levels" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#offerings", label: "What We Offer" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/#impact", label: "Impact" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/#partner", label: "Partner Your School" },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-cream/70">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Link href="/#top" className="flex items-center gap-2 font-display text-xl font-bold text-cream">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coral">
                <span className="h-2.5 w-2.5 rounded-full bg-cream" />
              </span>
              dot<span className="text-coral">.</span> learning circle
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A play-based early years program that helps pre-primary schools connect
              curriculum, teachers and parents into one whole-child journey.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-cream">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-coral">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-cream">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:hello@dotlearningcircle.com" className="transition-colors hover:text-coral">
                  hello@dotlearningcircle.com
                </a>
              </li>
              <li>
                <Link href="/#partner" className="transition-colors hover:text-coral">
                  Request a partnership call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} DOT Learning Circle. All rights reserved.</p>
          <p>Every dot connects.</p>
        </div>
      </div>
    </footer>
  );
}

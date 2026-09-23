"use client";

import { useState } from "react";
import Link from "next/link";

// Full set, used in the mobile menu where vertical space isn't constrained.
const links = [
  { href: "/#why-dot", label: "Why DOT?" },
  { href: "/#what-is-dot", label: "What is DOT" },
  { href: "/#program-levels", label: "Program Levels" },
  { href: "/#offerings", label: "What We Offer" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/#impact", label: "Impact" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

// Trimmed set for the desktop nav bar — Program Levels, Benefits and Impact
// stay reachable via the mobile menu and footer instead of crowding one row.
const primaryLinks = links.filter(
  (link) => !["/#program-levels", "/#benefits", "/#impact"].includes(link.href)
);

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/#top" className="flex shrink-0 items-center gap-2 font-display text-xl font-bold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coral text-cream">
            <span className="h-2.5 w-2.5 rounded-full bg-cream" />
          </span>
          dot<span className="text-coral">.</span> learning circle
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-ink-soft transition-colors hover:text-coral"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#partner"
          className="hidden shrink-0 whitespace-nowrap rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-transform hover:scale-105 hover:bg-coral-dark md:inline-block"
        >
          Partner Your School
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-cream px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#partner"
              className="rounded-full bg-coral px-5 py-2.5 text-center text-sm font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              Partner Your School
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

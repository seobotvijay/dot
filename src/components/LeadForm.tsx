"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const studentCountOptions = ["Under 50", "50–150", "150–300", "300–500", "500+"];

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-xl ring-1 ring-ink/5">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leaf-light text-leaf-dark">
          <svg className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">
          Thanks — we&apos;ve got your details!
        </h3>
        <p className="mt-2 text-ink-soft">
          Our partnerships team will reach out within 2 business days to talk through
          bringing DOT to your school.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-teal-dark hover:underline"
        >
          Submit another school
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-ink/5 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="School name" name="schoolName" required placeholder="Sunshine Pre-Primary School" />
        <Field label="Your name" name="contactName" required placeholder="Jordan Lee" />
        <Field label="Your role" name="role" placeholder="Principal, Director…" />
        <Field label="Email" name="email" type="email" required placeholder="you@school.com" />
        <Field label="Phone" name="phone" type="tel" required placeholder="+1 555 000 0000" />
        <Field label="City" name="city" required placeholder="Austin" />

        <div className="sm:col-span-2">
          <label htmlFor="studentCount" className="block text-sm font-semibold text-ink">
            Number of students
          </label>
          <select
            id="studentCount"
            name="studentCount"
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-2.5 text-sm text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
          >
            <option value="" disabled>
              Select a range
            </option>
            {studentCountOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-ink">
            Anything else we should know?
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Current curriculum, age groups, timelines…"
            className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-2.5 text-sm text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-coral-light px-4 py-3 text-sm font-medium text-coral-dark">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-coral px-7 py-3.5 text-base font-semibold text-cream shadow-md shadow-coral/30 transition-transform hover:scale-[1.01] hover:bg-coral-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request a Partnership Call"}
      </button>

      <p className="mt-4 text-center text-xs text-ink-soft">
        We&apos;ll only use your details to get in touch about DOT — no spam.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-coral"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/50 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
      />
    </div>
  );
}

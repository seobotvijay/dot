import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

type LeadPayload = {
  schoolName: string;
  contactName: string;
  role: string;
  email: string;
  phone: string;
  city: string;
  studentCount: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

function validate(body: Partial<LeadPayload>): string | null {
  if (!body.schoolName?.trim()) return "School name is required.";
  if (!body.contactName?.trim()) return "Contact name is required.";
  if (!body.email?.trim() || !EMAIL_RE.test(body.email.trim())) {
    return "A valid email address is required.";
  }
  if (!body.phone?.trim() || body.phone.trim().length < 7) {
    return "A valid phone number is required.";
  }
  if (!body.city?.trim()) return "City is required.";
  return null;
}

async function appendLeadLocally(lead: Record<string, unknown>) {
  await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });

  let existing: Record<string, unknown>[] = [];
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    existing = [];
  }

  existing.push(lead);
  await fs.writeFile(LEADS_FILE, JSON.stringify(existing, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  let body: Partial<LeadPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  const lead = {
    schoolName: body.schoolName!.trim(),
    contactName: body.contactName!.trim(),
    role: body.role?.trim() || "",
    email: body.email!.trim(),
    phone: body.phone!.trim(),
    city: body.city!.trim(),
    studentCount: body.studentCount?.trim() || "",
    message: body.message?.trim() || "",
    source: "dotlearningcircle-website",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;

  try {
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
    } else {
      await appendLeadLocally(lead);
    }
  } catch (err) {
    console.error("[leads] failed to store lead, falling back to local file", err);
    try {
      await appendLeadLocally(lead);
    } catch (fallbackErr) {
      console.error("[leads] local fallback also failed", fallbackErr);
      return NextResponse.json(
        { ok: false, error: "We couldn't save your request. Please try again." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}

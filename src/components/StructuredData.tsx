import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "DOT Program",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/logo.png`,
    email: "hello@dotlearningcircle.com",
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };

  const courses = ["Little Dot (LKG)", "Big Dot (UKG)", "Tiny Dot (Std 1)", "Mighty Dot (Std 2)"].map(
    (name) => ({
      "@context": "https://schema.org",
      "@type": "Course",
      name: `DOT ${name}`,
      description: `The ${name} level of the DOT early years program, a play-based curriculum aligned to NEP 2020 and the NCF for Foundational Stage.`,
      provider: { "@id": `${SITE_URL}/#organization` },
    })
  );

  const jsonLd = [organization, website, ...courses];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

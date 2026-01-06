export function JSONLD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Obaid Qatan",
    url: "https://obaid.saas-tech.net",
    jobTitle: "Senior Full-stack Developer",
    alumniOf: "MS Ramaiah Institute of Technology",
    description:
      "Senior Full-stack Developer and Team Lead specializing in React, Next.js, and Node.js.",
    sameAs: [
      "https://github.com/ObaidQatan",
      "https://www.linkedin.com/in/obaid-qatan-7699bb185/",
      "https://www.instagram.com/obaid_qatan/",
      "https://www.youtube.com/@obaid_qatan_coding",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

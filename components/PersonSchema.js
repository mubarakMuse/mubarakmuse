import config from "@/config"
import { profile, experience, skills, education } from "@/data/resume"

export const renderPersonSchema = () => {
  const sameAs = [profile.linkedin, profile.github]

  const worksFor = experience.map((role) => ({
    "@type": "OrganizationRole",
    roleName: role.title,
    startDate: role.dates.split("–")[0]?.trim(),
    worksFor: {
      "@type": "Organization",
      name: role.company,
    },
  }))

  const knowsAbout = [
    ...skills.languages,
    ...skills.backend,
    ...skills.cloud,
    ...skills.ai,
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.title,
          description: profile.summary,
          url: `https://${config.domainName}/`,
          image: `https://${config.domainName}/icon.png`,
          email: profile.email,
          telephone: profile.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Minneapolis",
            addressRegion: "MN",
            addressCountry: "US",
          },
          sameAs,
          knowsAbout,
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: education.school,
          },
          hasOccupation: worksFor,
        }),
      }}
    />
  )
}

export const renderProfilePageSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          dateModified: new Date().toISOString().split("T")[0],
          mainEntity: {
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.title,
            description: profile.summary,
            url: `https://${config.domainName}/`,
          },
        }),
      }}
    />
  )
}

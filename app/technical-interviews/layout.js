import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Technical Interviews as a Service - Mubarak Muse",
  description:
    "First-round technical screening interviews as a side service. Former Amazon engineer and Karat interview engineer with 900+ technical interviews conducted.",
  keywords: [
    "technical screening",
    "coding interviews",
    "technical interviews",
    "hiring",
    "interview engineer",
    "Mubarak Muse",
  ],
  canonicalUrlRelative: "/technical-interviews",
});

export default function TechnicalInterviewsLayout({ children }) {
  return <>{children}</>;
}

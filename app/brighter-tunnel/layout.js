import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "BrighterTunnel | Technical Screening Service - Mubarak Muse",
  description: "Stop wasting your Senior Engineers' time. We technically screen your applicants so you only interview the top 20% who can actually code. Live, human-led technical interviews with detailed reports.",
  keywords: ["technical screening", "coding interviews", "hiring", "engineering recruitment", "technical assessment", "BrighterTunnel", "Karat alternative"],
  canonicalUrlRelative: "/brighter-tunnel",
});

export default function BrighterTunnelLayout({ children }) {
  return <>{children}</>;
}



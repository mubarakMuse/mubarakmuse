export const profile = {
  name: "Mubarak Muse",
  title: "Lead Software Engineer",
  location: "Minneapolis, MN",
  openTo: "Open to SF / NYC",
  phone: "612-814-9554",
  email: "Mubarak014@gmail.com",
  linkedin: "https://www.linkedin.com/in/mubarak-muse",
  github: "https://github.com/mubarakMuse",
  summary:
    "Software engineer with 8 years building production systems across healthcare, logistics, and AI-native products. Deep experience designing microservices, REST and GraphQL APIs, distributed systems, and data pipelines on AWS. Strong healthcare-data domain background (claims, eligibility, CPT/ICD codes, benefit plans). Builds with agentic coding tools daily.",
}

export const experience = [
  {
    company: "Brighter Tunnel",
    title: "Lead Software Engineer",
    location: "Remote",
    dates: "Mar 2023 – Present",
    summary:
      "Founding lead engineer shipping healthcare AI, agentic LLM pipelines, and multi-tenant SaaS products.",
    highlights: [
      {
        slug: "prior-auth-ai-agent",
        name: "Prior Auth AI Agent",
        detail:
          "Built and shipped an AI and rules engine that reads clinical notes, extracts diagnoses and procedures, matches CPT and ICD-10 against payer rules (deterministic, not LLM-guessed), validates policy criteria, and drafts grounded prior-auth letters.",
        stack: "FastAPI, React, Claude, AWS (ECS, SQS, DynamoDB, CloudFront), Terraform, GitHub Actions",
      },
      {
        slug: "opus-eternal",
        name: "Opus Eternal",
        detail:
          "Architected an agentic multi-stage pipeline that transcribes interview audio and orchestrates LLMs to produce edited book drafts.",
        stack: "Python, FastAPI, LangChain/LangGraph, React",
      },
      {
        slug: "ai-native-lms",
        name: "AI-native LMS",
        detail:
          "Built a multi-tenant learning management platform with AI-assisted lesson planning, grading, and summarization.",
        stack: "Next.js, Node.js, TypeScript, Supabase (PostgreSQL), OpenAI",
      },
      {
        slug: "ev-charging-platform",
        name: "EV charging platform",
        detail:
          "Built initial software extracting real-time data from charging stations (OCPP protocol) into multi-tenant dashboards.",
        stack: "Next.js, Node.js, PostgreSQL",
      },
    ],
  },
  {
    company: "Amazon",
    title: "Software Engineer",
    location: "Minneapolis, MN",
    dates: "Jan 2022 – Mar 2023",
    summary:
      "Built event-driven freight rerouting and real-time terminal ops dashboards on AWS serverless.",
    highlights: [
      {
        slug: "emergency-freight-rerouting",
        name: "Emergency freight rerouting",
        detail:
          "Built an event-driven Python service that reroutes trucks to alternate terminals in real time when a terminal goes down.",
        stack: "AWS Step Functions, Lambda, SQS with dead-letter queues",
      },
      {
        slug: "terminal-operations-dashboard",
        name: "Terminal operations dashboard",
        detail:
          "Built a full-stack app capturing real-time terminal data (shipments, pallets, problem-solving cases) for live operational visibility.",
        stack: "DynamoDB, React, TypeScript, Java, Kotlin, AWS CDK",
      },
    ],
  },
  {
    company: "Collective Health",
    title: "Software Engineer 2",
    location: "San Francisco, CA",
    dates: "May 2018 – Oct 2021",
    summary:
      "Led benefit-plans microservices migration and medical-code automation for 100+ enterprise clients.",
    highlights: [
      {
        slug: "plans-benefits-domain",
        name: "Plans & Benefits domain",
        detail:
          "Led the Plans and Benefits domain during a monolith-to-microservices migration; built two Java Spring Boot services (120+ API endpoints) plus a Node.js parsing layer integrating GraphQL, GitHub, and Airtable APIs.",
        stack: "Java, Spring Boot, Node.js, GraphQL, PostgreSQL",
      },
      {
        slug: "medical-code-automation",
        name: "Medical code automation",
        detail:
          "Built Python automation on Kubernetes CronJob that detected ICD/CPT code changes and auto-updated the source of truth, replacing a manual multi-API workflow; added PostgreSQL audit trail with Datadog and Prometheus monitoring.",
        stack: "Python, Kubernetes, PostgreSQL, Datadog, Prometheus",
      },
    ],
  },
  {
    company: "Karat",
    title: "Interview Engineer",
    location: "Remote",
    dates: "2022 – 2025",
    summary:
      "Conducted 1,000+ technical interviews for PayPal, Palantir, The New York Times, Lyft, and others.",
    highlights: [],
  },
  {
    company: "Code Tenderloin",
    title: "Coding Instructor",
    location: "San Francisco, CA",
    dates: "2019 – 2020",
    summary: "Volunteer coding instructor teaching programming fundamentals to underserved youth.",
    highlights: [],
    isVolunteer: true,
  },
]

export const projects = experience.flatMap((role) =>
  role.highlights.map((highlight) => ({
    slug: highlight.slug,
    name: highlight.name,
    company: role.company,
    roleTitle: role.title,
    dates: role.dates,
    location: role.location,
    summary: highlight.detail,
    detail: highlight.detail,
    stack: highlight.stack,
  }))
)

export const companyColors = {
  "Brighter Tunnel": "bg-violet-100 text-violet-800",
  Amazon: "bg-amber-100 text-amber-800",
  "Collective Health": "bg-emerald-100 text-emerald-800",
  Karat: "bg-sky-100 text-sky-800",
  "Code Tenderloin": "bg-rose-100 text-rose-800",
}

export const skills = {
  languages: ["Python", "Java", "TypeScript", "JavaScript", "Node.js", "Go", "SQL"],
  backend: [
    "Spring Boot",
    "FastAPI",
    "Express",
    "Microservices",
    "REST APIs",
    "GraphQL",
    "PostgreSQL",
    "DynamoDB",
    "Redis",
    "Supabase",
    "ETL pipelines",
  ],
  cloud: [
    "AWS Lambda",
    "Step Functions",
    "ECS",
    "SQS/SNS",
    "EventBridge",
    "DynamoDB",
    "S3",
    "EC2",
    "CloudFront",
    "CDK",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
  ],
  ai: [
    "LLM pipelines",
    "RAG",
    "Agentic workflows",
    "Anthropic & OpenAI APIs",
    "LangChain/LangGraph",
    "Claude Code",
    "Cursor",
  ],
}

export const education = {
  school: "University of Minnesota – Twin Cities",
  degree: "B.S. Computer Science",
}

export const additional = {
  languages: ["Arabic (fluent)", "English (fluent)", "Somali (fluent)", "Spanish (conversational)"],
  interests: "Traveled to 28 countries",
}

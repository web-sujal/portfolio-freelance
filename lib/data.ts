/**
 * Portfolio content and copy. Icons are rendered by components (@/components/icons).
 */

export const site = {
  name: "Web Sujal",
  tagline: "SaaS MVP & Performance Engineer",
  email: "web.sujal@gmail.com",
  year: "2026",
} as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
] as const;

export const hero = {
  badge: "Available for Q2 2026 Projects",
  title: {
    line1: "Production‑ready",
    line2: "SaaS MVPs in",
    line3: "3–6 weeks.",
  },
  description:
    "I partner with early‑stage founders to ship scalable products. You get robust auth, payments, and dashboards without the agency bloat.",
  ctaPrimary: "Start Project",
  ctaSecondary: "View Case Studies",
  techLabel: "Tech Stack",
} as const;

export const testimonials = {
  label: "Social Proof",
  title: "Trusted by ambitious founders",
  items: [
    {
      quote:
        '"Alex delivered our MVP two weeks ahead of schedule. The code quality is top-notch and our users love the speed."',
      name: "Jordan Smith",
      role: "CEO at Fleetly",
      initials: "JS",
      gradient: "from-indigo-500 to-purple-500",
      borderHover: "hover:border-indigo-500/40",
    },
    {
      quote:
        '"The best technical partner we\'ve ever had. He understands business goals as much as technical architecture."',
      name: "Maria Lopez",
      role: "Founder of HealthSync",
      initials: "ML",
      gradient: "from-emerald-500 to-teal-500",
      borderHover: "hover:border-purple-500/40",
    },
    {
      quote:
        '"Clean architecture, robust Stripe integration, and a beautiful dashboard. Highly recommend for any SaaS founder."',
      name: "David Tan",
      role: "CTO at PayFlow",
      initials: "DT",
      gradient: "from-amber-500 to-red-500",
      borderHover: "hover:border-blue-500/40",
    },
    {
      quote:
        '"Alex delivered our MVP two weeks ahead of schedule. The code quality is top-notch."',
      name: "Jordan Smith",
      role: "",
      initials: "JS",
      gradient: "from-indigo-500 to-purple-500",
      borderHover: "",
    },
    {
      quote:
        '"The best technical partner we\'ve ever had. He understands business goals perfectly."',
      name: "Maria Lopez",
      role: "",
      initials: "ML",
      gradient: "from-emerald-500 to-teal-500",
      borderHover: "",
    },
    {
      quote:
        '"Clean architecture and robust Stripe integration. Highly recommend Alex."',
      name: "David Tan",
      role: "",
      initials: "DT",
      gradient: "from-amber-500 to-red-500",
      borderHover: "",
    },
  ],
} as const;

export const caseStudies = [
  {
    id: "supersquad",
    tag: "SAAS MVP",
    year: "2026",
    tagClass: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    title: "Supersquad – Event Booking Marketplace",
    description:
      "Built a production-ready event marketplace from scratch with host dashboards, admin approval workflows, secure payment handling, and lead tracking — delivered in 4 weeks.",
    challenge:
      "Need a production‑ready MVP in under 5 weeks with complex payments and role‑based access.",
    solution:
      "Architected 15+ MongoDB schemas, 40+ REST APIs, idempotent Cashfree webhooks, and atomic booking updates.",
    result:
      "MVP delivered in 4 weeks. Reliable payment handling, host deactivation enforced in real‑time.",
    tags: ["Next.js", "Node.js", "MongoDB", "Cashfree", "Azure VM"],
    imageOnLeft: true,
    glowClass: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: "dm2buy",
    tag: "E‑COMMERCE",
    year: "2025",
    tagClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    title: "dm2buy – 25,000+ Stores Platform",
    description:
      "Scaled a multi‑tenant e‑commerce platform while slashing infrastructure costs and improving load times.",
    challenge:
      "High infra costs, 5 API calls per page (200KB payload), race conditions in order processing.",
    solution:
      "Refactored SSR → CSR, consolidated 5 calls into one (92% payload reduction), designed idempotent order flow.",
    result:
      "Infra cost ↓40%, load time ↓57% (188ms→80ms), zero race conditions on 1.5Cr+ monthly txns.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Azure"],
    imageOnLeft: false,
    glowClass: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "quvor",
    tag: "PERFORMANCE",
    year: "2024-2025",
    tagClass: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    title: "Quvor – 50% Core Web Vitals Improvement",
    description:
      "Revamped frontend performance and component architecture for a high‑traffic platform.",
    challenge:
      "14s LCP on auth pages, slow feature development, brittle nested modals, state management sprawl.",
    solution:
      "Diagnosed TCP/TLS bottlenecks → preconnect hints; built compound component library (80% dev speed); Zustand slice architecture.",
    result:
      "LCP 14s→7s (50% improvement), 80% faster feature dev, zero critical bugs in post‑creation flow.",
    tags: ["Remix", "React", "TypeScript", "Zustand"],
    imageOnLeft: true,
    glowClass: "from-amber-500/20 to-orange-500/20",
  },
] as const;

export const services = {
  title: "How I help you win",
  mvp: {
    title: "SaaS MVP Development (0 → 1)",
    description:
      "I take your idea from concept to production-ready MVP. Clean architecture, secure payments, admin workflows — built to survive real users, not just demos.",
    items: [
      "Auth & Role-Based Access",
      "Secure Payment Integration",
      "Admin & Approval Dashboards",
      "Production Deployment & Monitoring",
    ],
    borderHover: "hover:border-indigo-500/50",
  },
  performance: {
    title: "Performance & Cost Optimization",
    description:
      "Slow apps and bloated infrastructure kill margins. I optimize performance and reduce operational cost without breaking UX.",
    items: [
      "Core Web Vitals Improvement",
      "SSR → CSR Refactor",
      "API & Payload Optimization",
    ],
    borderHover: "hover:border-purple-500/50",
  },
  backend: {
    title: "Backend Systems & Payment Safety",
    description:
      "I build backend systems that protect revenue — preventing double charges, overselling, and data corruption.",
    tags: ["Webhook Validation", "Inventory Protection", "Multi-Tenant Architecture"],
    borderHover: "hover:border-emerald-500/50",
  },
  cta: {
    title: "Not sure what you need?",
    description: "Let's discuss your idea and identify the fastest path to launch.",
    button: "Book Consultation",
  },
} as const;

export const process = {
  title: "Transparent,\nIterative Process.",
  subtitle:
    "No black boxes. You see exactly what's being built, every step of the way.",
  cta: "Start your journey",
  steps: [
    {
      number: 1,
      title: "Discovery & Specs",
      description:
        "We break down your idea into core features. I deliver a technical specification document, timeline, and a fixed‑price quote. No surprises.",
      active: true,
    },
    {
      number: 2,
      title: "Deep Work Build",
      description:
        "I go heads‑down to implement the database, API, and frontend. You get regular async updates, but the focus is on shipping code, not meetings.",
      active: false,
    },
    {
      number: 3,
      title: "Weekly Demo Drops",
      description:
        "Every Friday, you get a deployed link to test progress. We iterate based on your feedback immediately.",
      active: false,
    },
    {
      number: 4,
      title: "Launch & Handoff",
      description:
        "Deployment to production (Vercel/Azure). I set up your custom domain and hand over the clean, documented source code. You own everything.",
      active: false,
    },
  ],
} as const;

export const about = {
  quote: '"Software is a tool to solve business problems."',
  body: "Hi, I'm Sujal. I specialize in building MVPs that handle real-world constraints — payments, performance, multi-tenant systems, and operational stability. I care about business impact: reducing infrastructure costs, improving conversion speed, and protecting revenue from technical failures. I don't over-engineer. I ship clean, scalable systems that founders can grow on.",
} as const;

export const blog = {
  label: "Resources",
  title: "Latest Insights",
  viewAll: "Read all articles",
  posts: [
    {
      category: "STRATEGY",
      categoryClass: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      readTime: "6 min read",
      title: "The MVP Trap: Why most founders build too much too soon",
      excerpt:
        "Learn how to identify the \"Minimum\" in MVP and why skipping core features can actually be your biggest competitive advantage in Q1.",
      date: "March 14, 2024",
      hoverClass: "hover:border-indigo-500/30",
      blobClass: "bg-indigo-500/5 group-hover:bg-indigo-500/10",
      arrowClass: "text-indigo-500",
      titleHoverClass: "group-hover:text-indigo-400",
    },
    {
      category: "TECHNICAL",
      categoryClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      readTime: "8 min read",
      title: "Next.js 14 Server Components for SaaS Dashboards",
      excerpt:
        "A deep dive into how RSCs change the way we handle data fetching and authentication in modern multi-tenant applications.",
      date: "Feb 28, 2024",
      hoverClass: "hover:border-purple-500/30",
      blobClass: "bg-purple-500/5 group-hover:bg-purple-500/10",
      arrowClass: "text-purple-500",
      titleHoverClass: "group-hover:text-purple-400",
    },
    {
      category: "GROWTH",
      categoryClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      readTime: "4 min read",
      title: "Scaling from 0 to 1,000 users on Supabase",
      excerpt:
        "Practical tips for managing database performance, edge functions, and storage as your product gains initial traction.",
      date: "Feb 12, 2024",
      hoverClass: "hover:border-emerald-500/30",
      blobClass: "bg-emerald-500/5 group-hover:bg-emerald-500/10",
      arrowClass: "text-emerald-500",
      titleHoverClass: "group-hover:text-emerald-400",
    },
  ],
} as const;

export const contact = {
  title: "Ready to ship?",
  description:
    "I'm currently booking projects for next month. Let's chat about your idea and see if we're a good fit.",
  ctaPrimary: "Book Free Consultation",
  calendlyUrl:
    "https://calendly.com/web-sujal/30min?hide_event_type_details=1&primary_color=4f46e5",
  footnote: "Technical feasibility chat. No sales pressure.",
} as const;

export const footerLinks = [
  { href: "#services", label: "Services", target: undefined, rel: undefined },
  { href: "#work", label: "Work", target: undefined, rel: undefined },
  { href: "https://github.com/web-sujal/", label: "GitHub", target: "_blank", rel: "noopener noreferrer" },
  { href: "https://www.linkedin.com/in/web-sujal", label: "LinkedIn", target: "_blank", rel: "noopener noreferrer" },
] as const;

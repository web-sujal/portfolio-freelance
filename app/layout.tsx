import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { CalendlyScript } from "@/components/layout/CalendlyScript";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.websujal.com";
const TITLE = "Web Sujal | SaaS MVP & Performance Engineer";
const DESCRIPTION =
  "Production-ready SaaS MVPs in 3–6 weeks. I partner with early-stage founders to ship scalable products with robust auth, payments, and dashboards.";
const OG_IMAGE_PATH = "/og-image.jpg";
const OG_IMAGE_ABSOLUTE = `${SITE_URL}${OG_IMAGE_PATH}`;

const JSON_LD_PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sujal",
  jobTitle: "SaaS MVP & Performance Engineer",
  url: SITE_URL,
  image: OG_IMAGE_ABSOLUTE,
  description: DESCRIPTION,
  sameAs: [
    "https://www.linkedin.com/in/web-sujal",
    "https://github.com/web-sujal",
  ],
};

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: TITLE,
  description: DESCRIPTION,

  keywords: [
    "SaaS MVP",
    "MVP development",
    "full-stack developer",
    "React",
    "Next.js",
    "startup engineer",
    "product engineer",
    "freelance developer",
    "Web Sujal",
  ],

  authors: [{ name: "Sujal", url: SITE_URL }],
  creator: "Sujal",

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Web Sujal",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE_ABSOLUTE,
        width: 1200,
        height: 630,
        alt: "Web Sujal – SaaS MVP & Performance Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_ABSOLUTE],
    creator: "@web_sujal",
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", sizes: "any" },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
  },

  manifest: "/favicon_io/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_PERSON) }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} antialiased selection:bg-indigo-500/30 selection:text-indigo-200 font-sans`}
      >
        <CalendlyScript />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

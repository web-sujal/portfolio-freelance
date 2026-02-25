import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { CalendlyScript } from "@/components/layout/CalendlyScript";

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
  title: "Web Sujal | SaaS MVP & Performance Engineer",
  description:
    "Production-ready SaaS MVPs in 3–6 weeks. I partner with early-stage founders to ship scalable products with robust auth, payments, and dashboards.",
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

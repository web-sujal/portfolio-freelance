import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

import "./globals.css";

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
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} antialiased selection:bg-indigo-500/30 selection:text-indigo-200 font-sans`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

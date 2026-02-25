"use client";

import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (o: object) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL =
  "https://calendly.com/web-sujal/30min?hide_event_type_details=1&primary_color=4f46e5";

export function CalendlyScript() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== "undefined" && window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: CALENDLY_URL,
            text: "Book Free Consultation",
            color: "#4f46e5",
            textColor: "#ffffff",
            branding: true,
          });
        }
      }}
    />
  );
}

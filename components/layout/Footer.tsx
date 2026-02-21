import Link from "next/link";

import { site, footerLinks } from "@/lib/data";
import { TerminalWindowIcon } from "@/components/icons";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0b0f17] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center text-white">
            <TerminalWindowIcon weight="bold" aria-hidden />
          </div>

          <span className="font-bold text-white">{site.name}</span>
        </div>

        <div className="flex gap-8 text-sm text-slate-400">
          {footerLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="hover:text-indigo-400 transition-colors"
              target={link.target}
              rel={link.rel}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="text-xs text-slate-600">
          © {site.year} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

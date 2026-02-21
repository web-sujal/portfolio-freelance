"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site, footerLinks } from "@/lib/data";
import { TerminalWindowIcon } from "@/components/icons";
import { springSmooth } from "@/lib/motion";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

const linkVariants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: springSmooth,
  },
};

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="border-t border-white/5 bg-[#0b0f17] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <Link
          href="#"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          aria-label={`${site.name} home`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center text-white">
            <TerminalWindowIcon weight="bold" aria-hidden />
          </div>
          <span className="font-bold text-white">{site.name}</span>
        </Link>

        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-slate-400"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={reduceMotion ? undefined : containerVariants}
        >
          {footerLinks.map((link) => (
            <motion.span
              key={link.href + link.label}
              variants={reduceMotion ? undefined : linkVariants}
            >
              <Link
                href={link.href}
                className="hover:text-indigo-400 transition-colors"
                target={link.target}
                rel={link.rel}
              >
                {link.label}
              </Link>
            </motion.span>
          ))}
        </motion.div>

        <div className="text-xs text-slate-600">
          © {site.year} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { site, navLinks } from "@/lib/data";
import {
  TerminalWindowIcon,
  ArrowRightIcon,
  ListIcon,
  XIcon,
} from "@/components/icons";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      <nav className="nav-glass rounded-full px-4 sm:px-6 py-3 w-full max-w-4xl flex items-center justify-between shadow-2xl shadow-black/20">
        <Link
          href="#"
          className="flex items-center gap-2 sm:gap-3 group min-w-0"
          aria-label={`${site.name} home`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            close();
          }}
        >
          <div className="w-9 h-9 shrink-0 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
            <TerminalWindowIcon weight="bold" className="text-lg" aria-hidden />
          </div>
          <span className="font-bold text-base sm:text-lg tracking-tight text-white truncate">
            <span className="text-indigo-400">Web</span>Sujal
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-[#151b2b]/50 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="#contact"
            className="hidden sm:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
          >
            <span>Book Call</span>
            <ArrowRightIcon weight="bold" aria-hidden />
          </Link>

          <button
            type="button"
            className="md:hidden text-white p-2 -mr-1 rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <XIcon weight="bold" className="text-2xl" aria-hidden />
            ) : (
              <ListIcon weight="bold" className="text-2xl" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="md:hidden fixed inset-0 top-24 z-40 bg-[#0b0f17]/95 backdrop-blur-sm"
        aria-hidden={!open}
        style={{
          visibility: open ? "visible" : "hidden",
          opacity: open ? 1 : 0,
          transition: "visibility 0.2s, opacity 0.2s",
        }}
        onClick={close}
      >
        <div
          className="flex flex-col pt-8 px-6 gap-1 max-h-[calc(100vh-8rem)] overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-lg font-medium transition-colors"
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-4 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-xl text-base font-semibold transition-colors"
            onClick={close}
          >
            <span>Book Call</span>
            <ArrowRightIcon weight="bold" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}

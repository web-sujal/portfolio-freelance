import Link from "next/link";
import { site, navLinks } from "@/lib/data";
import {
  TerminalWindowIcon,
  ArrowRightIcon,
  ListIcon,
} from "@/components/icons";

export function Nav() {
  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      <nav className="nav-glass rounded-full px-6 py-3 w-full max-w-4xl flex items-center justify-between shadow-2xl shadow-black/20">
        <Link
          href="#"
          className="flex items-center gap-3 group"
          aria-label={`${site.name} home`}
        >
          <div className="w-9 h-9 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
            <TerminalWindowIcon weight="bold" className="text-lg" aria-hidden />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
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

        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden sm:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
          >
            <span>Book Call</span>
            <ArrowRightIcon weight="bold" aria-hidden />
          </Link>
          <button
            type="button"
            className="md:hidden text-white p-2"
            aria-label="Open menu"
          >
            <ListIcon weight="bold" className="text-2xl" aria-hidden />
          </button>
        </div>
      </nav>
    </div>
  );
}

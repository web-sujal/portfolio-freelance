import Link from "next/link";

import {
  AtomIcon,
  CloudIcon,
  DatabaseIcon,
  FileTsIcon,
  PackageIcon,
  WindIcon,
} from "@/components/icons";
import { HeroCodeWindow } from "@/components/ui/HeroCodeWindow";
import { hero } from "@/lib/data";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20">
      <div className="absolute inset-0 grid-bg -z-10" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {hero.badge}
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="gradient-text">{hero.title.line1}</span>
              <br />
              {hero.title.line2} <br />
              <span className="text-indigo-400 relative inline-block">
                {hero.title.line3}
                <svg
                  className="absolute -bottom-2 left-0 w-full text-indigo-500/30"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M2.00025 7.00001C35.9189 3.66668 126.904 -1.79999 198.001 2.00002"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#contact"
                className="h-14 px-8 rounded-xl bg-white text-[#0b0f17] font-bold text-lg flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                {hero.ctaPrimary}
              </Link>

              <Link
                href="#work"
                className="h-14 px-8 rounded-xl bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                {hero.ctaSecondary}
              </Link>
            </div>

            <div className="pt-10 flex flex-col gap-4">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                {hero.techLabel}
              </p>

              <div className="flex gap-8 text-slate-400">
                <FileTsIcon
                  weight="fill"
                  size={28}
                  className="hover:text-white transition-colors"
                  aria-label="TypeScript"
                />

                <AtomIcon
                  weight="bold"
                  size={28}
                  className="hover:text-cyan-400 transition-colors"
                  aria-label="React/Next.js"
                />

                <DatabaseIcon
                  weight="fill"
                  size={28}
                  className="hover:text-emerald-400 transition-colors"
                  aria-label="MongoDB"
                />

                <WindIcon
                  weight="fill"
                  size={28}
                  className="hover:text-sky-400 transition-colors"
                  aria-label="Tailwind"
                />

                <CloudIcon
                  weight="bold"
                  size={28}
                  className="hover:text-blue-400 transition-colors"
                  aria-label="Azure/Cloudinary"
                />
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
            <HeroCodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

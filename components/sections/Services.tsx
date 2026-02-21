import Link from "next/link";

import { services } from "@/lib/data";
import {
  RocketLaunchIcon,
  LightningIcon,
  HardDrivesIcon,
  CheckCircleIcon,
  TrendUpIcon,
} from "@/components/icons";

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {services.title}
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* MVP Development */}
          <div
            className={`md:col-span-2 bg-[#151b2b] rounded-3xl p-8 border border-white/5 transition-all group relative overflow-hidden ${services.mvp.borderHover}`}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all"
              aria-hidden
            />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <RocketLaunchIcon
                  weight="duotone"
                  className="text-3xl"
                  aria-hidden
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {services.mvp.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-8 max-w-lg">
                {services.mvp.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.mvp.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-[#0b0f17]/50 p-3 rounded-lg border border-white/5"
                  >
                    <CheckCircleIcon
                      weight="fill"
                      className="text-indigo-400"
                      aria-hidden
                    />

                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance */}
          <div
            className={`bg-[#151b2b] rounded-3xl p-8 border border-white/5 transition-all group relative overflow-hidden flex flex-col justify-between ${services.performance.borderHover}`}
          >
            <div
              className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden
            />

            <div>
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <LightningIcon
                  weight="duotone"
                  className="text-3xl"
                  aria-hidden
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {services.performance.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {services.performance.description}
              </p>
            </div>

            <ul className="space-y-3">
              {services.performance.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <TrendUpIcon
                    weight="bold"
                    className="text-purple-400"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div
            className={`bg-[#151b2b] rounded-3xl p-8 border border-white/5 transition-all group relative overflow-hidden ${services.backend.borderHover}`}
          >
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <HardDrivesIcon
                weight="duotone"
                className="text-3xl"
                aria-hidden
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              {services.backend.title}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {services.backend.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {services.backend.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="md:col-span-2 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-center md:text-left">
            <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">
                {services.cta.title}
              </h3>

              <p className="text-indigo-200 text-sm">
                {services.cta.description}
              </p>
            </div>

            <Link
              href="#contact"
              className="relative z-10 whitespace-nowrap px-6 py-3 bg-white text-indigo-950 font-bold rounded-xl hover:bg-indigo-50 transition-colors"
            >
              {services.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

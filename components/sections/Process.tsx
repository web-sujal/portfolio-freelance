import Link from "next/link";

import { process as processData } from "@/lib/data";
import { ArrowRightIcon } from "@/components/icons";
import { FadeInView } from "@/components/motion/FadeInView";

const Process = () => {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 -z-10" aria-hidden />

      <div className="max-w-6xl mx-auto px-6">
        <FadeInView>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Transparent,
                  <br />
                  Iterative Process.
                </h2>

                <p className="text-lg text-slate-400 font-normal mt-4 max-w-sm">
                  {processData.subtitle}
                </p>

                <div className="mt-12 hidden lg:block">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
                  >
                    {processData.cta}{" "}
                    <ArrowRightIcon weight="bold" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-0 relative">
              <div
                className="absolute left-4 sm:left-6 top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
                aria-hidden
              />

              {processData.steps.map((step) => (
                <div
                  key={step.number}
                  className="relative pl-14 sm:pl-20 pb-12 sm:pb-16 group last:pb-0"
                >
                  <div
                    className={`absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-base sm:text-lg z-10 transition-transform group-hover:scale-110 ${
                      step.active
                        ? "bg-[#0b0f17] border border-indigo-500 text-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                        : "bg-[#0b0f17] border border-slate-700 text-slate-400 group-hover:border-indigo-500 group-hover:text-indigo-500 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                    }`}
                  >
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};

export default Process;

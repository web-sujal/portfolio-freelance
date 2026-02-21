import { StarIcon } from "@/components/icons";
import { testimonials } from "@/lib/data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-[#0b0f17]/50">
      <div
        className="absolute inset-0 grid-bg opacity-10 pointer-events-none"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 overflow-hidden relative">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 block">
              {testimonials.label}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {testimonials.title}
            </h2>
          </div>

          <div className="flex whitespace-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex animate-scroll hover:[animation-play-state:paused] gap-6 py-4">
              <div className="flex gap-6">
                {testimonials.items.map((t, i) => (
                  <div
                    key={`${t.name}-${i}`}
                    className={`w-[400px] bg-[#151b2b]/80 border border-white/5 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 ${t.borderHover}`}
                  >
                    <div className="flex gap-1 text-amber-400 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <StarIcon key={s} weight="fill" aria-hidden />
                      ))}
                    </div>

                    <p className="text-slate-300 italic mb-6 whitespace-normal">
                      {t.quote}
                    </p>

                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.gradient} flex items-center justify-center text-white font-bold`}
                      >
                        {t.initials}
                      </div>

                      <div>
                        <p className="text-white font-bold text-sm">{t.name}</p>
                        {t.role ? (
                          <p className="text-slate-500 text-xs">{t.role}</p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-6">
                {testimonials.items.map((t, i) => (
                  <div
                    key={`dup-${t.name}-${i}`}
                    className={`w-[400px] bg-[#151b2b]/80 border border-white/5 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 ${t.borderHover}`}
                  >
                    <div className="flex gap-1 text-amber-400 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <StarIcon key={s} weight="fill" aria-hidden />
                      ))}
                    </div>

                    <p className="text-slate-300 italic mb-6 whitespace-normal">
                      {t.quote}
                    </p>

                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.gradient} flex items-center justify-center text-white font-bold`}
                      >
                        {t.initials}
                      </div>

                      <div>
                        <p className="text-white font-bold text-sm">{t.name}</p>
                        {t.role ? (
                          <p className="text-slate-500 text-xs">{t.role}</p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

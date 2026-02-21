export function HeroCodeWindow() {
  return (
    <div className="relative w-full max-w-lg bg-[#0F131F] rounded-2xl border border-slate-800 code-window transform [transform:rotateY(12deg)_rotateX(6deg)] hover:rotate-0 transition-all duration-700 ease-out p-1 animate-float">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#151B2B] rounded-t-xl">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="text-xs font-mono text-slate-500">deploy-mvp.ts</div>
        <div className="w-4" />
      </div>

      <div className="p-6 font-mono text-sm overflow-hidden">
        <div className="flex gap-4">
          <div className="flex flex-col text-slate-700 text-right select-none">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          <div className="text-slate-300">
            <p>
              <span className="text-purple-400">import</span> {"{ "}
              <span className="text-red-400">Ship</span>
              {" }"} <span className="text-purple-400">from</span>{" "}
              <span className="text-green-400">&apos;@web-sujal/dev&apos;</span>
              ;
            </p>
            <p className="h-4" />
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">project</span> ={" "}
              <span className="text-purple-400">await</span>{" "}
              <span className="text-yellow-400">Ship</span>.init({"{"}
            </p>
            <p className="pl-4">
              speed: <span className="text-orange-400">&apos;turbo&apos;</span>,
            </p>
            <p className="pl-4">
              quality:{" "}
              <span className="text-orange-400">
                &apos;production-grade&apos;
              </span>
              ,
            </p>
            <p className="pl-4">
              stack: [
              <span className="text-orange-400">&apos;Next.js&apos;</span>,{" "}
              <span className="text-orange-400">&apos;Node.js&apos;</span>,{" "}
              <span className="text-orange-400">&apos;MongoDB&apos;</span>]
            </p>
            <p>{"});"}</p>
            <p className="h-4" />
            <p>
              <span className="text-slate-500">// 🚀 Ready to launch</span>
            </p>
            <p>
              <span className="text-purple-400">if</span> (project.isReady){" "}
              {"{"}
            </p>
            <p className="pl-4">
              <span className="text-blue-400">console</span>.log(
              <span className="text-green-400">&apos;MVP Deployed&apos;</span>);
            </p>
            <p>{"}"}</p>
          </div>
        </div>
      </div>

      <div
        className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 -z-10"
        aria-hidden
      />
    </div>
  );
}

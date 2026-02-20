import type { caseStudies } from "@/lib/data";
import { CalendarBlankIcon, GaugeIcon } from "@/components/icons";

type CaseStudy = (typeof caseStudies)[number];

function MockBrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#151b2b] shadow-2xl">
      <div className="bg-[#0b0f17] border-b border-white/5 p-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
        </div>
        <div className="flex-1 text-center">
          <div className="bg-[#151b2b] rounded mx-auto w-32 h-5" />
        </div>
      </div>
      <div className="aspect-[16/10] bg-slate-900 p-8 flex items-center justify-center relative">
        {children}
      </div>
    </div>
  );
}

function PlaceholderMVP() {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 space-y-4 transform group-hover:-translate-y-2 transition-transform duration-500">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <CalendarBlankIcon weight="bold" className="text-xl" aria-hidden />
        </div>
        <div className="h-8 w-24 bg-slate-100 rounded-md" />
      </div>
      <div className="space-y-3">
        <div className="h-20 bg-slate-50 rounded border border-slate-100 w-full" />
        <div className="flex gap-3">
          <div className="h-20 bg-slate-50 rounded border border-slate-100 w-1/2" />
          <div className="h-20 bg-slate-50 rounded border border-slate-100 w-1/2" />
        </div>
      </div>
    </div>
  );
}

function PlaceholderEcommerce() {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 space-y-4 transform group-hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-4">
        <div className="h-6 w-32 bg-slate-800 rounded" />
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-red-400 border-2 border-white" />
          <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1 h-24 bg-purple-50 rounded border border-purple-100" />
        <div className="col-span-1 h-24 bg-slate-50 rounded border border-slate-100" />
        <div className="col-span-1 h-24 bg-slate-50 rounded border border-slate-100" />
      </div>
      <div className="h-16 bg-slate-50 rounded border border-slate-100" />
    </div>
  );
}

function PlaceholderPerformance() {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 space-y-4 transform group-hover:-translate-y-2 transition-transform duration-500">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
          <GaugeIcon weight="bold" className="text-xl" aria-hidden />
        </div>
        <div className="h-8 w-24 bg-slate-100 rounded-md" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-16 bg-amber-50 rounded border border-amber-100" />
        <div className="h-16 bg-slate-50 rounded border border-slate-100" />
      </div>
      <div className="h-12 bg-slate-50 rounded border border-slate-100" />
    </div>
  );
}

function PlaceholderForStudy(study: CaseStudy) {
  if (study.id === "supersquad") return <PlaceholderMVP />;
  if (study.id === "dm2buy") return <PlaceholderEcommerce />;
  return <PlaceholderPerformance />;
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const content = (
    <>
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-mono border ${study.tagClass}`}
          >
            {study.tag}
          </span>
          <span className="text-slate-500 text-sm font-mono">{study.year}</span>
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
        <p className="text-slate-400 leading-relaxed">{study.description}</p>
      </div>

      <div className="bg-[#151b2b] rounded-xl p-6 border border-white/5 space-y-4">
        <div className="grid grid-cols-[80px_1fr] gap-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider pt-1">
            Challenge
          </span>
          <span className="text-sm text-slate-300">{study.challenge}</span>
        </div>
        <div className="h-px bg-white/5" />
        <div className="grid grid-cols-[80px_1fr] gap-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider pt-1">
            Solution
          </span>
          <span className="text-sm text-slate-300">{study.solution}</span>
        </div>
        <div className="h-px bg-white/5" />
        <div className="grid grid-cols-[80px_1fr] gap-4">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider pt-1">
            Result
          </span>
          <span className="text-sm text-emerald-400 font-bold">
            {study.result}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-slate-500 font-mono px-2 py-1 rounded bg-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const imageBlock = (
    <div className="relative group">
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${study.glowClass} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        aria-hidden
      />
      <div className="relative">
        <MockBrowserFrame>{PlaceholderForStudy(study)}</MockBrowserFrame>
      </div>
    </div>
  );

  return (
    <div className="group grid lg:grid-cols-12 gap-12 items-center">
      <div
        className={`lg:col-span-7 relative ${study.imageOnLeft ? "" : "order-1 lg:order-2"}`}
      >
        {imageBlock}
      </div>
      <div
        className={`lg:col-span-5 space-y-8 ${study.imageOnLeft ? "" : "order-2 lg:order-1"}`}
      >
        {content}
      </div>
    </div>
  );
}

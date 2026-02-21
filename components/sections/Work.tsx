import { caseStudies } from "@/lib/data";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";

const Work = () => {
  return (
    <section id="work" className="py-32 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase mb-2 block">
              Portfolio
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Selected Work
            </h2>
          </div>
        </div>

        <div className="space-y-20 sm:space-y-32">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

import { about } from "@/lib/data";
import Image from "next/image";
import { FadeInView } from "@/components/motion/FadeInView";

const About = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-[#151b2b]/50">
      <FadeInView className="max-w-4xl mx-auto px-6 text-center">
        <div className="size-40 sm:size-48 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-8 p-1">
          <div className="w-full h-full bg-[#0b0f17] rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/sujal-pfp.jpg"
              alt="About"
              width={192}
              height={192}
              className="rounded-full"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">{about.quote}</h2>

        <div className="text-slate-400 leading-relaxed max-w-2xl mx-auto space-y-4">
          <p>{about.body}</p>
        </div>
      </FadeInView>
    </section>
  );
};

export default About;

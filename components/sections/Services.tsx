import { services } from "@/lib/data";
import { FadeInView } from "@/components/motion/FadeInView";
import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInView className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {services.title}
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full" />
        </FadeInView>

        <ServicesGrid />
      </div>
    </section>
  );
};

export default Services;

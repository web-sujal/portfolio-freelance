import { BackgroundBlobs } from "@/components/layout/BackgroundBlobs";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Work } from "@/components/sections/Work";

const Home = () => {
  return (
    <>
      <BackgroundBlobs />
      <Nav />

      <main>
        <Hero />
        <Testimonials />

        <Work />
        <Services />

        <Process />
        <About />

        <Blog />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;

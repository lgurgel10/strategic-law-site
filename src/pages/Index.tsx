import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Team from "@/components/Team";
import Impact from "@/components/Impact";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Credentials />
      <About />
      <PracticeAreas />
      <Team />
      <Impact />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

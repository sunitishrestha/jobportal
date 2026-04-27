import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Analytics from "./Analytics";
import { Briefcase } from "lucide-react";
import Footer from "./Footer";

const LandingPages = () => {
  return (
    <div className="min-h-screen mb=[100vh]">
      <Header />
      <Hero />
      <Features />
      <Analytics />
      <Footer />
    </div>
  );
};

export default LandingPages;

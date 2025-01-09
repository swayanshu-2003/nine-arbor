import Contact from "@/components/contact/Contact";
import FeaturesSection from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero2";
import Navbar from "@/components/navbar/Navbar";
import TeamSection from "@/components/our-team/OurTeam";
import Projects from "@/components/projects/Projects";
import Solutions from "@/components/solutions/Solutions";
import UnmatchedSection from "@/components/unmatched-section/UnmatchedSection";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <UnmatchedSection />
      <Solutions />
      <Projects />
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  );
}

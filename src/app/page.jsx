import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AppPreview from "@/components/AppPreview";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Features />
      <HowItWorks />
      <AppPreview />
      <Skills />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

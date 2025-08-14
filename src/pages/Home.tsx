import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header/Header";
import { Hero } from "@/components/modulus/home/Hero";
import { Features } from "@/components/modulus/home/Features";
import { Testimonials } from "@/components/modulus/home/Testimonials";
import { Pricing } from "@/components/modulus/home/Pricing";
import { Contact } from "@/components/modulus/home/Contact";
import { Footer } from "@/components/layout/Footer";
import { useNavigationStore } from "@/store/navigationStore";

export function Home() {
  const { setActiveSection } = useNavigationStore();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "features",
        "testimonials",
        "pricing",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= 100 && rect.bottom >= 100;

          if (isVisible) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white"
    >
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

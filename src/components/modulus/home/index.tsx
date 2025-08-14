// framer motion
import { motion } from "framer-motion";

// home components
import { Hero } from "@/components/modulus/home/components/Hero";
import { Features } from "@/components/modulus/home/components/Features";
import { Testimonials } from "@/components/modulus/home/components/Testimonials";
import { Pricing } from "@/components/modulus/home/components/Pricing";
import { Contact } from "@/components/modulus/home/components/Contact";

// custom hooks
import useHome from "./hooks/useHome";

export function Home() {
  useHome(); // Hook is used for scroll tracking, no return value needed

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white"
    >
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
    </motion.div>
  );
}

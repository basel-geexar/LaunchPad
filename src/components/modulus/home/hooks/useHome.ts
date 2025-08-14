// hooks
import { useEffect } from "react";

// store
import { useNavigationStore } from "@/store/navigationStore";

export default function useHome() {
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

    
    return {
        setActiveSection
    }
}

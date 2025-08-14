import { useNavigationStore } from "@/store/navigationStore";
import { useLocation } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "features", label: "Features", path: "/#features" },
  { id: "testimonials", label: "Testimonials", path: "/#testimonials" },
  { id: "pricing", label: "Pricing", path: "/#pricing" },
  { id: "contact", label: "Contact", path: "/#contact" },
];

const routeItems = [
  { id: "about", label: "About", path: "/about" },
  { id: "services", label: "Services", path: "/services" },
];


export default function useHeader() {
  const { isMenuOpen, activeSection, toggleMenu, closeMenu, setActiveSection } =
    useNavigationStore();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      closeMenu();
    }
  };

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (item.path.startsWith("/#")) {
      // Handle anchor links on home page
      if (isHomePage) {
        const sectionId = item.path.substring(2);
        scrollToSection(sectionId);
      } else {
        // Navigate to home page with anchor
        window.location.href = item.path;
      }
    } else {
      // Handle regular navigation
      closeMenu();
    }
  };

  return {
    navItems,
    routeItems,
    isMenuOpen,
    activeSection,
    toggleMenu,
    closeMenu,
    setActiveSection,
    handleNavClick,
    isHomePage,
    scrollToSection,
  };
}

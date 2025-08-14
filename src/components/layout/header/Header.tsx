import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Custom Hooks
import useHeader from "@/components/layout/header/useHeader";

export function Header() {
  const {
    navItems,
    routeItems,
    isMenuOpen,
    activeSection,
    toggleMenu,
    handleNavClick,
    isHomePage,
  } = useHeader();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">LaunchPad</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Home page sections */}
            {isHomePage &&
              navItems.slice(1).map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}

            {!isHomePage &&
              navItems.slice(0, 1).map((item) => (
                <Link key={item.id} to={item.path}>
                  <motion.span
                    className="text-sm font-medium transition-colors hover:text-blue-600 text-gray-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}

            {/* Route navigation */}
            {routeItems.map((item) => (
              <Link key={item.id} to={item.path}>
                <motion.span
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Home navigation when not on home page */}
                {!isHomePage &&
                  navItems.slice(0, 1).map((item) => (
                    <Link key={item.id} to={item.path}>
                      <motion.div
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  ))}

                {/* Home page sections */}
                {isHomePage &&
                  navItems.slice(1).map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        activeSection === item.id
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}

                {/* Route navigation */}
                {routeItems.map((item) => (
                  <Link key={item.id} to={item.path}>
                    <motion.div
                      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        location.pathname === item.path
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                ))}

                <div className="px-3 py-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

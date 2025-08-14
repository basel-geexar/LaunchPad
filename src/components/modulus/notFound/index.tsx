import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="text-8xl font-bold text-gray-300 mb-8">404</div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Page Not Found
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Go Home
            </Link>

            <div className="text-gray-500">
              <p>Or navigate to one of these pages:</p>
              <div className="flex justify-center space-x-4 mt-4">
                <Link to="/about" className="text-blue-600 hover:underline">
                  About
                </Link>
                <Link to="/services" className="text-blue-600 hover:underline">
                  Services
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

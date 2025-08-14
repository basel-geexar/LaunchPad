import { motion } from "framer-motion";

export function About() {
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            About Us
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Welcome to our company! We are passionate about delivering
              exceptional solutions that drive business growth and innovation.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that
              streamline operations and enhance customer experiences.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 mb-6">
              To be the leading provider of innovative business solutions,
              recognized for our commitment to excellence and customer success.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Core Values
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Innovation and creativity in everything we do</li>
              <li>Customer-centric approach to problem-solving</li>
              <li>Integrity and transparency in all relationships</li>
              <li>Continuous learning and improvement</li>
              <li>Collaboration and teamwork</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

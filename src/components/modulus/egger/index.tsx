import { motion } from "framer-motion";

export default function Eagger() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1>Eagger</h1>
      </div>
    </motion.div>
  );
}

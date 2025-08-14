import { motion } from "framer-motion";

// components
import MainEager from "@/components/modulus/egger/components/mainEager";
import SelectColorDialog from "./components/selectColorDialog";

// hooks
import useEgger from "@/components/modulus/egger/hooks/useEgger";

export default function Eagger() {
  const { isOpen, images, handleColorChange, handleClose } = useEgger();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-white group"
      >
        <MainEager images={images} />
      </motion.div>
      <SelectColorDialog
        onColorSelect={handleColorChange}
        open={isOpen}
        onOpenChange={handleClose}
      />
    </>
  );
}

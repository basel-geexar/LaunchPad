import { motion } from "framer-motion";

// components
import MainEager from "@/components/modulus/egger/components/mainEager";
import SelectColorDialog from "./components/selectColorDialog";

// hooks
import useEgger from "@/components/modulus/egger/hooks/useEgger";
import { LoaderPinwheel } from "lucide-react";

export default function Eagger() {
  const { isOpen, images, handleColorChange, setIsOpen, colors, isLoading } =
    useEgger();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="h-[80vh] bg-white group relative"
      >
        {isLoading && (
          <div className="absolute top-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-fit">
            <LoaderPinwheel className="size-10 text-white animate-spin " />
          </div>
        )}

        <MainEager images={images} />

        {!isLoading && (
          <SelectColorDialog
            colors={colors}
            onColorSelect={handleColorChange}
            open={isOpen}
            onOpenChange={setIsOpen}
          />
        )}
      </motion.div>
    </>
  );
}

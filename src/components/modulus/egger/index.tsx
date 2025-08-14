import { motion } from "framer-motion";

// components
import MainEager from "@/components/modulus/egger/components/mainEager";
import SelectColorDialog from "./components/selectColorDialog";

// hooks
import useEgger from "@/components/modulus/egger/hooks/useEgger";

export default function Eagger() {
  const {
    isOpen,
    images,
    handleColorChange,
    setIsOpen,
    colors,
    isLoading,
    currentImageLoaded,
    imageLoadingError,
    isTransitioning,
    nextImage,
  } = useEgger();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="h-[80vh] bg-white group relative"
      >
        <MainEager
          images={images}
          isLoading={isLoading}
          currentImageLoaded={currentImageLoaded}
          imageLoadingError={imageLoadingError}
          isTransitioning={isTransitioning}
          nextImage={nextImage}
        />

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

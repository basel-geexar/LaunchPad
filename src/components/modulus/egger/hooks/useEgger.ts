import { useState } from "react";
import image0 from "@/components/assets/0.jfif";
import image1 from "@/components/assets/1.jfif";
import image2 from "@/components/assets/2.jfif";

const allImages = [
        image0,
        image1,
        image2, 

]


export default function useEgger() {

    // states
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [images, setImages] = useState<string[]>([allImages[0]]);
    
    const handleColorChange = (image: string) => {
        setImages([...images, image]);
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);

    }

  return {
    isOpen,
      images,
    allImages,
    handleColorChange,
    handleClose,
  };
}

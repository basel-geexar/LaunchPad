import { useState } from "react";
import image0 from "@/components/assets/0.jfif";
import image1 from "@/components/assets/1.jfif";
import image2 from "@/components/assets/2.jfif";

const allImages = [
        image0,
        image1,
        image2, 

]

const colors = [
    {
        code: "#FF0000",
        image: image0,
    },
    {
        code: "#00FF00",
        image: image1,
    },
    {
        code: "#0000FF",
        image: image2,
    },
    
]

export default function useEgger() {

    // states
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [images, setImages] = useState<string[]>([allImages[0]]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleColorChange = (color: { code: string; image: string }) => {
        setIsLoading(true);
        setIsOpen(true);

        setTimeout(() => {
            setImages([...images, color.image]);
            setIsLoading(false);
        }, 1000);
    }

    const handleClose = () => {
        setIsOpen(false);

    }

  return {
    isOpen,
      images,
      colors,
    allImages,
    handleColorChange,
      setIsOpen,
      handleClose,
      isLoading,
  };
}

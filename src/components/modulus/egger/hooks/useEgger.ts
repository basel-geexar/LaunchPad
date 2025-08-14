import { useState, useCallback, useEffect } from "react";
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
        code: "#B0B3B5",
        image: image0,
    },
    {
        code: "#906A4F",
        image: image1,
    },
    {
        code: "#1E1E20",
        image: image2,
    },
    
]

export default function useEgger() {

    // states
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [images, setImages] = useState<string[]>([allImages[0]]);
    const [isLoading, setIsLoading] = useState<boolean>(false); // Start with false since we have initial image
    const [currentImageLoaded, setCurrentImageLoaded] = useState<boolean>(true); // Start with true since initial image is ready
    const [imageLoadingError, setImageLoadingError] = useState<boolean>(false);
    const [nextImage, setNextImage] = useState<string>(""); // Store the next image separately

    // Function to preload an image and track its loading state
    const preloadImage = useCallback((imageSrc: string): Promise<boolean> => {
        return new Promise((resolve) => {
            const img = new Image();
            
            img.onload = () => {
                resolve(true);
            };
            
            img.onerror = () => {
                resolve(false);
            };
            
            img.src = imageSrc;
        });
    }, []);

    // Effect to handle next image loading
    useEffect(() => {
        if (!nextImage) return;

        setCurrentImageLoaded(false);
        setImageLoadingError(false);

        preloadImage(nextImage).then((success) => {
            if (success) {
                // Only update images array when next image is fully loaded
                setImages(prevImages => [...prevImages, nextImage]);
                setCurrentImageLoaded(true);
                setImageLoadingError(false);
                setIsLoading(false);
                setNextImage(""); // Clear next image
            } else {
                setCurrentImageLoaded(false);
                setImageLoadingError(true);
                setIsLoading(false);
                setNextImage(""); // Clear next image
            }
        });
    }, [nextImage, preloadImage]);

    const handleColorChange = useCallback((color: { code: string; image: string }) => {
        setIsLoading(true);
        setIsOpen(true);
        
        // Set the next image to load, but don't update images array yet
        setNextImage(color.image);
        
        // Keep loading state active until next image is fully loaded
        // The useEffect above will handle the actual loading and transition
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    // Computed loading state that considers both hook loading and image loading
    const isImageLoading = isLoading || !currentImageLoaded;

  return {
    isOpen,
    images,
    colors,
    allImages,
    handleColorChange,
    setIsOpen,
    handleClose,
    isLoading: isImageLoading, // Return the combined loading state
    currentImageLoaded,
    imageLoadingError,
  };
}

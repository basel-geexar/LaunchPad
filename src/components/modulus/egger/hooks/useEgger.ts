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
    const [images, setImages] = useState<string[]>([]); // Start with empty array
    const [isLoading, setIsLoading] = useState<boolean>(true); // Start with true to show loading for initial image
    const [currentImageLoaded, setCurrentImageLoaded] = useState<boolean>(false); // Start with false since initial image needs to load
    const [imageLoadingError, setImageLoadingError] = useState<boolean>(false);
    const [nextImage, setNextImage] = useState<string>(""); // Store the next image separately
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false); // Track transition state

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

    // Effect to handle initial image loading when component mounts
    useEffect(() => {
        const initialImage = allImages[0];
        if (!initialImage) return;

        // Keep loading true until image is fully loaded
        setIsLoading(true);
        setCurrentImageLoaded(false);

        preloadImage(initialImage).then((success) => {
            if (success) {
                // Only set the image after it's fully loaded
                setImages([initialImage]);
                setCurrentImageLoaded(true);
                setImageLoadingError(false);
                setIsLoading(false);
            } else {
                setCurrentImageLoaded(false);
                setImageLoadingError(true);
                setIsLoading(false);
            }
        });
    }, [preloadImage]);

    // Effect to handle next image loading
    useEffect(() => {
        if (!nextImage) return;

        // Start transition - keep current image visible
        setIsTransitioning(true);
        setIsLoading(true);
        setImageLoadingError(false);

        preloadImage(nextImage).then((success) => {
            if (success) {
                // Next image is loaded and ready
                setIsLoading(false);
                
                // Start the crossfade transition
                setTimeout(() => {
                    // Update images array with the new image
                    setImages(prevImages => [...prevImages, nextImage]);
                    setCurrentImageLoaded(true);
                    
                    // End transition after crossfade completes
                    setTimeout(() => {
                        setIsTransitioning(false);
                        setNextImage(""); // Clear next image
                    }, 1000); // Wait for CSS transition to complete
                    
                }, 100); // Small delay to ensure smooth transition start
                
            } else {
                setImageLoadingError(true);
                setIsLoading(false);
                setIsTransitioning(false);
                setNextImage(""); // Clear next image
            }
        });
    }, [nextImage, preloadImage]);

    const handleColorChange = useCallback((color: { code: string; image: string }) => {
        // Don't start loading if it's the same image
        if (images[images.length - 1] === color.image) {
            return;
        }
        
        setIsOpen(true);
        
        // Set the next image to load, but don't update images array yet
        setNextImage(color.image);
        
        // The useEffect above will handle the actual loading and transition
    }, [images]);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    // Simplified loading state - just check if we're loading or if current image isn't loaded
    const isImageLoading = isLoading;

  return {
    isOpen,
    images,
    colors,
    allImages,
    handleColorChange,
    setIsOpen,
    handleClose,
    isLoading: isImageLoading, // Return the simplified loading state
    currentImageLoaded,
    imageLoadingError,
    isTransitioning,
    nextImage,
  };
}

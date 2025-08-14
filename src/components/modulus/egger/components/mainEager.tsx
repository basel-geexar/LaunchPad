import { LoaderPinwheel } from "lucide-react";

export default function MainEager({
  images,
  isLoading,
  currentImageLoaded,
  imageLoadingError,
  isTransitioning,
  nextImage,
}: {
  images: string[];
  isLoading: boolean;
  currentImageLoaded: boolean;
  imageLoadingError: boolean;
  isTransitioning: boolean;
  nextImage: string;
}) {
  const currentImage = images[images.length - 1] || "";

  return (
    <div className="h-full md:w-[80%] w-full mx-auto relative">
      {/* Initial loading state - no background, just spinner */}
      {isLoading && !currentImageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <LoaderPinwheel className="size-10 text-gray-600 animate-spin" />
        </div>
      )}

      {/* Current image - ALWAYS visible when loaded, stays during transition */}
      {currentImageLoaded && currentImage && (
        <div
          style={{
            backgroundImage: `url(${currentImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100"
        />
      )}

      {/* Transition loading overlay - show when loading next image, centered on current image */}
      {isLoading && currentImageLoaded && isTransitioning && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-10">
          <LoaderPinwheel className="size-10 text-white animate-spin" />
        </div>
      )}

      {/* Next image - overlays current image and fades in when ready */}
      {isTransitioning && nextImage && (
        <div
          style={{
            backgroundImage: `url(${nextImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-0"
        />
      )}

      {/* Error state */}
      {imageLoadingError && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-50 bg-opacity-90 z-10">
          <div className="flex flex-col items-center space-y-4">
            <div className="size-12 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 text-2xl">!</span>
            </div>
            <p className="text-red-600 text-sm">Failed to load image</p>
          </div>
        </div>
      )}
    </div>
  );
}

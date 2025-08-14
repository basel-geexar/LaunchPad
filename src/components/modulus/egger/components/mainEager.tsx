import { LoaderPinwheel } from "lucide-react";

export default function MainEager({
  images,
  isLoading,
  currentImageLoaded,
  imageLoadingError,
  isTransitioning,
}: {
  images: string[];
  isLoading: boolean;
  currentImageLoaded: boolean;
  imageLoadingError: boolean;
  isTransitioning: boolean;
}) {
  const currentImage = images[images.length - 1] || "";
  const previousImage = images[images.length - 2] || "";

  return (
    <div className="h-full md:w-[80%] w-full mx-auto relative">
      {/* Initial loading state - no background, just spinner */}
      {isLoading && !currentImageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <LoaderPinwheel className="size-10 text-gray-600 animate-spin" />
        </div>
      )}

      {/* Transition loading overlay - show when loading next image */}
      {isLoading && currentImageLoaded && isTransitioning && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-10">
          <LoaderPinwheel className="size-10 text-white animate-spin" />
        </div>
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

      {/* Previous image layer - stays visible during transition */}
      {previousImage && isTransitioning && (
        <div
          style={{
            backgroundImage: `url(${previousImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-100"
        />
      )}

      {/* Current image layer - fades in when ready */}
      {currentImageLoaded && currentImage && (
        <div
          style={{
            backgroundImage: `url(${currentImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </div>
  );
}

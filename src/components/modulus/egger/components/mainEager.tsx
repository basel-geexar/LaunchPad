import { LoaderPinwheel } from "lucide-react";

export default function MainEager({
  images,
  isLoading,
  currentImageLoaded,
  imageLoadingError,
}: {
  images: string[];
  isLoading: boolean;
  currentImageLoaded: boolean;
  imageLoadingError: boolean;
}) {
  const currentImage = images[images.length - 1] || "";

  return (
    <div className="h-full md:w-[80%] w-full mx-auto relative">
      {/* Loading overlay - show for both initial and next image loading */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-10">
          <LoaderPinwheel
            className={`size-10 ${
              currentImageLoaded ? "text-white" : "text-gray-600"
            } animate-spin`}
          />
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

      {/* Image container - overlays on top of placeholder */}
      <div
        style={{
          backgroundImage:
            currentImageLoaded && currentImage
              ? `url(${currentImage})`
              : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          currentImageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

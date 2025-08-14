export default function MainEager({ images }: { images: string[] }) {
  const currentImage = images[images.length - 1] || "";

  return (
    <div className="h-full md:w-[80%] w-full mx-auto relative">
      {/* Single image container with smooth transitions */}
      <div
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-full w-full transition-all duration-1000 ease-in-out"
      />
    </div>
  );
}

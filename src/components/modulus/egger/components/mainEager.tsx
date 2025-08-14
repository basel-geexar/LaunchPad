export default function MainEager({ images }: { images: string[] }) {
  return (
    <div
      style={{
        backgroundImage: `url(${images[images.length - 1]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen md:w-[80%] w-full mx-auto"
    ></div>
  );
}

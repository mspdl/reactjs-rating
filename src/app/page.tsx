import Rating from "./Rating";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Rating rate={3.5} />
    </div>
  );
}

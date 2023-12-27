import Rating from "./Rating";

export default function Home() {
  const stars = 2.4;

  return (
    <div className="w-screen h-screen flex flex-row gap-5 justify-center p-12">
      <p>{stars}</p>
      <Rating stars={stars} />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Header from "@/components/home/Header";

export default function Home() {
  return (
    <div className="w-full mx-auto px-8 py-10 max-w-2xl h-screen md:px-0">
      <Navbar />
      <Header />
      <h1>Hello World!</h1>
    </div>
  );
}

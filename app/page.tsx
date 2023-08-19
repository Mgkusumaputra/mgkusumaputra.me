import Navbar from "@/components/Navbar";
import Header from "@/components/home/Header";
import FeaturedPost from "@/components/home/featuredPost";

export default function Home() {
  return (
    <div className="w-full mx-auto px-8 py-10 max-w-2xl h-screen md:px-0">
      <Navbar />
      <Header />
      <FeaturedPost />
    </div>
  );
}

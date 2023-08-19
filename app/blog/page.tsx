import BlogPostCard from "@/components/blog/blogPostCard";

export default function page() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Things I’ve Explored</h1>
        <p className="text-sm font-normal">
          Discover my world of exploration and creativity. This portfolio is a
          celebration of my passions, adventures, and the joy of discovery.
        </p>
        <div className="flex items-center gap-5 text-sm font-medium">
          <p>Filter</p>
          <div className="flex gap-2 text-background">
            <button className="py-[2px] px-1 bg-secondary rounded hover:bg-primary :bg-primary">
              Development
            </button>
            <button className="py-[2px] px-1 bg-secondary rounded hover:bg-primary">
              UI/UX
            </button>
            <button className="py-[2px] px-1 bg-secondary rounded hover:bg-primary">
              Startup
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </div>
  );
}

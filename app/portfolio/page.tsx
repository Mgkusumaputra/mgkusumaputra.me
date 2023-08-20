import ProjectCard from "@/components/portfolio/projectCard";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Things I’ve Explored</h1>
        <p className="text-sm font-normal">
          Discover my world of exploration and creativity. This portfolio is a
          celebration of my passions, adventures, and the joy of discovery.
        </p>
      </div>
      <div className="grid grid-cols-1 justify-items-start sm:grid-cols-2 sm:justify-items-center md:grid-cols-3 gap-y-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

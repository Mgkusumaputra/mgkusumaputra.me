import ProjectCard from "@/components/portfolio/projectCard";
import { reader } from "@/keystatic/reader";
import React from "react";

export default async function page() {
  const posts = await reader.collections.portfolio.all();

  const projects = await Promise.all(
    posts.map(async (post) => {
      return {
        redirect: post.entry.redirect,
        image: post.entry.image,
        title: post.entry.title,
        description: post.entry.description,
        projectURL: post.entry.projectURL,
      };
    })
  );

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
        {projects.map(({ redirect, image, title, description, projectURL }) => {
          return (
            <ProjectCard
              key={title}
              redirect={redirect}
              image={image}
              title={title}
              description={description}
              projectURL={projectURL}
            />
          );
        })}
      </div>
    </div>
  );
}

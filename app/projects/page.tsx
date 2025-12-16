"use client";

import { ProjectDescription } from "@/components/projectCard";
import { projects } from "@/content/projects";

export default function Projects() {
  return (
    <main className="flex flex-col px-8 py-15 gap-6">
      <h1 className="font-hand font-medium text-3xl">My Project Lists</h1>

      <div className="flex flex-col gap-3">
        {projects.map((p, i) => (
          <ProjectDescription key={i} {...p} />
        ))}
      </div>
    </main>
  );
}


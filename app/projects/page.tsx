"use client";

import ProjectsMDX from "@/content/projects.mdx";
import { ProjectDescription } from "@/components/mdx/project";

export default function Projects() {
  return (
    <main className="flex flex-col px-8 py-15 gap-6">
      <h1 className="font-hand font-medium text-3xl">My Project Lists</h1>

      <div className="flex flex-col gap-3">
        <ProjectsMDX
          components={{
            Project: ProjectDescription,
            p: ({ children }: { children: React.ReactNode }) => (
              <span className="inline">{children}</span>
            ),
          }}
        />
      </div>
    </main>
  );
}


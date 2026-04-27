"use client";

import { projects } from "@/content/projects";
import { ProjectCard } from "../projectCard";

export default function RecentProjects() {
  const recentProjects = projects.slice(0, 3);

  return recentProjects.map((p, i) => <ProjectCard key={i} {...p} />);
}

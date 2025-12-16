"use client";

import { projects } from "@/content/projects";
import { ProjectCard } from "../projectCard";

export default function RecentProjects() {
  const recentProjects = projects.slice(-3).reverse();

  return recentProjects.map((p, i) => <ProjectCard key={i} {...p} />);
}


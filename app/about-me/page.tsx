"use client";

import { aboutMe } from "@/components/mdx/aboutMe";
import { MDXProvider } from "@mdx-js/react";
import BioMDX from "@/content/about-me/bio.mdx";
import CurrentMDX from "@/content/about-me/current.mdx";
import ExperienceMDX from "@/content/about-me/experience.mdx";
import SkillsMDX from "@/content/about-me/skills.mdx";
import { current } from "@/components/mdx/current";
import { experience, ExperienceItem } from "@/components/mdx/experience";
import { Skills } from "@/components/mdx/skills";

export default function AboutMe() {
  return (
    <main className="flex flex-col px-8 py-15 gap-20">
      <div className="flex flex-col gap-1.5">
        <h1 className="font-hand font-medium text-3xl">Me in a nutshell</h1>
        <BioRenderer>
          <BioMDX />
        </BioRenderer>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-hand font-medium text-3xl">
          What’s currently on my plate
        </h1>
        <CurrentRenderer>
          <CurrentMDX />
        </CurrentRenderer>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-hand font-medium text-3xl">Experience</h1>
        <ExperienceRenderer>
          <ExperienceMDX components={{ ExperienceItem }} />
        </ExperienceRenderer>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-hand font-medium text-3xl">Skills</h1>
        <SkillsRenderer>
          <SkillsMDX />
        </SkillsRenderer>
      </div>
    </main>
  );
}

function BioRenderer({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={aboutMe}>
      <article className="flex flex-col gap-3 text-balance">{children}</article>
    </MDXProvider>
  );
}
function CurrentRenderer({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={current}>
      <article className="flex flex-col gap-3 text-balance">{children}</article>
    </MDXProvider>
  );
}
function ExperienceRenderer({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={experience}>
      <div className="flex flex-col gap-6">{children}</div>
    </MDXProvider>
  );
}
function SkillsRenderer({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={Skills}>
      <div className="flex flex-col gap-6">{children}</div>
    </MDXProvider>
  );
}


import CLink from "@/components/cLink";
import Intro from "@/components/home/intro";
import Newsletter from "@/components/home/newsletter";
import RecentProjects from "@/components/home/recentProject";
import RecentWriting from "@/components/home/recentWriting";

import { CodeXml, NotebookPen } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col px-8 py-15 gap-20">
      {/* Header Section */}
      <div className="flex flex-col gap-4.5 max-w-full">
        <div className="flex flex-row h-fit gap-1.5 items-center">
          <h1 className="font-display text-2xl font-medium">Hi, I’m Garuda</h1>
          <span className="w-0.75 h-8 rounded-md bg-foreground" />
          <h1 className="font-display text-2xl font-medium">ガルーダ</h1>
        </div>
        <div className="flex flex-col gap-3 text-balance text-sm text-secondary">
          <div className="flex flex-col gap-3 prose prose-sm text-balance">
            <Intro />
          </div>
          <div className="flex flex-wrap gap-1.5 text-primary text-sm max-w-fit">
            <CLink
              href="https://linkedin.com/in/mgkusumaputra/"
              value="linkedin"
            />
            <span>\</span>
            <CLink href="https://github.com/mgkusumaputra/" value="github" />
            <span>\</span>
            <CLink
              href="https://instagram.com/mgkusumaputra/"
              value="instagram"
            />
            <span>\</span>
            <CLink
              href="mailto:contact@mgkusumaputra.me"
              value="contact@mgkusumaputra.me"
            />
          </div>
        </div>
      </div>

      {/* Recent Project Section */}
      <div className="flex flex-col">
        <span className="mb-6 h-fit w-fit">
          <h2 className="font-hand font-medium text-3xl -rotate-3">
            Recent Projects
          </h2>
        </span>
        <div className="flex flex-col gap-4.5 ">
          <RecentProjects />
        </div>
        <span className="flex items-center justify-end gap-1.5 mt-3 italic text-secondary">
          <CodeXml className="w-4 h-4" />
          <CLink
            href="/projects"
            value="see other works"
            inPage
            className="text-base"
          />
        </span>
      </div>

      {/* Recent Project Section */}
      <div className="flex flex-col">
        <span className="mb-6 h-fit w-fit">
          <h2 className="font-hand font-medium text-3xl -rotate-3">
            Latest Writing
          </h2>
        </span>
        <div className="flex flex-col gap-4.5 ">
          <RecentWriting />
        </div>
        <span className="flex items-center justify-end gap-1.5 mt-3 italic text-secondary">
          <NotebookPen className="w-4 h-4" />
          <CLink
            href="/writing"
            value="see other writings"
            className="text-base"
            inPage
          />
        </span>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </main>
  );
}

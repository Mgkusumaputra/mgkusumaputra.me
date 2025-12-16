import { ReactNode } from "react";

export const Skills = {
  Skills: ({
    category,
    children,
  }: {
    category: string;
    children: ReactNode;
  }) => (
    <div className="flex flex-col gap-3">
      <h2 className="text-primary font-display font-medium">{category}</h2>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  ),

  SkillItem: ({ name, icon }: { name: string; icon: ReactNode }) => (
    <div className="flex items-center gap-1.5 p-1.5 bg-foreground rounded-md border border-[#D4E0ED] dark:border-foreground shadow-[0px_1px_4px_0px_D4E0ED]">
      {icon}
      <p className="text-xs text-secondary font-medium">{name}</p>
    </div>
  ),
};


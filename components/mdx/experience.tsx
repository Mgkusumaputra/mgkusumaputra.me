import { ReactNode } from "react";
import Image from "next/image";

export function ExperienceItem({
  logo,
  company,
  role,
  period,
  location,
  children,
}: {
  logo: string;
  company: string;
  role: string;
  period: string;
  location: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4.5">
      {/* Logo */}
      <div className="w-11.5 h-11.5 rounded-lg bg-foreground flex items-center justify-center overflow-hidden">
        <Image
          src={logo}
          alt={company}
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1 font-display text-base ">
            <h3 className="font-semibold text-primary">{company}</h3>
            <p className="text-secondary">{role}</p>
          </div>

          <div className="flex flex-col gap-0.5 text-right text-sm text-secondary whitespace-nowrap">
            <div>{period}</div>
            <div>{location}</div>
          </div>
        </div>

        {/* 🔥 Scoped bullet styling */}
        <div className="mt-4.5 [&>ul]:space-y-3 [&>ul]:text-sm [&>ul]:text-secondary">
          {children}
        </div>
      </div>
    </div>
  );
}

export const experience = {
  ul: ({ children }: { children: ReactNode }) => <ul>{children}</ul>,

  li: ({ children }: { children: ReactNode }) => (
    <li className="flex items-start gap-2">
      <span className="mt-1.5 size-1.5 rounded-full  bg-radial from-[#4C4B4A] from-0% to-[#2E2D2C] to-90%" />
      <p className="w-full">{children}</p>
    </li>
  ),
};


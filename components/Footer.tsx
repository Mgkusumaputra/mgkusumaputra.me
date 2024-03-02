import { MailIcon } from "lucide-react";
import React from "react";

import Link from "next/link";

import { footerLinksExtras, footerLinksGeneral } from "@/constant/component";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 mt-12">
      <hr className="border-text-secondary rounded-sm" />
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-row gap-x-11">
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold">General</p>
            <div className="flex flex-col gap-x-1 text-base font-medium">
              {footerLinksGeneral.map((item: any, key: number) => (
                <Link
                  key={key}
                  href={item.href}
                  target={""}
                  className="text-muted-foreground hover:text-secondary-foreground hover:underline hover:transition-all"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold">Extras</p>
            <div className="grid grid-rows-4 grid-flow-col gap-y-1 gap-x-3 text-base font-medium">
              {footerLinksExtras.map((item: any, key: number) => (
                <Link
                  key={key}
                  href={item.href}
                  target={item.target}
                  className="text-muted-foreground hover:text-secondary-foreground hover:underline hover:transition-all"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex mt-6 md:mt-0">
          <Link
            href="mailto:contact@mgkusumaputra.me"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-primary w-8 h-8"
          >
            <MailIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/mgkusumaputra"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-primary w-8 h-8"
          >
            <LinkedInLogoIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/mgkusumaputra"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-primary w-8 h-8"
          >
            <GitHubLogoIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://instagram.com/mgkusumaputra"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-primary w-8 h-8"
          >
            <InstagramLogoIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-6 text-sm">
        <p className="font-semibold text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Garuda. All rights reserved.
        </p>
        <p className="font-semibold text-muted-foreground">
          Created with{" "}
          <span>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="text-primary"
            >
              Next.js
            </Link>
          </span>
          ,{" "}
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="text-primary"
          >
            Tailwind
          </Link>
          ,{" "}
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            className="text-primary"
          >
            Shadcn/ui
          </Link>
          , and 💖
        </p>
      </div>
    </footer>
  );
}

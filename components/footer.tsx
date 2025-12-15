"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Signature } from "./svg/signature";
import CLink from "./cLink";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="px-8 pb-15">
      <hr className="w-full border border-dashed border-foreground mb-6" />
      <div className="flex flex-row justify-between">
        {/* Link Section */}
        <div className="flex flex-wrap gap-9">
          <div className="flex flex-col">
            <p className="font-hand font-medium text-2xl">General</p>
            <div className="flex flex-col list-none gap-1.5 mt-3 text-secondary text-sm">
              <Link className={pathname === "/" ? "italic" : ""} href="/">
                Home
              </Link>
              <Link
                className={pathname === "/about-me" ? "italic" : ""}
                href="/about-me"
              >
                About me
              </Link>
              <Link
                className={pathname === "/projects" ? "italic" : ""}
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className={pathname === "/blog" ? "italic" : ""}
                href="/blog"
              >
                Writing
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-hand font-medium text-2xl">Others</p>
            <div className="flex flex-col list-none gap-1.5 mt-3 text-secondary text-sm">
              <a
                href="https://mgkusumaputra.my.id/CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </a>
              <a
                href="https://learnlagoon.my.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                LearnLagoon
              </a>
            </div>
          </div>
        </div>

        {/* Attribution Section */}
        <div className="flex flex-col items-end gap-3">
          <Signature className="stroke-primary" />
          <div className="flex flex-wrap gap-1.5 text-secondary text-sm max-w-fit">
            <CLink
              href="https://linkedin.com/in/mgkusumaputra/"
              value={<Linkedin className="w-5" />}
              ariaLabel="linkedin"
            />
            <span>\</span>
            <CLink
              href="https://github.com/mgkusumaputra/"
              value={<Github className="w-5" />}
              ariaLabel="github"
            />
            <span>\</span>
            <CLink
              href="https://instagram.com/mgkusumaputra/"
              value={<Instagram className="w-5" />}
              ariaLabel="instagram"
            />
            <span>\</span>
            <CLink
              href="mailto:contact@mgkusumaputra.me"
              value={<Mail className="w-5" />}
              ariaLabel="contact via email"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}


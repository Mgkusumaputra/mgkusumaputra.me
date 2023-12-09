import Link from "next/link";
import React from "react";
import Mail from "./icons/Mail";
import Linkedin from "./icons/Linkedin";
import Instagram from "./icons/Instagram";
import Github from "./icons/Github";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 mt-12">
      <hr className="border-text-secondary rounded-sm" />
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-row gap-x-11">
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold">General</p>
            <div className="flex flex-col gap-x-1 text-base font-medium">
              <Link href="/">Home</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/guestbook">Guestbook</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold">Extras</p>
            <div className="grid grid-rows-4 grid-flow-col gap-y-1 gap-x-3 text-base font-medium">
              <Link href="https://mgkusumaputra.my.id/CV" target="_blank">Resume</Link>
              {/* <Link href="/snippets">Snippets</Link>
              <Link href="/uses">Uses</Link> */}
              <Link href="/certificate">Certificate</Link>
              <Link href="https://mgkusumaputra.my.id/LearnLagoon" target="_blank">
                Learning Materials
              </Link>
            </div>
          </div>
        </div>
        <div className="flex mt-6 md:mt-0">
          <Link
            href="mailto:contact@mgkusumaputra.me"
            target="_blank"
            className="text-inactive transition-colors hover:text-text-primary w-8 h-8"
          >
            <Mail />
          </Link>
          <Link
            href="https://linkedin.com/in/mgkusumaputra"
            target="_blank"
            className="text-inactive transition-colors hover:text-text-primary w-8 h-8"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://github.com/mgkusumaputra"
            target="_blank"
            className="text-inactive transition-colors hover:text-text-primary w-8 h-8"
          >
            <Github />
          </Link>
          <Link
            href="https://instagram.com/mgkusumaputra"
            target="_blank"
            className="text-inactive transition-colors hover:text-text-primary w-8 h-8"
          >
            <Instagram />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-6 text-sm">
        <p className="font-semibold text-text-primary">
          © {new Date().getFullYear()} Muhammad Garuda. All rights reserved.
        </p>
        <p className="font-semibold text-inactive">
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
          , and 💖
        </p>
      </div>
    </footer>
  );
}

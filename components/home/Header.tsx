import Image from "next/image";
import Link from "next/link";

import Github from "@/icons/Github";
import Instagram from "@/icons/Instagram";
import Linkedin from "@/icons/Linkedin";
import Mail from "@/icons/Mail";

import { reader } from "@/keystatic/reader";

export default async function Header() {
  const headingText = await reader.singletons.aboutme.read();
  return (
    <div className="flex flex-col gap-2 mb-12 md:max-w-[80%] sm:w-full">
      <Image
        src="https://res.cloudinary.com/dspkhqhkv/image/upload/v1692420871/mgkusumaputra.me/profile_pict.jpg"
        width={64}
        height={64}
        alt="profile picture"
        className="rounded-full"
      />
      <h1 className="text-4xl font-semibold">
        Hi, I’m <span className="text-primary">Muhammad Garuda</span> 👋
      </h1>
      <p className="text-base font-normal dark:text-muted-foreground">
        {headingText?.slot1}
      </p>
      <p className="text-base font-normal dark:text-muted-foreground">
        {headingText?.slot2}
      </p>
      <div className="flex mt-2 gap-x-2">
        <Link
          href="mailto:contact@mgkusumaputra.me"
          target="_blank"
          className="text-muted-foreground transition-colors hover:text-primary w-8 h-8"
        >
          <Mail />
        </Link>
        <Link
          href="https://linkedin.com/in/mgkusumaputra"
          target="_blank"
          className="text-muted-foreground transition-colors hover:text-primary w-8 h-8"
        >
          <Linkedin />
        </Link>
        <Link
          href="https://github.com/mgkusumaputra"
          target="_blank"
          className="text-muted-foreground transition-colors hover:text-primary w-8 h-8"
        >
          <Github />
        </Link>
        <Link
          href="https://instagram.com/mgkusumaputra"
          target="_blank"
          className="text-muted-foreground transition-colors hover:text-primary w-8 h-8"
        >
          <Instagram />
        </Link>
      </div>
    </div>
  );
}

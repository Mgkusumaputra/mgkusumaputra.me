import Image from "next/image";
import Link from "next/link";

import Mail from "@/icons/Mail";
import Linkedin from "@/icons/Linkedin";
import Github from "@/icons/Github";
import Instagram from "@/icons/Instagram";

export default function Header() {
  return (
    <div className="flex flex-col gap-2 mb-12 max-w-[80%]">
      <Image
        src="https://res.cloudinary.com/dspkhqhkv/image/upload/v1692420871/mgkusumaputra.me/profile_pict.jpg"
        width={64}
        height={64}
        alt="Profile Picture"
        className="rounded-full"
      />
      <h1 className="text-4xl font-semibold">
        Hi, I’m <span className="text-primary">Muhammad Garuda</span> 👋
      </h1>
      <p className="text-base font-normal">
        I’m a senior high school student, full-stack developer, ui/ux designer,
        and startup builder enthusiast. I love collaborating on innovative
        projects and bringing a unique perspective to the table.
      </p>
      <p className="text-base font-normal">
        I’m a backend engineer at Furaha System and currently building the
        foundation for a small retail startup.
      </p>
      <div className="flex mt-2 gap-x-2">
        <Link
          href="mailto:contact@mgkusumaputra.me"
          target="_blank"
          className="text-secondary transition-colors hover:text-primary w-8 h-8"
        >
          <Mail />
        </Link>
        <Link
          href="https://linkedin.com/in/mgkusumaputra"
          target="_blank"
          className="text-secondary transition-colors hover:text-primary w-8 h-8"
        >
          <Linkedin />
        </Link>
        <Link
          href="https://github.com/mgkusumaputra"
          target="_blank"
          className="text-secondary transition-colors hover:text-primary w-8 h-8"
        >
          <Github />
        </Link>
        <Link
          href="https://instagram.com/mgkusumaputra"
          target="_blank"
          className="text-secondary transition-colors hover:text-primary w-8 h-8"
        >
          <Instagram />
        </Link>
      </div>
    </div>
  );
}

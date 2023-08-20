import Image from "next/image";
import Link from "next/link";

export default function CertificateCard() {
  return (
    <Link href={""} className="group">
      <div className="flex items-center gap-6 px-2 py-2 bg-secondary rounded transition-colors group-hover:bg-primary group-hover:text-background">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
          alt=""
          width={40}
          height={40}
          className="rounded w-10 h-10"
        />
        <div>
          <h1 className="text-base font-bold">Back End Development and APIs</h1>

          <p className="text-xs font-normal">freeCodeCamp • 16 Jan, 2023</p>
        </div>
      </div>
    </Link>
  );
}

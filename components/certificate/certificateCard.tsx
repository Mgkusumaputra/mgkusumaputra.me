import Image from "next/image";
import Link from "next/link";

interface CertificateCardProps {
  href: string;
  imageLogo: string;
  name: string;
  org: string;
  issueDate: string;
}

export default function CertificateCard({href="/", imageLogo, name, org, issueDate=""}: CertificateCardProps) {
  return (
    <Link href={href} className="group">
      <div className="flex items-center gap-6 px-2 py-2 bg-secondary rounded transition-colors group-hover:bg-primary group-hover:text-background">
        <Image
          src={imageLogo}
          alt=""
          width={40}
          height={40}
          className="rounded w-10 h-10"
        />
        <div>
          <h1 className="text-base font-bold">{name}</h1>

          <p className="text-xs font-normal">{org} • {issueDate}</p>
        </div>
      </div>
    </Link>
  );
}

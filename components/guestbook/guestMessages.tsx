import Image from "next/image";

interface GuestMessagesProps {
  profileURL: string;
  name: string;
  message: string;
}

export default function GuestMessages({profileURL, name, message}: GuestMessagesProps) {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src={profileURL}
        width={32}
        height={32}
        alt="Profile Picture"
        className="rounded-full w-8 h-8"
      />
      <div className="text-sm">
        <h1 className="font-semibold text-text-secondary">{name}</h1>
        <p className="font-normal text-text-primary">
          {message}
        </p>
      </div>
    </div>
  );
}

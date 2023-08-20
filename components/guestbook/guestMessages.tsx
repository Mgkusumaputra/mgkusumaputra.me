import Image from "next/image";

export default function GuestMessages() {
  return (
    <div className="grid grid-flow-col gap-4">
      <Image
        src="https://res.cloudinary.com/dspkhqhkv/image/upload/v1692420871/mgkusumaputra.me/profile_pict.jpg"
        width={32}
        height={32}
        alt="Profile Picture"
        className="rounded-full"
      />
      <div className="text-sm">
        <h1 className="font-semibold text-text-secondary">Muhammad Garuda</h1>
        <p className="font-normal text-text-primary">
          Sint libero alias debitis magnam. Tempora enim sint dolor est repellat
          sequi et deserunt dolorem. Molestiae blanditiis tempore.
        </p>
      </div>
    </div>
  );
}

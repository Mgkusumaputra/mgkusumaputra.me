import CertificateCard from "@/components/certificate/certificateCard";

export default function CertificatePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Achievements in Ink</h1>
        <p className="text-sm font-normal">
          Each certificate stands as a testament to my dedication and expertise.
          Explore this collection, marking milestones of my professional
          journey.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </div>
    </div>
  );
}

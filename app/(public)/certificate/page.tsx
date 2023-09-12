import CertificateCard from "@/components/certificate/certificateCard";
import { reader } from "@/keystatic/reader";
import { formatCertificateDate, sortCertificates } from "@/lib/posts";

export default async function CertificatePage() {
  const posts = sortCertificates(await reader.collections.certificate.all());

  const certificates = await Promise.all(
    posts.map(async (post) => {
      return {
        name: post.entry.title,
        url: post.entry.Url,
        orgLogo: post.entry.orgLogo,
        org: post.entry.Org,
        issueDate: post.entry.issuedDate,
      };
    })
  );

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
        {certificates.map(({ name, url, orgLogo, org, issueDate }) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <CertificateCard
              href={url}
              imageLogo={orgLogo}
              name={name}
              org={org}
              issueDate={formatCertificateDate(issueDate)}
            />
          );
        })}
      </div>
    </div>
  );
}

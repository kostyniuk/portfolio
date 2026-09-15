import { CompanyHighlight } from "@/components/custom/company-highlight";
import { InboxGlass, PinGlass, SuitcaseGlass } from "@/components/icons/bio-icons";
import { BioRow, type BioItem } from "@/features/profile/components/bio-row";
import { ProfileHeader } from "./profile-header";

const BIO_ROWS = [
  { icon: <PinGlass />, title: "Stockholm, 🇸🇪" },
  {
    icon: <SuitcaseGlass />,
    // ItemTitle lays its children out as flex items, so keep the label and the
    // highlighted company name in one node to avoid a gap after the "@".
    title: (
      <span>
        Tech/Team Lead @<CompanyHighlight company="amfg" className="underline-offset-[3px]" />
      </span>
    ),
  },
  { icon: <InboxGlass />, title: "kostyniuk7@gmail.com", copyText: "kostyniuk7@gmail.com" },
] satisfies BioItem[];

function Bio() {
  return (
    <section className="page-section scroll-mt-28 pt-10 sm:scroll-mt-32 sm:pt-12">
      <div className="font-mono flex min-w-0 flex-col gap-3">
        <ProfileHeader />
        <div className="text-lg [&_*]:font-mono [&_*]:text-base">
          {BIO_ROWS.map(({ icon, title, copyText }, index) => (
            <BioRow key={index} icon={icon} title={title} copyText={copyText} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Bio };

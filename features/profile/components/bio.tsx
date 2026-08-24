import { InboxGlass, PinGlass, SuitcaseGlass } from "@/components/icons/bio-icons";
import { BioRow, type BioItem } from "@/features/profile/components/bio-row";
import { ProfileHeader } from "./profile-header";

const BIO_ROWS = [
  { icon: <PinGlass />, title: "Stockholm, 🇸🇪" },
  { icon: <SuitcaseGlass />, title: "Tech/Team Lead @AMFG" },
  { icon: <InboxGlass />, title: "kostyniuk7@gmail.com", canBeCopied: true },
] satisfies BioItem[];

function Bio() {
  return (
    <section className="page-section scroll-mt-28 pt-10 sm:scroll-mt-32 sm:pt-12">
      <div className="font-mono flex min-w-0 flex-col gap-3">
        <ProfileHeader />
        <div className="text-lg [&_*]:font-mono [&_*]:text-base">
          {BIO_ROWS.map(({ icon, title, canBeCopied }, index) => (
            <BioRow key={index} icon={icon} title={title} canBeCopied={canBeCopied} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Bio };

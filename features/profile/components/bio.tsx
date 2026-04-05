import { InboxGlass, PinGlass, SuitcaseGlass } from "@/components/icons/bio-icons";
import { Card, CardContent } from "@/components/ui/card";
import { BioRow, type BioItem } from "@/features/profile/components/bio-row";
import { ProfileHeader } from "./profile-header";

const BIO_ROWS = [
  { icon: <PinGlass />, title: "Stockholm, 🇸🇪" },
  { icon: <SuitcaseGlass />, title: "Team Lead @AMFG" },
  { icon: <InboxGlass />, title: "alexandru.costiniuc00@gmail.com", canBeCopied: true },
] satisfies BioItem[];

function Bio() {
  return (
    <Card variant="frosted">
      <CardContent className="font-mono flex flex-col gap-2">
        <ProfileHeader />
        <div className="text-lg [&_*]:font-mono [&_*]:text-base">
          {BIO_ROWS.map(({ icon, title, canBeCopied }, index) => (
            <BioRow key={index} icon={icon} title={title} canBeCopied={canBeCopied} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export { Bio };

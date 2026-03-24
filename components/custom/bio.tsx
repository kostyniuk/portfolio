import Image from "next/image";
import { BioRow, type BioItem } from "./bio-row";

const BIO_ROWS = [
  { emojiCode: "📍", title: "Stockholm 🇸🇪" },
  { emojiCode: "⌨️", title: "Team Lead @AMFG" },
  { emojiCode: "📮", title: "alexandru.costiniuc00@gmail.com", canBeCopied: true },
] satisfies BioItem[];

function Bio() {
  return (
    <div className="font-mono mt-8">
      <Image
        src="/profile.jpg"
        width={200}
        height={200}
        alt="Picture of the author"
        className="rounded-full object-cover"
      />
      <p className="text-xl">Alex Kostyniuk, 26</p>
      <div className="text-lg [&_*]:text-base [&_*]:font-mono">
        {BIO_ROWS.map(({ emojiCode, title, canBeCopied }, index) => (
          <BioRow key={index} emojiCode={emojiCode} title={title} canBeCopied={canBeCopied} />
        ))}
      </div>
    </div>
  );
}

export { Bio };

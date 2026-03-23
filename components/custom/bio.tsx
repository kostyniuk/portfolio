import Image from "next/image";
import { BioRow, type BioItem } from "./bio-row";

const BIO_ROWS = [
  { emojiCode: "📍", title: "Stockholm 🇸🇪" },
  { emojiCode: "⌨️", title: "Team Lead @ AMFG" },
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
      <div className="text-lg [&_*]:text-lg [&_*]:font-mono">
        {BIO_ROWS.map(({ emojiCode, title }, index) => (
          <BioRow key={index} emojiCode={emojiCode} title={title} />
        ))}
      </div>
    </div>
  );
}

export { Bio };

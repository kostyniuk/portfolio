import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from "@/components/icons/social-icons";
import { SocialItem, type Social } from "./social-item";

const SOCIAL_NETWORKS = {
  x: { link: "", label: "@costiniuc00", Icon: XIcon },
  github: { link: "", label: "@kostyniuk", Icon: GitHubIcon },
  instagram: { link: "", label: "@costiniuc00", Icon: InstagramIcon },
  linkedin: { link: "", label: "@kostyniuk", Icon: LinkedInIcon },
} satisfies Record<string, Social>;

function Socials() {
  return (
    <div className="">
      <h1>Socials</h1>
      <div className="flex gap-2 mt-2">
        {Object.entries(SOCIAL_NETWORKS).map(([id, social]) => {
          return <SocialItem key={id} {...social} />;
        })}
      </div>
    </div>
  );
}

export { Socials };

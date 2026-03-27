import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from "@/components/icons/social-icons";
import { SocialItem, type Social } from "@/features/profile/components/social-item";

const SOCIAL_NETWORKS = {
  x: { link: "https://x.com/costiniuc00", label: "@costiniuc00", Icon: XIcon },
  github: { link: "https://github.com/kostyniuk", label: "@kostyniuk", Icon: GitHubIcon },
  instagram: { link: "https://www.instagram.com/costiniuc00", label: "@costiniuc00", Icon: InstagramIcon },
  linkedin: { link: "https://www.linkedin.com/in/kostyniuk", label: "@kostyniuk", Icon: LinkedInIcon },
} satisfies Record<string, Social>;

function Socials() {
  return (
    <div>
      <h1>Socials</h1>
      <div className="mt-2 flex gap-2">
        {Object.entries(SOCIAL_NETWORKS).map(([id, social]) => {
          return <SocialItem key={id} {...social} />;
        })}
      </div>
    </div>
  );
}

export { Socials };

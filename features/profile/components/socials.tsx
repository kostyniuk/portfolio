import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from "@/components/icons/social-icons";
import { LinkItem, type LinkItemProps } from "@/features/profile/components/link-item";

const SOCIAL_NETWORKS = {
  x: { link: "https://x.com/kostyniuk00", label: "@kostyniuk00", Icon: XIcon },
  github: { link: "https://github.com/kostyniuk", label: "@kostyniuk", Icon: GitHubIcon },
  instagram: { link: "https://www.instagram.com/costiniuc00", label: "@costiniuc00", Icon: InstagramIcon },
  linkedin: { link: "https://www.linkedin.com/in/kostyniuk", label: "@kostyniuk", Icon: LinkedInIcon },
} satisfies Record<string, LinkItemProps>;

function Socials() {
  return (
    <section id="socials" className="page-section scroll-mt-28 sm:scroll-mt-32">
      <p className="page-section-title">Socials</p>
      <div className="page-section-body grid grid-cols-1 gap-2 sm:grid-cols-2">
        {Object.entries(SOCIAL_NETWORKS).map(([id, social]) => {
          return <LinkItem key={id} {...social} />;
        })}
      </div>
    </section>
  );
}

export { Socials };

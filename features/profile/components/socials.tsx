import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from "@/components/icons/social-icons";
import { Card, CardContent } from "@/components/ui/card";
import { LinkItem, type LinkItemProps } from "@/features/profile/components/link-item";

const SOCIAL_NETWORKS = {
  x: { link: "https://x.com/kostyniuk00", label: "@kostyniuk00", Icon: XIcon },
  github: { link: "https://github.com/kostyniuk", label: "@kostyniuk", Icon: GitHubIcon },
  instagram: { link: "https://www.instagram.com/costiniuc00", label: "@costiniuc00", Icon: InstagramIcon },
  linkedin: { link: "https://www.linkedin.com/in/kostyniuk", label: "@kostyniuk", Icon: LinkedInIcon },
} satisfies Record<string, LinkItemProps>;

function Socials() {
  return (
    <div>
      <h1>Socials</h1>
      <Card variant="frosted-light" className="wavy-border mt-2">
        <CardContent className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {Object.entries(SOCIAL_NETWORKS).map(([id, social]) => {
            return <LinkItem key={id} {...social} />;
          })}
        </CardContent>
      </Card>
    </div>
  );
}

export { Socials };

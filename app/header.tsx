import { GitHubIcon } from "@/components/icons/social-icons";
import { SocialItemMotion } from "@/features/profile/components/social-item-motion";
import Link from "next/link";

function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className="mt-2 h-12 flex w-[calc(50%-10px)] bg-foreground/5 rounded-xl justify-around items-center fixed z-1 backdrop-blur-xs">
        <Link href="https://github.com/kostyniuk/portfolio">
          <SocialItemMotion>
            <GitHubIcon className="size-6 text-black dark:text-white" />
          </SocialItemMotion>
        </Link>
      </div>
    </div>
  );
}

export { Header };

import { GitHubIcon } from "@/components/icons/social-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialItemMotion } from "@/features/profile/components/social-item-motion";
import Link from "next/link";

function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className="mt-2 h-12 flex w-[calc(100%-2rem)] sm:w-[calc(50%-10px)] rounded-4xl items-center justify-between px-5 fixed z-1 border border-black/[0.08] bg-black/[0.02] backdrop-blur-sm shadow-[0_-2px_8px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-sm">
        <ThemeToggle />
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

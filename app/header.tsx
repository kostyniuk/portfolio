"use cache";

import { GitHubIcon } from "@/components/icons/social-icons";
import { FrostGlass } from "@/components/ui/frost-glass";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialItemMotion } from "@/features/profile/components/social-item-motion";
import Link from "next/link";
import { Octokit } from "octokit";
import { ItemDescription } from "@/components/ui/item";
import { Button } from "@/components/ui/button";

async function Header() {
  const octokit = new Octokit();

  const { data: repo } = await octokit.rest.repos.get({
    owner: "kostyniuk",
    repo: "portfolio",
  });

  return (
    <div className="fixed z-1 w-full flex justify-center">
      <div className="mt-2 w-[calc(100%-2rem)] sm:w-[calc(50%-10px)] rounded-4xl overflow-hidden">
        <FrostGlass variant="clear">
          <div className="h-12 flex items-center justify-between px-5">
            <ThemeToggle />
            <Link href="/my-components">
              <Button variant="ghost">Components</Button>
            </Link>
            <Link href="https://github.com/kostyniuk/portfolio">
              <SocialItemMotion>
                <Button variant={"ghost"} className="flex flex-row gap-2 items-center cursor-pointer">
                  <GitHubIcon className="size-6 text-black dark:text-white" />
                  <ItemDescription>{repo.stargazers_count}</ItemDescription>
                </Button>
              </SocialItemMotion>
            </Link>
          </div>
        </FrostGlass>
      </div>
    </div>
  );
}

export { Header };

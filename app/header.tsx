"use cache";

import { GitHubIcon } from "@/components/icons/social-icons";
import { LiquidGlass } from "@/components/ui/glasscn/liquid-glass";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialItemMotion } from "@/features/profile/components/social-item-motion";
import Link from "next/link";
import { Octokit } from "octokit";
import { ItemDescription } from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/ui/download-button";
import { FileDown } from "lucide-react";
import { AKLogo } from "@/components/icons/ak-logo";

async function Header() {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const { data: repo } = await octokit.rest.repos.get({
    owner: "kostyniuk",
    repo: "portfolio",
  });

  return (
    <div className="fixed z-1 w-full flex justify-center">
      <div className="mt-2 w-[calc(100%-2rem)] sm:w-[calc(50%-10px)] rounded-4xl overflow-hidden">
        <LiquidGlass className="rounded-4xl">
          <div className="h-12 flex items-center justify-between px-5">
            <Link href="/" className="flex items-center">
              <AKLogo size={24} className="text-foreground" />
            </Link>
            <Link href="/my-components">
              <Button variant="ghost">Components</Button>
            </Link>
            <Link href="https://github.com/kostyniuk/portfolio">
              <SocialItemMotion>
                <Button variant={"ghost"} className="flex flex-row gap-2 items-center cursor-pointer">
                  <GitHubIcon className="size-6 text-black dark:text-white" />
                  {repo.stargazers_count ? <ItemDescription>{repo.stargazers_count}</ItemDescription> : null}
                </Button>
              </SocialItemMotion>
            </Link>
            <SocialItemMotion>
              <DownloadButton icon={<FileDown className="size-5" />} tooltipText="Download CV" pathToPdf="/cv.pdf" />
            </SocialItemMotion>
            <ThemeToggle />
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
}

export { Header };

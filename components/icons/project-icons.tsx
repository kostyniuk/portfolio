import type { ComponentType } from "react";

type ProjectIconProps = {
  className?: string;
};

type ProjectIcon = ComponentType<ProjectIconProps>;

function MellowIcon({ className }: ProjectIconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="64" height="64" rx="12" fill="none" />
      <rect x="10" y="20" width="30" height="10" rx="5" fill="#8b5cf6" />
      <rect x="24" y="36" width="30" height="10" rx="5" fill="#f59e0b" />
      <rect x="20" y="24" width="24" height="18" rx="4" fill="#fff" opacity=".1" transform="rotate(-15 32 32)" />
    </svg>
  );
}

function DocumentIcon({ className }: ProjectIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M9 3.75H7.75A2.75 2.75 0 0 0 5 6.5v11A2.75 2.75 0 0 0 7.75 20.25h8.5A2.75 2.75 0 0 0 19 17.5V9.75L14.25 3H9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M14 3.25V7.5A2.25 2.25 0 0 0 16.25 9.75H19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M8.75 13h6.5M8.75 16h4.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export { DocumentIcon, MellowIcon };
export type { ProjectIcon, ProjectIconProps };

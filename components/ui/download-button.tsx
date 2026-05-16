import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface DownloadButtonProps {
  icon: ReactNode;
  tooltipText: string;
  pathToPdf: string;
  fileName?: string;
  className?: string;
}

function DownloadButton({ icon, tooltipText, pathToPdf, fileName, className }: DownloadButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <a href={pathToPdf} download={fileName} className={className}>
            {icon}
          </a>
        }
      />
      <TooltipContent side="bottom">{tooltipText}</TooltipContent>
    </Tooltip>
  );
}

export { DownloadButton };
export type { DownloadButtonProps };

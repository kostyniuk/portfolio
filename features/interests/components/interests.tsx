"use client";

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

function Interests() {
  return (
    <div>
      <h1>Interests</h1>
      <AvatarGroup className="gap-4">
        <Tooltip>
          <TooltipTrigger>
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>shadcn</TooltipContent>
        </Tooltip>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  );
}

export { Interests };

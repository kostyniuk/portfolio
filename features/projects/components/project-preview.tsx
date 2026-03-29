import { MellowIcon } from "@/components/icons/project-icons";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function PreviewProject() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MellowIcon className="size-10" />
          <p>Mellow Lines</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <video src="/mellow_lines.mp4" loop controls muted className="w-192 h-108 object-cover"></video>
        <p>
          A web app for creating animated videos of code morphing between steps. Paste code snippets, configure syntax
          highlighting and export smooth token-level transitions as WebM/MP4 videos.{" "}
        </p>
      </CardContent>
    </Card>
  );
}

export { PreviewProject };

import { Heart } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full flex justify-center pb-4 pt-8">
      <p className="text-xs text-muted-foreground/60">
        Built with <Heart className="inline size-3 fill-current align-[-1px]" /> by{" "}
        <Link
          href="https://x.com/kostyniuk00"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Alex Kostyniuk
        </Link>
        {" "}&middot; All rights reserved &middot; &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export { Footer };

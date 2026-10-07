import { site } from "@/data/site";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="container-x flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm text-ink/90">© 2026 {site.name}. All rights reserved.</p>
          <p className="mt-1 text-xs text-muted">Designed &amp; Built with passion and code.</p>
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
}

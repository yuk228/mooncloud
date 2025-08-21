import Link from "next/link";
import { ThemeToggle } from "@/components/app/color-toggle";
import Sidebar from "@/components/app/sidebar";

export default async function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-muted-foreground/20">
      <div className="container mx-auto px-4 h-15 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sidebar />
          <Link href="/" className="block font-bold text-xl">
            MCloud
          </Link>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

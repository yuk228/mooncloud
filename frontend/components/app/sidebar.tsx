import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Home,
  LibraryBig,
  Menu,
  Settings,
  Shield,
  Upload,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";

const MAIN_LINKS = [
  {
    label: "ホーム",
    icon: <Home className="w-5 h-5" />,
    href: "/",
  },
  {
    label: "アルバム",
    icon: <LibraryBig className="w-5 h-5" />,
    href: "/album",
  },
  {
    label: "ファイル共有",
    icon: <Upload className="w-5 h-5" />,
    href: "/file-sharing",
  },
];

const SETTINGS_LINKS = [
  {
    label: "設定",
    icon: <Settings className="w-5 h-5" />,
    href: "/settings",
  },
  {
    label: "一覧",
    icon: <Users className="w-5 h-5" />,
    href: "/list",
  },
  {
    label: "管理者",
    icon: <Shield className="w-5 h-5" />,
    href: "/admin",
  },
];

const LEGAL_LINKS = [
  {
    label: "利用規約",
    href: "/legal/terms",
  },
  {
    label: "プライバシーポリシー",
    href: "/legal/privacy",
  },
];

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-accent">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="px-6 py-6 border-b bg-muted">
          <SheetTitle className="text-2xl font-bold">MCloud</SheetTitle>
          <p className="text-muted-foreground text-sm">家庭内クラウド</p>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <NavLink label="メイン" links={MAIN_LINKS} />
          <NavLink label="システム" links={SETTINGS_LINKS} />
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

type NavLinkProps = {
  label: string;
  links: {
    href: string;
    icon: React.ReactNode;
    label: string;
  }[];
};

function NavLink({ label, links }: NavLinkProps) {
  return (
    <div className="px-4 py-6">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        {label}
      </h3>
      <nav className="flex flex-col gap-1">
        {links.map(link => (
          <Link
            href={link.href}
            key={link.href}
            className="group flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:shadow-sm active:scale-[0.98]"
          >
            <span className="text-muted-foreground group-hover:text-accent-foreground transition-colors">
              {link.icon}
            </span>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <div className="px-4 py-2 flex flex-col gap-4">
      <nav className="flex flex-col gap-1">
        {LEGAL_LINKS.map(link => (
          <Link
            href={link.href}
            key={link.href}
            className="text-sm text-muted-foreground hover:text-accent-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Separator />
      <div className="text-xs text-muted-foreground flex flex-col gap-1">
        <p>&copy; 2025 MCloud.</p>
        <p>
          Source code is available on{" "}
          <Link
            href="https://github.com/yuk228/mcloud"
            className="text-muted-foreground hover:text-accent-foreground"
          >
            GitHub
          </Link>
        </p>
      </div>
    </div>
  );
}

import MobileNav from "@/components/mobile-nav";
import Search from "@/components/search";
import { IconSettings2 } from "@tabler/icons-react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="px-4 flex h-14 shrink-0 items-center gap-4">
            <a href="/" className="flex items-center gap-2">
                <Image
                    src="/logo.svg"
                    alt="TheNextGameStation"
                    width={116.56}
                    height={33.8}
                    loading="eager"
                />
            </a>

            <Search />

            <nav className="flex gap-4 md:gap-6">
                <a href="#">
                    <IconSettings2 />
                </a>

                <MobileNav />
            </nav>
        </header>
    );
}

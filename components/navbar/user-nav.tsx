import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export const UserNav = () => {
    return (
        <nav className="flex items-center justify-between">
            <Logo />
            <Button asChild variant="secondary" className="cursor-pointer">
                <div>
                    Search games...
                    <SearchIcon />
                </div>
            </Button>
        </nav>
    );
};

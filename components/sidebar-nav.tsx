"use client";

import { IconHome, IconCube } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { Category, Game } from "@prisma/client";

type MainMenuItem = {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    slug: string;
};

type CategoryWithGames = Category & {
    games: Game[];
};

type SideBarNavProps = {
    categoryMenu: CategoryWithGames[];
};

export default function SideBarNav({ categoryMenu }: SideBarNavProps) {
    const activeSegment = usePathname();

    const mainMenuItems: MainMenuItem[] = [
        {
            name: "Home",
            icon: IconHome,
            slug: "/",
        },
        {
            name: "New",
            icon: IconCube,
            slug: "/new-games",
        },
    ];

    return (
        <>
            <div className="text-muted-foreground text-xs mb-2">MENU</div>
            <ul className=" flex flex-col gap-2 mb-6">
                {mainMenuItems.map((item, i) => (
                    <li key={i}>
                        <a
                            href={item.slug}
                            className={`text-sm tracking-wide flex gap-2 items-center p-1 px-2 ${
                                activeSegment === `${item.slug}`
                                    ? "active bg-primary text-primary-foreground rounded-md"
                                    : "inactive hover:bg-primary hover:text-primary-foreground rounded-md"
                            }`}
                        >
                            <item.icon className="w-6 h-6 text-muted-foreground" />
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="text-muted-foreground text-xs mb-2">CATEGORIES</div>
            <ul className="flex flex-col gap-2 mb-6">
                {categoryMenu.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`/category/${item.slug}`}
                            className={`text-sm tracking-wide flex gap-2 items-center p-1 px-2 ${
                                activeSegment === `/category/${item.slug}`
                                    ? "active bg-primary text-primary-foreground rounded-md"
                                    : "inactive hover:bg-primary hover:text-primary-foreground rounded-md"
                            }`}
                        >
                            <div className={`categoryicon ${item.slug}`}></div>
                            {item.title}{" "}
                            <span className="text-muted-foreground">
                                ({item.games.length})
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}

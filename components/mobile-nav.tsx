"use client";
import { IconMenu2, IconX, IconHome, IconCube } from "@tabler/icons-react";
import { useState } from "react";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const mobileNavItems = [
        {
            name: "Home",
            path: "/",
            icon: IconHome,
            slug: null,
        },
        {
            name: "New",
            path: "/new-games",
            icon: IconCube,
            slug: "new-games",
        },
        {
            name: "Categories",
            path: "/category",
            icon: IconCube,
            slug: "category",
        },
        {
            name: "About",
            path: "/about",
            icon: IconCube,
            slug: "about",
        },
        {
            name: "Contact",
            path: "/contact",
            icon: IconCube,
            slug: "contact",
        },
    ];
    return (
        <>
            {!isOpen ? (
                <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(true)}
                    aria-expanded="false"
                    aria-controls="mobile-menu"
                >
                    <IconMenu2 className="h-6 w-6" aria-label="Open Menu" />
                </button>
            ) : (
                <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-expanded="true"
                    aria-controls="mobile-menu"
                >
                    <IconX className="h-6 w-6" aria-label="Close Menu" />
                </button>
            )}

            {isOpen && (
                <div
                    id="mobile-menu"
                    className="fixed top-[57px] h-dvh left-0 right-0 z-50 bg-main p-4"
                >
                    <ul className="bg-muted flex flex-col mb-6" role="menu">
                        {mobileNavItems.map((item) => (
                            <li
                                key={item.name}
                                className="border-accent"
                                role="none"
                            >
                                <a
                                    href={item.path}
                                    className="text-xl font-medium hover:bg-accent rounderd-md flex gap-4 items-center border-b border-accent py-4 px-6"
                                    role="menuitem"
                                >
                                    <item.icon
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

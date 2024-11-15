"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { IconSearch } from "@tabler/icons-react";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const router = useRouter();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="relative flex-1 max-w-md mx-auto"
        >
            <IconSearch className="absolute left-2.5 top-2 h-4 w-4" />
            <input
                type="search"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search for games... Ex. Super Mario..."
                className="w-full rounded-lg bg-main border border-accent pl-8 pr-4 h-8"
            />
        </form>
    );
}

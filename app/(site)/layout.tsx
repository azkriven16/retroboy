import { UserNav } from "@/components/navbar/user-nav";
import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <UserNav />
            {children}
        </>
    );
}

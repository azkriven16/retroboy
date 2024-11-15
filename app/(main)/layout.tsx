import Header from "@/components/header";
import SideBar from "@/components/sidebar";
import Footer from "@/components/footer";
import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <SideBar />
                <div className="flex-1 overflow-auto p-4 lg:p-8 rounded-tl-xl">
                    <main>{children}</main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

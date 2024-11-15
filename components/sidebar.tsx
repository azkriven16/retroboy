import { getCategoryMenu } from "@/lib/game-queries";
import SideBarNav from "./sidebar-nav";

export default async function SideBar() {
    const categoryMenu = await getCategoryMenu();

    return (
        <aside className="w-64 p-4 hidden lg:flex flex-col">
            <SideBarNav categoryMenu={categoryMenu} />
        </aside>
    );
}

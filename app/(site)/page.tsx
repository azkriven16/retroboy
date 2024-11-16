import { GameCard } from "@/components/game-card";
import { GameCardContainer } from "@/components/game-card-container";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getAllGames } from "@/lib/queries";

export default async function HomePage() {
    const games = await getAllGames();

    return (
        <main className="space-y-10">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold font-sans uppercase">
                        Welcome to RetroBoy
                    </CardTitle>
                    <CardDescription className="text-lg">
                        Play retro games online directly on the browser
                    </CardDescription>
                    <Button className="w-fit">Explore Games</Button>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold font-sans uppercase">
                        Recently Added
                    </CardTitle>
                    <CardDescription className="text-lg">
                        Play retro games online directly on the browser
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <GameCardContainer games={games} />
                </CardContent>
            </Card>
        </main>
    );
}

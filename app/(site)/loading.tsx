import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
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
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <div className="aspect-square bg-secondary rounded-lg"></div>
                    <div className="aspect-square bg-secondary rounded-lg"></div>
                    <div className="aspect-square bg-secondary rounded-lg"></div>
                    <div className="aspect-square bg-secondary rounded-lg"></div>
                </CardContent>
            </Card>
        </main>
    );
}

import { Game } from "@prisma/client";
import { GameCard } from "./game-card";

export const GameCardContainer = ({ games }: { games: Game[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {games.map((game, idx) => (
                <GameCard key={idx} game={game} />
            ))}
        </div>
    );
};

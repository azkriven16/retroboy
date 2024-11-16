import { Game } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export const GameCard = ({ game }: { game: Game }) => {
    const { title, description, image, game_url } = game;
    return (
        <Link
            href={`/game/${game.slug}`}
            className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
            <Image
                src={`/game/${image}` || "/game/placeholder.jpg"}
                alt={title}
                width={300}
                height={300}
            />
            <h4>{title}</h4>
        </Link>
    );
};

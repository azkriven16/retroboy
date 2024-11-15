import { getGamesByCategory } from "@/lib/game-queries";
import { Game } from "@prisma/client";

interface PageProps {
    params: {
        slug: string;
    };
    searchParams: {
        page?: string;
    };
}

interface GamesByCategoryResult {
    games: Game[];
    totalPages: number;
    currentPage: number;
}
export default async function Page({ params, searchParams }: PageProps) {
    const page: number = parseInt(searchParams.page || "1") || 1;
    const { games, totalPages, currentPage }: GamesByCategoryResult =
        await getGamesByCategory(params.slug, page);

    return (
        <div>
            <h1 className="font-display text-3xl mb-4 capitalize">
                {params.slug}
            </h1>
            <nav className="rounded-md w-full mb-4">
                <ol className="list-reset flex">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <span className="text-gray-500 mx-2">/</span>
                    </li>
                    <li className="text-gray-500 capitalize">{params.slug}</li>
                </ol>
            </nav>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {games.length === 0 ? (
                    <p>No results.</p>
                ) : (
                    games.map((game: Game) => (
                        <a
                            href={`/game/${game.slug}`}
                            key={game.id}
                            className="group"
                        >
                            <div className="overflow-hidden rounded-lg border-accent-secondary border mb-2">
                                <img
                                    src={`/game/${game.image}`}
                                    width={300}
                                    height={300}
                                    alt={game.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <h1 className="font-medium">{game.title}</h1>
                        </a>
                    ))
                )}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                    <nav className="inline-flex rounded-md shadow">
                        {currentPage > 1 && (
                            <a
                                href={`/category/${params.slug}?page=${
                                    currentPage - 1
                                }`}
                                className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                Previous
                            </a>
                        )}
                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1
                        ).map((pageNum) => {
                            const isCurrentPage = currentPage === pageNum;
                            const pageUrl = `/category/${params.slug}?page=${pageNum}`;

                            return (
                                <a
                                    href={pageUrl}
                                    key={pageNum}
                                    className={`px-3 py-2 border border-gray-300 text-sm font-medium ${
                                        isCurrentPage
                                            ? "text-indigo-600 bg-indigo-50"
                                            : "text-gray-500 hover:bg-gray-50 bg-white"
                                    }`}
                                    aria-current={
                                        isCurrentPage ? "page" : undefined
                                    }
                                >
                                    {pageNum}
                                </a>
                            );
                        })}

                        {currentPage < totalPages && (
                            <a
                                href={`/category/${params.slug}?page=${
                                    currentPage + 1
                                }`}
                                className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                Next
                            </a>
                        )}
                    </nav>
                </div>
            )}
        </div>
    );
}

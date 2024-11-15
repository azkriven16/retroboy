import { PrismaClient, Game, Category } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllGames(): Promise<Game[]> {
    return await prisma.game.findMany({});
}

interface GamesByCategoryResult {
    games: Game[];
    totalPages: number;
    currentPage: number;
}
export async function getGamesByCategory(
    categorySlug: string,
    page: number = 1
): Promise<GamesByCategoryResult> {
    const ITEMS_PER_PAGE = 20;
    const skip = (page - 1) * ITEMS_PER_PAGE;

    const [games, totalCount] = await Promise.all([
        prisma.game.findMany({
            where: {
                categories: {
                    some: {
                        slug: categorySlug,
                    },
                },
            },
            skip,
            take: ITEMS_PER_PAGE,
        }),
        prisma.game.count({
            where: {
                categories: {
                    some: {
                        slug: categorySlug,
                    },
                },
            },
        }),
    ]);

    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
    return { games, totalPages, currentPage: page };
}

export async function getGameBySlug(slug: string): Promise<Game | null> {
    return await prisma.game.findUnique({
        where: {
            slug: slug,
        },
        include: {
            categories: true,
        },
    });
}

interface CategoryWithGames extends Category {
    games: Game[];
}
export async function getGamesBySelectedCategories(
    categoryIds: number[]
): Promise<CategoryWithGames[]> {
    const categories = await prisma.category.findMany({
        where: {
            id: {
                in: categoryIds,
            },
            games: {
                some: {
                    published: true,
                },
            },
        },
        select: {
            id: true,
            title: true,
            slug: true,
            image: true,
            core: true,
            games: {
                where: {
                    published: true,
                },
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    description: true,
                    image: true,
                    game_url: true,
                    created_at: true,
                    published: true,
                },
            },
        },
    });

    return categories as CategoryWithGames[];
}

export async function getGamesByCategoryId(
    categoryId: number
): Promise<CategoryWithGames | null> {
    const category = await prisma.category.findUnique({
        where: {
            id: categoryId,
        },
        select: {
            id: true,
            title: true,
            slug: true,
            image: true,
            games: {
                where: {
                    published: true,
                },
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    description: true,
                    image: true,
                    game_url: true,
                    published: true,
                    created_at: true,
                },
                take: 8,
            },
        },
    });

    if (!category) {
        return null;
    }

    return {
        ...category,
        games: category.games,
    } as CategoryWithGames;
}

export async function getGameCategories(): Promise<Category[]> {
    return await prisma.category.findMany({});
}

export async function getCategoryMenu(): Promise<CategoryWithGames[]> {
    return await prisma.category.findMany({
        include: {
            games: true,
        },
    });
}

export async function getSearchResults(params: string): Promise<Game[]> {
    return await prisma.game.findMany({
        where: {
            title: {
                contains: params,
            },
        },
        take: 100,
    });
}

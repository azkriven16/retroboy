import db from "./db";

export async function getAllGames() {
    return await db.game.findMany({
        orderBy: {
            created_at: "desc",
        },
    });
}

export async function getGamesByCategory(categorySlug: string, page = 1) {
    const ITEMS_PER_PAGE = 20;
    const skip = (page - 1) * ITEMS_PER_PAGE;

    const [games, totalCount] = await Promise.all([
        db.game.findMany({
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
        db.game.count({
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

export async function getGameBySlug(slug: string) {
    return await db.game.findUnique({
        where: {
            slug: slug,
        },
        include: {
            categories: true,
        },
    });
}

export async function getGamesBySelectedCategories(categoryIds: number[]) {
    return await db.category.findMany({
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
            title: true,
            slug: true,
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
                },
            },
        },
    });
}

export async function getGamesByCategoryId(categoryId: number) {
    return await db.category.findUnique({
        where: {
            id: categoryId,
        },
        select: {
            title: true,
            slug: true,
            games: {
                where: {
                    published: true,
                },
                take: 8,
            },
        },
    });
}

export async function getGameCategories() {
    return await db.category.findMany({});
}

export async function getCategoryMenu() {
    return await db.category.findMany({
        include: {
            games: true,
        },
    });
}

export async function getSearchResults(params: string) {
    return await db.game.findMany({
        where: {
            title: {
                contains: params,
            },
        },
        take: 100,
    });
}

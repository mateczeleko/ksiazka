import prisma from '@prisma/client'
const db = new prisma.PrismaClient();
export async function load() {
    const categories = await db.category.findMany({
        select: {
            id: true,
            name: true,
            recipes: {
                select: {
                    title: true,
                    id: true
                }
            }
        }
    });
    return {categories};
};
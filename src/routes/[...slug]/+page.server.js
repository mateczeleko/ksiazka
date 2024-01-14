import prisma from '@prisma/client'
const db = new prisma.PrismaClient();
export async function load({ params: { slug } }) {
    console.log(slug)
    const recipe = await db.recipe.findMany({
        where: { id: parseInt(slug) },
        include: { recipeIngredients: {select: {ingredient: true}}, category: true }
 })
    return {recipe};
};
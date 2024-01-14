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
export const actions = {
    default: async ({request}) => {
        const data = await request.formData()
        const id = parseInt(data.get('id'))
        console.log(id);
        await db.recipe.delete({where:{id}})
    }
};
import prisma from '@prisma/client'
const db = new prisma.PrismaClient();
export async function load() {
    const recipes = await db.recipe.findMany();
    const categories = await db.category.findMany();
    const ingredients = await db.ingredient.findMany();
    console.log(await recipes);
    return {recipes, categories, ingredients};
};
export const actions = {
    default: async ({request}) => {
        const data = await request.formData()
        const title = data.get('title')
        const description = data.get('description')
        const instructions = data.get('instructions')
        const category = data.get('category')
        const recipeIngredients = data.getAll('ingredients').reduce((acc, cur) => {
            acc.push({ id: parseInt(cur) });
            return acc
        },[])
        console.log("title",title)
        console.log("Description", description)
        console.log("instructions", instructions)
        console.log("category", category)
        console.log("ingredient", recipeIngredients)
        const recipe = await db.recipe.create({
            data: {
                title,
                description,
                instructions,
                categoryId: parseInt(category),
            }
        })
        await Promise.all(recipeIngredients.map(ingredient => {
            return db.recipe_Ingredient.create({
                data: {
                    recipeId: recipe.id,
                    ingredientId: ingredient.id
                }
            });
        }));
    }
};
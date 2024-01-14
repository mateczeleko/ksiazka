import prisma from '@prisma/client'
const db = new prisma.PrismaClient();
async function main() {
    // Seed Categories
    const category1 = await db.category.create({
        data: {
            name: 'Desserts',
        },
    });

    const category2 = await db.category.create({
        data: {
            name: 'Italian Cuisine',
        },
    });

    // Seed Ingredients
    const ingredient1 = await db.ingredient.create({
        data: {
            name: 'Flour',
        },
    });

    const ingredient2 = await db.ingredient.create({
        data: {
            name: 'Sugar',
        },
    });

    const ingredient3 = await db.ingredient.create({
        data: {
            name: 'Tomato Sauce',
        },
    });

    // Seed Recipes
    const recipe1 = await db.recipe.create({
        data: {
            title: 'Chocolate Cake',
            description: 'Delicious and rich chocolate cake',
            instructions: 'Mix ingredients and bake for 30 minutes...',
            categoryId: category1.id,
        },
    });

    const recipe2 = await db.recipe.create({
        data: {
            title: 'Spaghetti Bolognese',
            description: 'Traditional Italian pasta dish',
            instructions: 'Boil pasta, prepare sauce...',
            categoryId: category2.id,
        },
    });

    // Seed Recipe_Ingredient
    await db.recipe_Ingredient.create({
        data: {
            recipeId: recipe1.id,
            ingredientId: ingredient1.id,
        },
    });

    await db.recipe_Ingredient.create({
        data: {
            recipeId: recipe1.id,
            ingredientId: ingredient2.id,
        },
    });

    await db.recipe_Ingredient.create({
        data: {
            recipeId: recipe2.id,
            ingredientId: ingredient3.id,
        },
    });

    console.log('Database has been seeded!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await db.$disconnect();
    });

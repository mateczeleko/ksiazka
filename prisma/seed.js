import prisma from '@prisma/client';
const db = new prisma.PrismaClient();

async function main() {
    // Seed Categories
    const dessert = await db.category.create({ data: { name: 'Dessert' } });
    const italian = await db.category.create({ data: { name: 'Italian' } });
    const mexican = await db.category.create({ data: { name: 'Mexican' } });
    const indian = await db.category.create({ data: { name: 'Indian' } });
    // Add more categories as needed

    // Seed Ingredients
    const flour = await db.ingredient.create({ data: { name: 'Flour' } });
    const sugar = await db.ingredient.create({ data: { name: 'Sugar' } });
    const tomatoSauce = await db.ingredient.create({ data: { name: 'Tomato Sauce' } });
    const cheese = await db.ingredient.create({ data: { name: 'Cheese' } });
    const chicken = await db.ingredient.create({ data: { name: 'Chicken' } });
    // Add more ingredients as needed

    // Seed Recipes
    const chocolateCake = await db.recipe.create({
        data: {
            title: 'Chocolate Cake',
            description: 'Delicious and rich chocolate cake',
            instructions: 'Mix ingredients and bake for 30 minutes...',
            categoryId: dessert.id,
        },
    });

    const spaghettiBolognese = await db.recipe.create({
        data: {
            title: 'Spaghetti Bolognese',
            description: 'Traditional Italian pasta dish',
            instructions: 'Boil pasta, prepare sauce...',
            categoryId: italian.id,
        },
    });

    const taco = await db.recipe.create({
        data: {
            title: 'Taco',
            description: 'Traditional Mexican taco',
            instructions: 'Prepare meat and vegetables, serve on tortillas...',
            categoryId: mexican.id,
        },
    });

    const butterChicken = await db.recipe.create({
        data: {
            title: 'Butter Chicken',
            description: 'Creamy Indian chicken curry',
            instructions: 'Cook chicken in a mixture of spices and cream...',
            categoryId: indian.id,
        },
    });

    // Add more recipes as needed

    // Seed Recipe_Ingredient
    await db.recipe_Ingredient.create({
        data: { recipeId: chocolateCake.id, ingredientId: flour.id },
    });

    await db.recipe_Ingredient.create({
        data: { recipeId: chocolateCake.id, ingredientId: sugar.id },
    });

    await db.recipe_Ingredient.create({
        data: { recipeId: spaghettiBolognese.id, ingredientId: tomatoSauce.id },
    });

    await db.recipe_Ingredient.create({
        data: { recipeId: taco.id, ingredientId: cheese.id },
    });

    await db.recipe_Ingredient.create({
        data: { recipeId: butterChicken.id, ingredientId: chicken.id },
    });

    // Add more recipe-ingredient associations as needed

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

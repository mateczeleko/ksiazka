-- DropForeignKey
ALTER TABLE `Recipe` DROP FOREIGN KEY `Recipe_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `Recipe_Ingredient` DROP FOREIGN KEY `Recipe_Ingredient_ingredientId_fkey`;

-- DropForeignKey
ALTER TABLE `Recipe_Ingredient` DROP FOREIGN KEY `Recipe_Ingredient_recipeId_fkey`;

-- AddForeignKey
ALTER TABLE `Recipe` ADD CONSTRAINT `Recipe_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recipe_Ingredient` ADD CONSTRAINT `Recipe_Ingredient_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `Recipe`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recipe_Ingredient` ADD CONSTRAINT `Recipe_Ingredient_ingredientId_fkey` FOREIGN KEY (`ingredientId`) REFERENCES `Ingredient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

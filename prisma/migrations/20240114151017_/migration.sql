/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Category` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(40)`.
  - You are about to alter the column `title` on the `Recipe` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(40)`.
  - You are about to drop the `_CategoryToRecipe` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Recipe_id` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructions` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_CategoryToRecipe` DROP FOREIGN KEY `_CategoryToRecipe_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CategoryToRecipe` DROP FOREIGN KEY `_CategoryToRecipe_B_fkey`;

-- AlterTable
ALTER TABLE `Category` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `Recipe_id` INTEGER NOT NULL,
    MODIFY `name` VARCHAR(40) NOT NULL,
    ADD PRIMARY KEY (`Recipe_id`);

-- AlterTable
ALTER TABLE `Recipe` ADD COLUMN `description` VARCHAR(255) NOT NULL,
    ADD COLUMN `instructions` VARCHAR(2000) NOT NULL,
    MODIFY `title` VARCHAR(40) NOT NULL;

-- DropTable
DROP TABLE `_CategoryToRecipe`;

-- CreateTable
CREATE TABLE `Ingredient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recipe_Ingredient` (
    `recipeId` INTEGER NOT NULL,
    `ingredientId` INTEGER NOT NULL,

    PRIMARY KEY (`recipeId`, `ingredientId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_Recipe_id_fkey` FOREIGN KEY (`Recipe_id`) REFERENCES `Recipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recipe_Ingredient` ADD CONSTRAINT `Recipe_Ingredient_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `Recipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recipe_Ingredient` ADD CONSTRAINT `Recipe_Ingredient_ingredientId_fkey` FOREIGN KEY (`ingredientId`) REFERENCES `Ingredient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

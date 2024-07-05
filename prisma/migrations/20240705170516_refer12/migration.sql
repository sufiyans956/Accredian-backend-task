/*
  Warnings:

  - The primary key for the `refer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `refer` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL DEFAULT 1,
    ADD PRIMARY KEY (`id`);

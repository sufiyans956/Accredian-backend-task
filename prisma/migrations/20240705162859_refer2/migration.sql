/*
  Warnings:

  - The primary key for the `refer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `refer` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `refer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `refer` DROP PRIMARY KEY,
    DROP COLUMN `email`,
    DROP COLUMN `username`,
    ADD PRIMARY KEY (`referalname`);

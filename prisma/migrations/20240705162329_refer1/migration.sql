-- DropIndex
DROP INDEX `refer_email_key` ON `refer`;

-- AlterTable
ALTER TABLE `refer` ADD PRIMARY KEY (`username`);

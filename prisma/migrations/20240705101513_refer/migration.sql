-- CreateTable
CREATE TABLE `refer` (
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `referalname` VARCHAR(191) NOT NULL,
    `referalemail` VARCHAR(191) NOT NULL,
    `referaldate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `refer_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

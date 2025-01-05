/*
  Warnings:

  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `product` DROP PRIMARY KEY,
    MODIFY `id` CHAR(36) NOT NULL DEFAULT UUID(),
    ADD PRIMARY KEY (`id`);

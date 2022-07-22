/*
  Warnings:

  - Added the required column `celphone` to the `Guests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Guests" ADD COLUMN     "celphone" INTEGER NOT NULL;

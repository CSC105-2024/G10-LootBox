/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `Key` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Key_type_key" ON "Key"("type");

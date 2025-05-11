/*
  Warnings:

  - Added the required column `img` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "backgroundImage" TEXT;
ALTER TABLE "User" ADD COLUMN "profilePic" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "sellPrice" INTEGER NOT NULL,
    "img" TEXT NOT NULL
);
INSERT INTO "new_Item" ("id", "name", "sellPrice", "type") SELECT "id", "name", "sellPrice", "type" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

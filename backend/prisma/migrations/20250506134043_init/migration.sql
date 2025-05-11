/*
  Warnings:

  - You are about to drop the column `money` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "coin" INTEGER NOT NULL DEFAULT 0,
    "remainItems" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("id", "remainItems", "username") SELECT "id", "remainItems", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

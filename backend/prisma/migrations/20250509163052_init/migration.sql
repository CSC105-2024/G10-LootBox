/*
  Warnings:

  - You are about to drop the column `remainItems` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "sellPrice" INTEGER NOT NULL
);
INSERT INTO "new_Item" ("id", "name", "sellPrice", "type") SELECT "id", "name", "sellPrice", "type" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "coin" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("coin", "id", "password", "username") SELECT "coin", "id", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE TABLE "new_UserItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "UserItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserItem" ("id", "itemId", "quantity", "userId") SELECT "id", "itemId", "quantity", "userId" FROM "UserItem";
DROP TABLE "UserItem";
ALTER TABLE "new_UserItem" RENAME TO "UserItem";
CREATE UNIQUE INDEX "UserItem_userId_itemId_key" ON "UserItem"("userId", "itemId");
CREATE TABLE "new_UserKey" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "keyId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "UserKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserKey_keyId_fkey" FOREIGN KEY ("keyId") REFERENCES "Key" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserKey" ("id", "keyId", "quantity", "userId") SELECT "id", "keyId", "quantity", "userId" FROM "UserKey";
DROP TABLE "UserKey";
ALTER TABLE "new_UserKey" RENAME TO "UserKey";
CREATE UNIQUE INDEX "UserKey_userId_keyId_key" ON "UserKey"("userId", "keyId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "UserItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserItem" ("id", "itemId", "quantity", "userId") SELECT "id", "itemId", "quantity", "userId" FROM "UserItem";
DROP TABLE "UserItem";
ALTER TABLE "new_UserItem" RENAME TO "UserItem";
CREATE TABLE "new_UserKey" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "keyId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "UserKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserKey_keyId_fkey" FOREIGN KEY ("keyId") REFERENCES "Key" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserKey" ("id", "keyId", "quantity", "userId") SELECT "id", "keyId", "quantity", "userId" FROM "UserKey";
DROP TABLE "UserKey";
ALTER TABLE "new_UserKey" RENAME TO "UserKey";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

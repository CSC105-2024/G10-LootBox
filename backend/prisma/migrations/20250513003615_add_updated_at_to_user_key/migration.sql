-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserKey" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "keyId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastClaimedAt" DATETIME,
    CONSTRAINT "UserKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserKey_keyId_fkey" FOREIGN KEY ("keyId") REFERENCES "Key" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserKey" ("id", "keyId", "quantity", "userId") SELECT "id", "keyId", "quantity", "userId" FROM "UserKey";
DROP TABLE "UserKey";
ALTER TABLE "new_UserKey" RENAME TO "UserKey";
CREATE UNIQUE INDEX "UserKey_userId_keyId_key" ON "UserKey"("userId", "keyId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

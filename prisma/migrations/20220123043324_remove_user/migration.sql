/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `user_id` on the `suggestions` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "users";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_suggestions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_suggestions" ("created_at", "description", "id", "title") SELECT "created_at", "description", "id", "title" FROM "suggestions";
DROP TABLE "suggestions";
ALTER TABLE "new_suggestions" RENAME TO "suggestions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

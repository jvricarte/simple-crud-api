-- CreateTable
CREATE TABLE "reply_suggestions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reply" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "suggestion_id" TEXT NOT NULL,
    CONSTRAINT "reply_suggestions_suggestion_id_fkey" FOREIGN KEY ("suggestion_id") REFERENCES "suggestions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

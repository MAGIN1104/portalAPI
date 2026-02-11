-- CreateTable
CREATE TABLE "ApiDefinition" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sandbox" TEXT NOT NULL,
    "headers" JSONB NOT NULL,
    "fields" JSONB NOT NULL,
    "requiresAuth" BOOLEAN NOT NULL DEFAULT false,
    "request" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "responses" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ApiDefinition_key_key" ON "ApiDefinition"("key");

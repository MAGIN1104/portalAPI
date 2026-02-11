// Use dynamic import to ensure Prisma client is fully initialized
import { PrismaClient } from "@prisma/client";
import { apiDefinitions } from "../src/portal/adapters/in-memory/apiDefinitions";

const prisma = new PrismaClient();

const run = async () => {
  const entries = Object.entries(apiDefinitions);
  for (const [key, definition] of entries) {
    await prisma.apiDefinition.upsert({
      where: { key },
      update: {
        title: definition.title,
        method: definition.method,
        path: definition.path,
        description: definition.description,
        sandbox: definition.sandbox,
        headers: definition.headers,
        fields: definition.fields,
        requiresAuth: Boolean(definition.requiresAuth),
        request: definition.request,
        response: definition.response,
        responses: definition.responses,
      },
      create: {
        key,
        title: definition.title,
        method: definition.method,
        path: definition.path,
        description: definition.description,
        sandbox: definition.sandbox,
        headers: definition.headers,
        fields: definition.fields,
        requiresAuth: Boolean(definition.requiresAuth),
        request: definition.request,
        response: definition.response,
        responses: definition.responses,
      },
    });
  }
};

run()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

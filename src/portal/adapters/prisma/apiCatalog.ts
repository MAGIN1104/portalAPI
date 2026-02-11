import type { ApiDefinition } from "@/portal/domain/api";
import { prisma } from "@/lib/prisma";

const toApiDefinition = (item: {
  key: string;
  title: string;
  method: string;
  path: string;
  description: string;
  sandbox: string;
  headers: unknown;
  fields: unknown;
  requiresAuth: boolean;
  request: string;
  response: string;
  responses: unknown;
}): ApiDefinition => {
  return {
    title: item.title,
    method: item.method,
    path: item.path,
    description: item.description,
    sandbox: item.sandbox,
    headers: item.headers as [string, string][],
    fields: item.fields as ApiDefinition["fields"],
    requiresAuth: item.requiresAuth,
    request: item.request,
    response: item.response,
    responses: item.responses as ApiDefinition["responses"],
  };
};

export const fetchApiCatalog = async (): Promise<Record<string, ApiDefinition>> => {
  const rows = await prisma.apiDefinition.findMany();
  type ApiDefinitionRow = Awaited<typeof rows>[number];
  const result: Record<string, ApiDefinition> = {};
  for (const row of rows) {
    result[row.key] = toApiDefinition(row);
  }
  return result;
};

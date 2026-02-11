import type { ApiDefinition } from "@/portal/domain/api";
import type { ApiCatalogPort } from "@/portal/application/ports/ApiCatalogPort";

export const getActiveApi = (
  catalog: ApiCatalogPort,
  apiKey: string
): ApiDefinition => {
  const byKey = catalog.getByKey(apiKey);
  if (byKey) {
    return byKey;
  }
  const fallback = catalog.getByKey("auth");
  if (fallback) {
    return fallback;
  }
  const all = catalog.getAll();
  const first = Object.values(all)[0];
  if (!first) {
    throw new Error("Api catalog is empty.");
  }
  return first;
};

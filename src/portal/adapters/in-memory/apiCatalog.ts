import type { ApiCatalogPort } from "@/portal/application/ports/ApiCatalogPort";
import { apiDefinitions } from "@/portal/adapters/in-memory/apiDefinitions";

export const apiCatalog: ApiCatalogPort = {
  getAll: () => apiDefinitions,
  getByKey: (key: string) => apiDefinitions[key],
};

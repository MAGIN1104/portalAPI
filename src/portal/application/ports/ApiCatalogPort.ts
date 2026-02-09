import type { ApiDefinition } from "@/portal/domain/api";

export type ApiCatalogPort = {
  getAll: () => Record<string, ApiDefinition>;
  getByKey: (key: string) => ApiDefinition | undefined;
};

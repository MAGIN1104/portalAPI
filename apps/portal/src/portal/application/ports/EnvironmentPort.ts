import type { EnvironmentOption } from "@/portal/domain/environment";

export type EnvironmentPort = {
  getAll: () => EnvironmentOption[];
  getById: (id: string) => EnvironmentOption | undefined;
};

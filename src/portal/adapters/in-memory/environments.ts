import type { EnvironmentPort } from "@/portal/application/ports/EnvironmentPort";
import type { EnvironmentOption } from "@/portal/domain/environment";

export const environments: EnvironmentOption[] = [
  {
    id: "sandbox",
    label: "Sandbox",
    baseUrl: "https://sandbox.fiedemo.com.bo",
  },
  {
    id: "prod",
    label: "Produccion",
    baseUrl: "https://sandbox.fiedemo.com.bo",
  },
];

export const environmentPort: EnvironmentPort = {
  getAll: () => environments,
  getById: (id: string) => environments.find((env) => env.id === id),
};

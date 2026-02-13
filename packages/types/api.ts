// Tipos globales de API para todo el monorepo

export type ApiResponse = {
  code: number;
  label: string;
  mediaType: string;
  example: string;
  schema: string;
};

export type ApiField = {
  name: string;
  label: string;
  type?: "string" | "number" | "object";
  placeholder?: string;
  pattern?: string;
  helper?: string;
  required?: boolean;
  children?: ApiField[];
};

export type ApiDefinition = {
  title: string;
  method: string;
  path: string;
  description: string;
  sandbox: string;
  headers: [string, string][];
  fields: ApiField[];
  requiresAuth?: boolean;
  request: string;
  response: string;
  responses: ApiResponse[];
};

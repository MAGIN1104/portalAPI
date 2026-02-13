// ============= API Endpoints =============
// Tipos alineados con portal

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
  id?: string;
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

// Menu sections alineados con portal
export type MenuItem = {
  id: string;
  label: string;
  enabled: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};



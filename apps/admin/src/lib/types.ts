// ============= API Endpoints =============

export interface ApiField {
  name: string;
  label: string;
  type?: 'string' | 'number' | 'boolean' | 'object' | 'array';
  required: boolean;
  placeholder?: string;
  description?: string;
}

export interface ApiDefinition {
  id: string;
  title: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  category: string;
  sandbox: string;
  production?: string;
  headers: Array<[string, string]>;
  requiresAuth: boolean;
  fields: ApiField[];
  request: string;
  response: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiEndpointsResponse {
  data: ApiDefinition[];
}

export interface ApiConfigResponse {
  endpoints: {
    data: ApiDefinition[];
    count: number;
    categories: string[];
  };
  authTypes: {
    data: AuthType[];
    count: number;
    active: number;
  };
  authGroups: {
    data: AuthGroup[];
    count: number;
  };
  version: string;
  lastUpdated: string;
}

// ============= Auth Types & Groups =============

export interface AuthType {
  id: string;
  name: string;
  description: string;
  icon?: string;
  requiredFields: string[];
  category: 'static' | 'dynamic' | 'qr' | 'oauth' | 'custom';
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthGroup {
  id: string;
  name: string;
  description: string;
  authTypes: string[];
  endpoint?: string;
  metadata?: Record<string, unknown>;
}

export interface AuthTypesResponse {
  data: AuthType[];
}

export interface AuthGroupsResponse {
  data: AuthGroup[];
  authTypes?: AuthType[];
}

// ============= Combined Config Response =============

export interface AdminConfigResponse {
  endpoints: ApiDefinition[];
  authTypes: AuthType[];
  categories: string[];
}

// ============= Error Response =============

export interface ErrorResponse {
  error: string;
}

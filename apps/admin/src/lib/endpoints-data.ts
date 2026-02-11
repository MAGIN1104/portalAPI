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
  category: string; // 'auth', 'payment', 'invoice', etc.
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

export const apiEndpointsData: Record<string, ApiDefinition> = {
  auth_login: {
    id: 'auth_login',
    title: 'Servicio de Autenticacion',
    method: 'POST',
    path: '/onboarding/v1.0/noa/login',
    category: 'auth',
    description:
      'Permite autenticar a una empresa y obtener tokens necesarios para consumir servicios B2B.',
    sandbox: 'https://sandbox.fiedemo.com.bo',
    production: 'https://api.fiedemo.com.bo',
    headers: [['Content-Type', 'application/json']],
    requiresAuth: false,
    fields: [
      {
        name: 'loginName',
        label: 'Usuario de la empresa',
        type: 'string',
        required: true,
        placeholder: 'empresa_user',
      },
      {
        name: 'password',
        label: 'Contraseña',
        type: 'string',
        required: true,
        placeholder: 'Abc#1234',
      },
      {
        name: 'idDevice',
        label: 'Identificador del dispositivo origen',
        type: 'string',
        required: true,
        placeholder: 'f5756dcc-906f-450f-83e7-816c302948f7',
      },
      {
        name: 'idBusiness',
        label: 'Identificador único de la empresa',
        type: 'string',
        required: true,
        placeholder: 'f5756dcc-906f-450f-83e7-816c302948f7',
      },
    ],
    request: `{
  "loginName": "usuarioEmpresa",
  "password": "Abc#1234",
  "idDevice": "f5756dcc-906f-450f-83e7-816c302948f7",
  "idBusiness": "f5756dcc-906f-450f-83e7-816c302948f7"
}`,
    response: `{
  "transactionId": "3d69cc42-25ae-4dad-8da1-6bfceb9a4c67",
  "result": {
    "authInfo": {
      "session": "d2da033a-cf9c-4ca3-b667-f71ebca04f49",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    }
  },
  "code": "000",
  "message": "OK"
}`,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  // Nuevos endpoints pueden agregarse aquí
};

export function getAllEndpoints(): ApiDefinition[] {
  return Object.values(apiEndpointsData);
}

export function getEndpointById(id: string): ApiDefinition | undefined {
  return apiEndpointsData[id];
}

export function getEndpointsByCategory(category: string): ApiDefinition[] {
  return Object.values(apiEndpointsData).filter(
    (endpoint) => endpoint.category === category
  );
}

export function getAvailableCategories(): string[] {
  const categories = new Set(
    Object.values(apiEndpointsData).map((ep) => ep.category)
  );
  return Array.from(categories).sort();
}

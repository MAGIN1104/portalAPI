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
  authTypes: string[]; // IDs de los tipos de autenticación
  endpoint?: string; // Endpoint asociado si aplica
  metadata?: Record<string, unknown>;
}

export const authTypesData: Record<string, AuthType> = {
  basic: {
    id: 'basic',
    name: 'Autenticación Básica',
    description: 'Usuario y contraseña estándar',
    icon: 'lock',
    requiredFields: ['loginName', 'password'],
    category: 'static',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  qr: {
    id: 'qr',
    name: 'QR Authentication',
    description: 'Autenticación mediante código QR',
    icon: 'qr-code',
    requiredFields: ['qrCode'],
    category: 'dynamic',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  device: {
    id: 'device',
    name: 'Autenticación por Dispositivo',
    description: 'Validación mediante ID de dispositivo',
    icon: 'smartphone',
    requiredFields: ['idDevice', 'idBusiness'],
    category: 'static',
    isActive: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  cert: {
    id: 'cert',
    name: 'Autenticación Certificada',
    description: 'Autenticación con certificado digital',
    icon: 'certificate',
    requiredFields: ['certificate', 'certificatePassword'],
    category: 'custom',
    isActive: false, // Pendiente implementación
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z',
  },
  oauth: {
    id: 'oauth',
    name: 'OAuth 2.0',
    description: 'Autenticación mediante OAuth 2.0',
    icon: 'globe',
    requiredFields: ['clientId', 'clientSecret'],
    category: 'oauth',
    isActive: false, // Pendiente implementación
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: '2024-02-01T00:00:00Z',
  },
};

export const authGroupsData: Record<string, AuthGroup> = {
  noa_login: {
    id: 'noa_login',
    name: 'Grupo NOA Login',
    description: 'Grupo de autenticación para servicios NOA',
    authTypes: ['basic', 'device'],
    endpoint: 'auth_login',
    metadata: {
      priority: 1,
      version: '1.0',
    },
  },
  qr_auth_group: {
    id: 'qr_auth_group',
    name: 'Grupo QR Authentication',
    description: 'Grupo de autenticación mediante QR',
    authTypes: ['qr'],
    metadata: {
      priority: 2,
      version: '1.0',
    },
  },
  advanced_auth: {
    id: 'advanced_auth',
    name: 'Grupo Autenticación Avanzada',
    description: 'Grupo para autenticaciones avanzadas y certificadas',
    authTypes: ['cert', 'oauth'],
    metadata: {
      priority: 3,
      version: '2.0',
      experimental: true,
    },
  },
};

export function getAllAuthTypes(): AuthType[] {
  return Object.values(authTypesData);
}

export function getActiveAuthTypes(): AuthType[] {
  return Object.values(authTypesData).filter((authType) => authType.isActive);
}

export function getAuthTypeById(id: string): AuthType | undefined {
  return authTypesData[id];
}

export function getAllAuthGroups(): AuthGroup[] {
  return Object.values(authGroupsData);
}

export function getAuthGroupById(id: string): AuthGroup | undefined {
  return authGroupsData[id];
}

export function getAuthGroupByEndpoint(endpointId: string): AuthGroup | undefined {
  return Object.values(authGroupsData).find(
    (group) => group.endpoint === endpointId
  );
}

export function getAuthTypesForGroup(
  groupId: string
): AuthType[] {
  const group = getAuthGroupById(groupId);
  if (!group) return [];

  return group.authTypes
    .map((typeId) => getAuthTypeById(typeId))
    .filter((type): type is AuthType => type !== undefined);
}

export function getActiveAuthGroups(): AuthGroup[] {
  return Object.values(authGroupsData).filter((group) => {
    const activeTypes = group.authTypes.filter(
      (typeId) => getAuthTypeById(typeId)?.isActive
    );
    return activeTypes.length > 0;
  });
}

# FIE API Portal - Monorepo

Monorepo con Turborepo y pnpm para gestionar múltiples aplicaciones y librerías compartidas de FIE API.

## Estructura

```
├── apps/
│   ├── portal/              # Portal de APIs (frontend)
│   └── admin/               # Admin panel (frontend)
├── packages/
│   └── ui/                  # Componentes UI compartidos
├── package.json             # Root package.json con scripts de monorepo
├── pnpm-workspace.yaml      # Configuración de workspaces de pnpm
├── turbo.json               # Configuración de Turborepo
└── tsconfig.json            # Configuración TypeScript base
```

## Instalación

### Prerequisitos

- Node.js >= 20.0.0
- pnpm >= 9.0.0

### Pasos de instalación

```bash
# 1. Instalar pnpm (si no lo tienes)
npm install -g pnpm

# 2. Instalar dependencias del monorepo
pnpm install
```

## Scripts disponibles

```bash
# Desarrollo - corre todos los dev servers en paralelo
pnpm dev

# Build - compila todos los apps en dependencia
pnpm build

# Lint - ejecuta eslint en todos los packages
pnpm lint

# Type check - verifica tipos TypeScript
pnpm type-check

# Clean - borra .next, dist, node_modules cache
pnpm clean

# Format - formatea código con prettier
pnpm format
```

## Estructura de aplicaciones

### Portal (`apps/portal`)

Frontend de documentación y testing de APIs. 

```bash
cd apps/portal
pnpm dev
```

Puertos:
- Dev: http://localhost:3000

### Admin (`apps/admin`)

Panel de administración para gestionar APIs a nivel de base de datos.

```bash
cd apps/admin
pnpm dev
```

Puertos:
- Dev: http://localhost:3001

## Librería compartida

### UI (`packages/ui`)

Componentes React y utilidades compartidas entre aplicaciones.

**Exports:**
- `@fie-api/ui` - Componentes principales
- `@fie-api/ui/components` - Solo componentes
- `@fie-api/ui/hooks` - Solo hooks
- `@fie-api/ui/utils` - Solo utilities

**Ejemplo de uso:**

```tsx
import { Button, Card } from '@fie-api/ui';
import { useTheme } from '@fie-api/ui/hooks';
import { formatDate } from '@fie-api/ui/utils';
```

## Configuración de Turborepo

Los scripts se definen en `turbo.json` y se ejecutan respetando dependencias:

- `build` - Corre build en cada package, dependiendo de otros
- `dev` - Desarrollo en modo watch sin salida cacheada
- `lint` - Linter en paralelo con caching
- `type-check` - TypeScript en paralelo con caching

## Agregar nuevas dependencias

```bash
# Agregar al root (solo devDependencies)
pnpm add -w --save-dev <package>

# Agregar a un app específico
pnpm add <package> -r --filter @fie-api/portal

# Agregar a package compartido
pnpm add <package> -r --filter @fie-api/ui
```

## Deployment

### Docker

Cada app tiene su propio Dockerfile optimizado para producción. Ver archivos en cada carpeta `apps/*/Dockerfile`.

```bash
# Build portal
docker build -f apps/portal/Dockerfile -t fie-api-portal:latest .

# Build admin
docker build -f apps/admin/Dockerfile -t fie-api-admin:latest .
```

## Recursos

- [Turborepo Docs](https://turbo.build)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Next.js Documentation](https://nextjs.org/docs)

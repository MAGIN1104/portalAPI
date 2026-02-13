# FIE API Portal - Monorepo

Monorepo con Turborepo y pnpm para gestionar múltiples aplicaciones y librerías compartidas de FIE API.

### Prerequisitos

- Node.js >= 20.0.0

## Estructura de aplicaciones

### Portal (`apps/portal`)

Frontend de documentación y testing de APIs. 

Puertos:
- Dev: http://localhost:3000

### Admin (`apps/admin`)

Panel de administración para gestionar APIs a nivel de base de datos.

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


```bash
# Build portal
docker build -f apps/portal/Dockerfile -t fie-api-portal:latest .

# Build admin
docker build -f apps/admin/Dockerfile -t fie-api-admin:latest .
```

# Estructura recomendada para apps/portal

src/
  app/                # Rutas y páginas Next.js (app router)
  components/         # Componentes UI específicos de portal
  lib/                # Hooks, stores, helpers, lógica local de portal
  styles/             # Archivos CSS/SCSS locales (opcional)
  data/               # Mock data, fixtures, seeds (opcional)
  types/              # Tipos locales si no son globales (opcional)
public/               # Imágenes, fuentes, assets estáticos
package.json
README.md             # Documenta estructura, convenciones y buenas prácticas

## Buenas prácticas
- src/app/: Solo rutas y layouts de Next.js.
- src/components/: Solo componentes UI, organizados por dominio o feature.
- src/lib/: Hooks, stores, helpers, lógica de negocio local.
- src/styles/: CSS/SCSS locales (si usas Tailwind, puedes centralizarlo).
- src/data/: Datos de ejemplo, mocks, fixtures.
- src/types/: Tipos locales (si no son globales).
- public/: Solo assets estáticos.

## Ventajas
- Escalable: Puedes agregar features, rutas y componentes sin perder orden.
- Colaborativo: Cada equipo puede trabajar en features aislados.
- Onboarding fácil: La estructura es predecible y estándar en Next.js moderno.
- Separación clara: Entre UI, lógica, datos y tipos.

## ¿Qué evitar?
- No mezcles componentes, hooks y helpers en la misma carpeta.
- No pongas lógica de negocio en los archivos de página (page.tsx).
- No dupliques tipos o utilidades, usa packages/types y packages/lib para lo global.

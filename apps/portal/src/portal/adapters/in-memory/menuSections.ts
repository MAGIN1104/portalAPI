import type { MenuSectionsPort } from "@/portal/application/ports/MenuSectionsPort";
import type { MenuSection } from "@/portal/domain/menu";

// Cargar desde localStorage si están disponibles (sincronizados por el admin)
const loadFromSync = (): MenuSection[] => {
  if (typeof window === "undefined") return [];
  
  try {
    const raw = window.localStorage.getItem('fie-api-menu-sections');
    if (raw) {
      return JSON.parse(raw) as MenuSection[];
    }
  } catch (error) {
    console.warn('Error cargando menu sections sincronizados:', error);
  }
  
  return [];
};

// Fallback: datos por defecto
export const defaultMenuSections: MenuSection[] = [
  {
    id: "auth",
    title: "Autenticacion",
    items: [
      { id: "auth", label: "Login", enabled: true },
      { id: "refresh", label: "Refresh Token", enabled: false },
    ],
  },
  {
    id: "qr",
    title: "Gestion QR",
    items: [
      { id: "generateQR", label: "Generar QR", enabled: true },
      { id: "stateQR", label: "Estado QR", enabled: true },
    ],
  },
];

export const menuSections: MenuSection[] = loadFromSync().length > 0 
  ? loadFromSync() 
  : defaultMenuSections;

export const menuSectionsPort: MenuSectionsPort = {
  getSections: () => menuSections,
};

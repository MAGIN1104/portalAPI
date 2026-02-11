import type { MenuSectionsPort } from "@/portal/application/ports/MenuSectionsPort";
import type { MenuSection } from "@/portal/domain/menu";

export const menuSections: MenuSection[] = [
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

export const menuSectionsPort: MenuSectionsPort = {
  getSections: () => menuSections,
};

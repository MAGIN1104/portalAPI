export type AdminMenuItem = {
  id: string;
  label: string;
  enabled: boolean;
};

export type AdminMenuSection = {
  id: string;
  title: string;
  items: AdminMenuItem[];
};

export const defaultMenuSections: AdminMenuSection[] = [
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

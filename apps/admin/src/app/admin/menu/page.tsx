"use client";

import { MenuSectionsManagement } from "@/components/admin/MenuSectionsManagement";

export default function MenuSectionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold" style={{ color: "var(--foreground)" }}>
          Gestión de Grupos
        </h1>
        <p className="mt-1" style={{ color: "var(--muted)" }}>
          Controla los grupos que aparecen en el portal.
        </p>
      </div>
      <MenuSectionsManagement />
    </div>
  );
}

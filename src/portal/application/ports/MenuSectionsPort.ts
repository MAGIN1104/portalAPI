import type { MenuSection } from "@/portal/domain/menu";

export type MenuSectionsPort = {
  getSections: () => MenuSection[];
};

import type { MenuSection } from "@/portal/domain/menu";

export const filterMenuSections = (
  sections: MenuSection[],
  query: string
): MenuSection[] => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return sections;
  }
  return sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.label.toLowerCase().includes(normalized)
      ),
    }))
    .filter((section) => section.items.length > 0);
};

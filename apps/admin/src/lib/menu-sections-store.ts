import { defaultMenuSections, type AdminMenuSection } from "./menu-sections-data";

const STORAGE_KEY = "fie-admin-menu-sections";

export const loadMenuSections = (): AdminMenuSection[] => {
  if (typeof window === "undefined") {
    return defaultMenuSections;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return defaultMenuSections;
  }

  try {
    const parsed = JSON.parse(raw) as AdminMenuSection[];
    if (!Array.isArray(parsed)) {
      return defaultMenuSections;
    }
    return parsed;
  } catch {
    return defaultMenuSections;
  }
};

export const saveMenuSections = (sections: AdminMenuSection[]) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sections));
};

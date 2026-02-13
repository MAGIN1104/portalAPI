/**
 * Client-side sync utilities for loading data from localStorage
 * These functions are meant to be called from client components
 */

/**
 * Load menu sections from localStorage (synced from admin)
 * Falls back to empty array if not available
 */
export const loadMenuSectionsFromSync = (): any[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const raw = window.localStorage.getItem('fie-api-menu-sections');
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (error) {
    console.warn('Error loading menu sections from sync:', error);
  }
  
  return [];
};

/**
 * Load API definitions from localStorage (synced from admin)
 * Falls back to empty object if not available
 */
export const loadApiDefinitionsFromSync = (): Record<string, any> => {
  if (typeof window === 'undefined') return {};
  
  try {
    const raw = window.localStorage.getItem('fie-api-definitions');
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (error) {
    console.warn('Error loading API definitions from sync:', error);
  }
  
  return {};
};

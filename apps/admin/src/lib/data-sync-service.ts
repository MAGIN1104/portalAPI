// Servicio para sincronizar datos entre Admin y Portal via localStorage
import type { MenuSection, ApiDefinition } from './types';

const MENU_SECTIONS_KEY = 'fie-api-menu-sections';
const API_DEFINITIONS_KEY = 'fie-api-definitions';

/**
 * Guarda los menu sections en localStorage para que el portal los lea
 */
export const saveMenuSectionsForPortal = (sections: MenuSection[]) => {
  if (typeof window === 'undefined') return;
  
  try {
    window.localStorage.setItem(MENU_SECTIONS_KEY, JSON.stringify(sections));
    console.log('Menu sections sincronizados al portal');
  } catch (error) {
    console.error('Error al sincronizar menu sections:', error);
  }
};

/**
 * Lee los menu sections que el admin guardó
 */
export const loadMenuSectionsForPortal = (): MenuSection[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const raw = window.localStorage.getItem(MENU_SECTIONS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as MenuSection[];
  } catch (error) {
    console.error('Error al leer menu sections:', error);
    return [];
  }
};

/**
 * Guarda las APIs/Endpoints en localStorage para que el portal las lea
 */
export const saveApiDefinitionsForPortal = (apis: Record<string, ApiDefinition>) => {
  if (typeof window === 'undefined') return;
  
  try {
    window.localStorage.setItem(API_DEFINITIONS_KEY, JSON.stringify(apis));
    console.log('API definitions sincronizadas al portal');
  } catch (error) {
    console.error('Error al sincronizar API definitions:', error);
  }
};

/**
 * Lee las APIs/Endpoints que el admin guardó
 */
export const loadApiDefinitionsForPortal = (): Record<string, ApiDefinition> => {
  if (typeof window === 'undefined') return {};
  
  try {
    const raw = window.localStorage.getItem(API_DEFINITIONS_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, ApiDefinition>;
  } catch (error) {
    console.error('Error al leer API definitions:', error);
    return {};
  }
};

/**
 * Limpia toda la data sincronizada
 */
export const clearSyncedData = () => {
  if (typeof window === 'undefined') return;
  
  try {
    window.localStorage.removeItem(MENU_SECTIONS_KEY);
    window.localStorage.removeItem(API_DEFINITIONS_KEY);
    console.log('Datos sincronizados eliminados');
  } catch (error) {
    console.error('Error al limpiar datos sincronizados:', error);
  }
};

'use client';

import { useEffect, useState } from 'react';
import type { MenuSection } from '@/portal/domain/menu';
import type { ApiDefinition } from '@/portal/domain/api';
import { loadMenuSectionsFromSync, loadApiDefinitionsFromSync } from '@fie-api/ui';
import { defaultMenuSections } from '@/portal/adapters/in-memory/menuSections';

/**
 * Hook to load menu sections dynamically from sync or fallback to defaults
 * This runs on the client, so it can access localStorage
 */
export const useSyncedMenuSections = () => {
  const [sections, setSections] = useState<MenuSection[]>(defaultMenuSections);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const synced = loadMenuSectionsFromSync();
    if (synced.length > 0) {
      setSections(synced);
    }
    setIsLoading(false);
  }, []);

  return { sections, isLoading };
};

/**
 * Hook to load API definitions dynamically from sync or fallback to defaults
 */
export const useSyncedApiDefinitions = (defaultDefs: Record<string, ApiDefinition>) => {
  const [definitions, setDefinitions] = useState<Record<string, ApiDefinition>>(defaultDefs);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const synced = loadApiDefinitionsFromSync();
    if (Object.keys(synced).length > 0) {
      setDefinitions({ ...defaultDefs, ...synced });
    }
    setIsLoading(false);
  }, [defaultDefs]);

  return { definitions, isLoading };
};

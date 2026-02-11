"use client";

import { useEffect, useMemo, useState } from "react";
import {
  defaultMenuSections,
  type AdminMenuItem,
  type AdminMenuSection,
} from "@/lib/menu-sections-data";
import { loadMenuSections, saveMenuSections } from "@/lib/menu-sections-store";

const buildEmptyItem = (): AdminMenuItem => ({ id: "", label: "", enabled: true });

export const MenuSectionsManagement = () => {
  const [sections, setSections] = useState<AdminMenuSection[]>(defaultMenuSections);
  const [newSection, setNewSection] = useState({ id: "", title: "" });
  const [newItems, setNewItems] = useState<Record<string, AdminMenuItem>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setSections(loadMenuSections());
  }, []);

  useEffect(() => {
    saveMenuSections(sections);
  }, [sections]);

  const sectionIds = useMemo(() => new Set(sections.map((section) => section.id)), [sections]);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return sections;
    }
    const query = searchQuery.toLowerCase();
    return sections.filter(
      (section) =>
        section.id.toLowerCase().includes(query) ||
        section.title.toLowerCase().includes(query) ||
        section.items.some(
          (item) =>
            item.id.toLowerCase().includes(query) ||
            item.label.toLowerCase().includes(query)
        )
    );
  }, [sections, searchQuery]);

  const handleAddSection = () => {
    const id = newSection.id.trim();
    const title = newSection.title.trim();

    if (!id || !title) {
      window.alert("Completa el id y el titulo del grupo.");
      return;
    }

    if (sectionIds.has(id)) {
      window.alert("Ya existe un grupo con ese id.");
      return;
    }

    setSections([...sections, { id, title, items: [] }]);
    setNewSection({ id: "", title: "" });
  };

  const handleRemoveSection = (id: string) => {
    if (window.confirm("Eliminar este grupo y todos sus items?")) {
      setSections(sections.filter((section) => section.id !== id));
    }
  };

  const handleTitleChange = (id: string, title: string) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, title } : section
      )
    );
  };

  const handleToggleItem = (sectionId: string, itemId: string) => {
    setSections(
      sections.map((section) =>
        section.id !== sectionId
          ? section
          : {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId ? { ...item, enabled: !item.enabled } : item
              ),
            }
      )
    );
  };

  const handleItemLabelChange = (sectionId: string, itemId: string, label: string) => {
    setSections(
      sections.map((section) =>
        section.id !== sectionId
          ? section
          : {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId ? { ...item, label } : item
              ),
            }
      )
    );
  };

  const handleRemoveItem = (sectionId: string, itemId: string) => {
    setSections(
      sections.map((section) =>
        section.id !== sectionId
          ? section
          : { ...section, items: section.items.filter((item) => item.id !== itemId) }
      )
    );
  };

  const handleAddItem = (sectionId: string) => {
    const draft = newItems[sectionId] ?? buildEmptyItem();
    const id = draft.id.trim();
    const label = draft.label.trim();

    if (!id || !label) {
      window.alert("Completa el id y el nombre del item.");
      return;
    }

    const section = sections.find((entry) => entry.id === sectionId);
    if (!section) {
      return;
    }

    if (section.items.some((item) => item.id === id)) {
      window.alert("Ya existe un item con ese id en este grupo.");
      return;
    }

    setSections(
      sections.map((entry) =>
        entry.id !== sectionId
          ? entry
          : { ...entry, items: [...entry.items, { ...draft, id, label }] }
      )
    );

    setNewItems({ ...newItems, [sectionId]: buildEmptyItem() });
  };

  const toggleCollapse = (sectionId: string) => {
    setCollapsed((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  return (
    <div className="space-y-6" style={{ color: "var(--foreground)" }}>

      <div className="rounded-lg border p-4" style={{ borderColor: "var(--stroke)", backgroundColor: "var(--panel)" }}>
        <h4 className="font-display text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>Buscar grupos</h4>
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Buscar por id, titulo o items..."
          className="w-full rounded-lg border px-3 py-2 text-sm"
          style={{ borderColor: "var(--stroke)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
        />
      </div>

      <div className="rounded-lg border p-4" style={{ borderColor: "var(--stroke)", backgroundColor: "var(--panel)" }}>
        <h4 className="font-display text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>Nuevo grupo</h4>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr_auto]">
          <input
            value={newSection.id}
            onChange={(event) => setNewSection({ ...newSection, id: event.target.value })}
            placeholder="id (ej: auth)"
            className="w-full rounded-lg border px-3 py-2 text-sm"
            style={{ borderColor: "var(--stroke)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
          />
          <input
            value={newSection.title}
            onChange={(event) => setNewSection({ ...newSection, title: event.target.value })}
            placeholder="Titulo (ej: Autenticacion)"
            className="w-full rounded-lg border px-3 py-2 text-sm"
            style={{ borderColor: "var(--stroke)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
          />
          <button
            type="button"
            onClick={handleAddSection}
            className="rounded-lg px-4 py-2 text-sm font-medium text-white"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Agregar
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredSections.map((section) => {
          const draftItem = newItems[section.id] ?? buildEmptyItem();
          const isCollapsed = collapsed[section.id];
          return (
            <div key={section.id} className="space-y-2">
              <div className="flex items-center justify-between border-b px-2 py-3" style={{ borderColor: "var(--stroke)" }}>
                <button
                  type="button"
                  onClick={() => toggleCollapse(section.id)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] transition ${
                        isCollapsed ? "-rotate-90" : "rotate-0"
                      }`}
                      style={{ color: "var(--muted)" }}
                    >
                      ▼
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--muted)" }}>
                        {section.id}
                      </p>
                      <input
                        value={section.title}
                        onChange={(event) => handleTitleChange(section.id, event.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-1 w-full rounded border px-2 py-1 text-sm"
                        style={{ borderColor: "var(--stroke)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
                      />
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => handleRemoveSection(section.id)}
                  className="ml-3 rounded-lg px-3 py-1 text-xs"
                  style={{ backgroundColor: "rgba(223, 21, 131, 0.2)", color: "var(--accent)" }}
                >
                  Eliminar
                </button>
              </div>

              {!isCollapsed && (
                <div className="px-2 pb-4 pt-2 space-y-2">
                  {section.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-2 rounded-lg border px-3 py-2" style={{ borderColor: "var(--stroke)", backgroundColor: "var(--panel)" }}>
                      <div className="min-w-[100px] text-[10px] uppercase tracking-[0.3em]" style={{ color: "var(--muted)" }}>
                        {item.id}
                      </div>
                      <input
                        value={item.label}
                        onChange={(event) => handleItemLabelChange(section.id, item.id, event.target.value)}
                        className="flex-1 rounded border px-2 py-1 text-sm"
                        style={{ borderColor: "var(--stroke)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
                      />
                      <label className="flex items-center gap-1 text-[10px] whitespace-nowrap" style={{ color: "var(--muted)" }}>
                        <input
                          type="checkbox"
                          checked={item.enabled}
                          onChange={() => handleToggleItem(section.id, item.id)}
                          style={{ accentColor: "var(--primary)" }}
                        />
                        Visible
                      </label>
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(section.id, item.id)}
                        className="rounded px-2 py-1 text-[10px]"
                        style={{ backgroundColor: "rgba(223, 21, 131, 0.2)", color: "var(--accent)" }}
                      >
                        Quitar
                      </button>
                    </div>
                  ))}

                  <div className="grid grid-cols-1 gap-2 pt-2 md:grid-cols-[1fr_1fr_auto]">
                    <input
                      value={draftItem.id}
                      onChange={(event) =>
                        setNewItems({
                          ...newItems,
                          [section.id]: { ...draftItem, id: event.target.value },
                        })
                      }
                      placeholder="id del item"
                      className="w-full rounded border px-2 py-1 text-sm"
                      style={{ borderColor: "var(--stroke)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
                    />
                    <input
                      value={draftItem.label}
                      onChange={(event) =>
                        setNewItems({
                          ...newItems,
                          [section.id]: { ...draftItem, label: event.target.value },
                        })
                      }
                      placeholder="Nombre del item"
                      className="w-full rounded border px-2 py-1 text-sm"
                      style={{ borderColor: "var(--stroke)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
                    />
                    <button
                      type="button"
                      onClick={() => handleAddItem(section.id)}
                      className="rounded px-3 py-1 text-sm font-medium"
                      style={{ backgroundColor: "rgba(99, 164, 255, 0.15)", color: "var(--primary)" }}
                    >
                      + Item
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

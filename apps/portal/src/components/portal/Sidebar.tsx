import type { ApiDefinition } from "@/types/api";
import type { MenuSection } from "@/types/menu";

type SidebarProps = {
  filteredSections: MenuSection[];
  collapsed: Record<string, boolean>;
  activeApiKey: string;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onToggleSection: (sectionId: string) => void;
  onApiClick: (itemId: string, enabled: boolean) => void;
  methodBadgeClass: (method: string) => string;
  apiDefinitions: Record<string, ApiDefinition>;
};

export function Sidebar({
  filteredSections,
  collapsed,
  activeApiKey,
  searchQuery,
  onSearchChange,
  onToggleSection,
  onApiClick,
  methodBadgeClass,
  apiDefinitions,
}: SidebarProps) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="border-b border-stroke bg-menu px-4 py-3">
        <label className="text-[10px] uppercase tracking-[0.3em] text-muted">
          Buscar API
        </label>
        <input
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Busca una API"
          className="mt-2 w-full rounded-lg border border-stroke/80 bg-panel px-3 py-2 text-sm text-foreground placeholder:text-muted/70 shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>
      <div className="flex-1 min-h-0 space-y-4 overflow-y-auto px-2 pb-4 pt-3">
        {filteredSections.map((section) => {
          const isCollapsed = collapsed[section.id];
          return (
            <div key={section.id} className="space-y-2">
              <button
                type="button"
                onClick={() => onToggleSection(section.id)}
                className="flex w-full items-center justify-between border-b border-stroke px-2 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.3em] text-muted"
              >
                <span>{section.title}</span>
                <span
                  className={`text-[10px] transition ${
                    isCollapsed ? "-rotate-90" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              <div className={`${isCollapsed ? "hidden" : "grid"} gap-2 px-2`}>
                {section.items.map((item) => {
                  const isActive = activeApiKey === item.id;
                  const isEnabled = item.enabled;
                  const method = apiDefinitions[item.id]?.method ?? "";
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onApiClick(item.id, isEnabled)}
                      disabled={!isEnabled}
                      className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                        isEnabled
                          ? "text-foreground hover:bg-panel-strong"
                          : "text-muted opacity-60"
                      } ${isActive ? "bg-panel-strong" : ""}`}
                    >
                      <span className="truncate">{item.label}</span>
                      {isEnabled && method ? (
                        <span
                          className={`rounded border px-2 py-0.5 text-[10px] font-semibold ${methodBadgeClass(
                            method
                          )}`}
                        >
                          {method}
                        </span>
                      ) : (
                        <span className="text-[10px] uppercase">Prox.</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

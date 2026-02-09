import type { ApiDefinition } from "@/types/api";

type ApiOverviewProps = {
  activeApi: ApiDefinition;
  methodBadgeClass: (method: string) => string;
  baseUrl: string;
  baseUrlLabel: string;
};

export function ApiOverview({
  activeApi,
  methodBadgeClass,
  baseUrl,
  baseUrlLabel,
}: ApiOverviewProps) {
  return (
    <section className="rounded-2xl border border-stroke bg-panel p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
            API seleccionada
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <span
              className={`rounded border px-2 py-1 text-[10px] font-semibold ${methodBadgeClass(
                activeApi.method
              )}`}
            >
              {activeApi.method}
            </span>
            <h1 className="font-display text-2xl text-foreground">
              {activeApi.title}
            </h1>
          </div>
          <p className="mt-2 text-sm text-muted">{activeApi.description}</p>
        </div>
        {/* Base URL hidden temporarily */}
      </div>
      <div className="mt-4 grid gap-4">
        <div className="rounded-xl border border-stroke bg-panel-strong p-4">
          <p className="text-xs text-muted">Ruta</p>
          <p className="text-sm font-semibold text-foreground break-all">
             {activeApi.path}
          </p>
        </div>
      </div>
    </section>
  );
}

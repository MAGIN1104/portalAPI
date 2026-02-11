import type { ApiDefinition } from "@/types/api";

type RunMeta = {
  status: number;
  latencyMs: number;
  timestamp: string;
};


type SupportChannel = {
  label: string;
  value: string;
  hint?: string;
};

type RightPanelProps = {
  activeApi: ApiDefinition;
  lastRunMeta?: RunMeta;
  consoleResponse: string;
  snippetLabel: string;
  snippetCode: string;
  supportChannels: SupportChannel[];
  onOpenConsole: () => void;
};

export function RightPanel({
  activeApi,
  lastRunMeta,
  consoleResponse,
  snippetLabel,
  snippetCode,
  supportChannels,
  onOpenConsole,
}: RightPanelProps) {
  return (
    <aside className="hidden space-y-6 xl:block xl:sticky xl:top-24 xl:max-h-[calc(100vh-140px)] xl:overflow-y-auto xl:pr-1">

      <div className="rounded-2xl border border-stroke bg-panel-strong p-6">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Try it
          </p>
          <button
            type="button"
            onClick={onOpenConsole}
            className="rounded-full border border-stroke bg-panel px-3 py-1 text-xs font-semibold"
          >
            Abrir consola
          </button>
        </div>
        <div className="mt-4 space-y-3">
          <div className="rounded-lg border border-stroke bg-panel px-3 py-2 text-xs text-muted">
            <span className="mr-2 font-semibold text-foreground">
              {activeApi.method}
            </span>
            <span className="break-all">{activeApi.path}</span>
          </div>
          <button
            type="button"
            onClick={onOpenConsole}
            className="w-full rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white"
          >
            Ejecutar
          </button>
        </div>

        {lastRunMeta ? (
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted">
            <span className="rounded border border-stroke bg-panel px-2 py-1 text-foreground">
              {lastRunMeta.status}
            </span>
            <span>{lastRunMeta.latencyMs} ms</span>
            <span>{lastRunMeta.timestamp}</span>
          </div>
        ) : null}
        {consoleResponse ? (
          <pre className="mt-4 whitespace-pre-wrap rounded-lg bg-code p-4 text-xs text-emerald-200">
            {consoleResponse}
          </pre>
        ) : null}
      </div>

      <div className="rounded-2xl border border-stroke bg-code p-5 text-emerald-300">
        <h2 className="text-xs uppercase tracking-[0.3em] text-emerald-100">
          Ejemplo request
        </h2>
        <pre className="mt-3 max-h-64 whitespace-pre-wrap text-xs break-words overflow-auto">
          {activeApi.request}
        </pre>
      </div>
      <div className="rounded-2xl border border-stroke bg-code p-5 text-emerald-300">
        <h2 className="text-xs uppercase tracking-[0.3em] text-emerald-100">
          Ejemplo response
        </h2>
        <pre className="mt-3 max-h-64 whitespace-pre-wrap text-xs break-words overflow-auto">
          {activeApi.response}
        </pre>
      </div>

      <div className="rounded-2xl border border-stroke bg-panel-strong p-6">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Code snippet
          </p>
          <span className="rounded-full border border-stroke bg-panel px-3 py-1 text-[10px] font-semibold text-foreground">
            {snippetLabel}
          </span>
        </div>
        <pre className="mt-4 max-h-64 whitespace-pre-wrap rounded-lg bg-code p-4 text-xs text-emerald-200 overflow-auto">
          {snippetCode}
        </pre>
      </div>

      <div className="rounded-2xl border border-stroke bg-panel-strong p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Soporte</p>
        <div className="mt-4 space-y-3 text-xs">
          {supportChannels.map((channel) => (
            <div key={channel.label} className="rounded-lg border border-stroke bg-panel px-3 py-2">
              <p className="text-foreground font-semibold">{channel.label}</p>
              <p className="text-muted break-all">{channel.value}</p>
              {channel.hint ? (
                <p className="text-[10px] text-muted mt-1">{channel.hint}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}

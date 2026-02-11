import type { ApiResponse } from "@/types/api";

type ResponsesPanelProps = {
  responses: ApiResponse[];
  expandedResponses: Record<string, boolean>;
  expandAllResponses: boolean;
  onToggleResponse: (code: number) => void;
  onToggleExpandAll: () => void;
};

export function ResponsesPanel({
  responses,
  expandedResponses,
  expandAllResponses,
  onToggleResponse,
  onToggleExpandAll,
}: ResponsesPanelProps) {
  return (
    <div className="rounded-2xl border border-stroke bg-panel p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Responses
          </p>
          <h2 className="font-display text-2xl text-foreground">
            Codigos y ejemplos
          </h2>
        </div>
        <button
          type="button"
          onClick={onToggleExpandAll}
          className="rounded-full border border-stroke bg-panel-strong px-3 py-1 text-xs font-semibold text-foreground"
        >
          {expandAllResponses ? "Colapsar todo" : "Expandir todo"}
        </button>
      </div>
      <div className="mt-4 space-y-4">
        {responses.map((response) => (
          <div
            key={response.code}
            className="rounded-xl border border-stroke bg-panel-strong p-4"
          >
            <button
              type="button"
              onClick={() => onToggleResponse(response.code)}
              className="flex w-full flex-wrap items-center justify-between gap-3"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded border border-stroke bg-panel px-2 py-1 text-xs font-semibold">
                  {response.code}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {response.label}
                </span>
              </div>
              <span className="text-xs text-muted">
                {expandAllResponses || expandedResponses[String(response.code)]
                  ? "Ocultar"
                  : "Ver"}
              </span>
            </button>
            <div
              className={`collapse-panel ${
                expandAllResponses || expandedResponses[String(response.code)]
                  ? "is-open"
                  : ""
              }`}
            >
              <div className="mt-3 text-xs text-muted">
                Media type
                <div className="mt-1 rounded-lg border border-stroke bg-panel px-3 py-2 text-xs text-foreground">
                  {response.mediaType}
                </div>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    Example value
                  </p>
                  <pre className="mt-2 max-h-48 whitespace-pre-wrap rounded-lg bg-code p-3 text-xs text-emerald-200 overflow-auto">
                    {response.example}
                  </pre>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    Schema
                  </p>
                  <pre className="mt-2 max-h-48 whitespace-pre-wrap rounded-lg bg-code p-3 text-xs text-emerald-200 overflow-auto">
                    {response.schema}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

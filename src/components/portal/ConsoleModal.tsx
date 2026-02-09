import type { ApiDefinition } from "@/types/api";

type RunMeta = {
  status: number;
  latencyMs: number;
  timestamp: string;
};

type ConsoleModalProps = {
  open: boolean;
  activeApi: ApiDefinition;
  consoleValues: Record<string, string>;
  formattedPayload: string;
  lastRunMeta?: RunMeta;
  consoleResponse: string;
  authToken: string;
  tokenRequired: boolean;
  errorMessage?: string;
  tokenError?: string;
  fieldErrors: Record<string, string>;
  simulatedStatus: number;
  onClose: () => void;
  onChange: (field: string, value: string) => void;
  onTokenChange: (value: string) => void;
  onStatusChange: (value: number) => void;
  onRun: () => void;
};

export function ConsoleModal({
  open,
  activeApi,
  consoleValues,
  formattedPayload,
  lastRunMeta,
  consoleResponse,
  authToken,
  tokenRequired,
  errorMessage,
  tokenError,
  fieldErrors,
  simulatedStatus,
  onClose,
  onChange,
  onTokenChange,
  onStatusChange,
  onRun,
}: ConsoleModalProps) {
  if (!open) {
    return null;
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-stroke/80 bg-panel px-3 py-2 text-sm text-foreground placeholder:text-muted/70 shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
  const selectClass =
    "mt-2 w-full rounded-lg border border-stroke/80 bg-panel px-3 py-2 text-sm text-foreground shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  const renderFields = (
    fields: ApiDefinition["fields"],
    parentPath = ""
  ) =>
    fields.map((field) => {
      const fieldPath = parentPath ? `${parentPath}.${field.name}` : field.name;
      const isObject = field.type === "object" || Boolean(field.children?.length);
      if (isObject) {
        return (
          <div
            key={fieldPath}
            className="sm:col-span-2 rounded-lg border border-stroke bg-panel px-3 py-3"
          >
            <p className="text-xs font-semibold text-foreground">
              {field.label} ({fieldPath})
            </p>
            <div className="mt-3 grid auto-rows-fr gap-3 sm:grid-cols-2">
              {renderFields(field.children ?? [], fieldPath)}
            </div>
          </div>
        );
      }
      return (
        <label
          key={fieldPath}
          className="flex min-h-[96px] flex-col text-xs font-semibold text-muted"
        >
          <span className="flex items-center gap-1">
            <span>
              {field.label} ({fieldPath})
            </span>
            {field.required ? (
              <span className="text-sm font-bold text-rose-400">*</span>
            ) : null}
          </span>
          <input
            value={consoleValues[fieldPath] ?? ""}
            onChange={(event) => onChange(fieldPath, event.target.value)}
            type="text"
            placeholder={field.placeholder}
            pattern={field.pattern}
            className={`${inputClass} ${
              fieldErrors[fieldPath]
                ? "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/20"
                : ""
            }`}
            aria-invalid={Boolean(fieldErrors[fieldPath])}
          />
          <span
            className={`mt-1 min-h-[16px] text-[11px] ${
              fieldErrors[fieldPath] ? "text-rose-300" : "text-muted"
            }`}
          >
            {fieldErrors[fieldPath] ?? field.helper ?? " "}
          </span>
        </label>
      );
    });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4">
      <div className="max-h-[calc(100vh-3rem)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-stroke bg-panel text-foreground sm:max-h-[calc(100vh-5rem)]">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-stroke bg-panel/95 px-5 py-4 backdrop-blur sm:px-6">
          <div>
            <h3 className="font-display text-xl text-foreground">
              Prueba: {activeApi.title}
            </h3>
            <p className="mt-1 text-xs text-muted">
              Simula ejecuciones y valida los payloads antes de consumir la API.
            </p>
          </div>
          <button type="button" onClick={onClose} className="text-xl text-muted">
            ×
          </button>
        </div>

        <div className="space-y-5 px-5 py-4 sm:px-6">
          <div className="rounded-xl border border-stroke bg-panel-strong p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Credenciales
            </p>
            <div className="mt-3 grid auto-rows-fr gap-3 sm:grid-cols-2">
              {tokenRequired ? (
                <label className="flex min-h-[96px] flex-col text-xs font-semibold text-muted sm:col-span-2">
                  Token de acceso (Authorization)
                  <input
                    value={authToken}
                    onChange={(event) => onTokenChange(event.target.value)}
                    placeholder="Bearer eyJ..."
                    pattern="^Bearer\s+.+$"
                    className={`${inputClass} ${
                      tokenError
                        ? "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/20"
                        : ""
                    }`}
                    aria-invalid={Boolean(tokenError)}
                  />
                  <span
                    className={`mt-1 min-h-[16px] text-[11px] ${
                      tokenError ? "text-rose-300" : "text-muted"
                    }`}
                  >
                    {tokenError ?? "Usa el formato: Bearer <token>."}
                  </span>
                </label>
              ) : null}
              <label className="flex min-h-[96px] flex-col text-xs font-semibold text-muted sm:col-span-2">
                Simular respuesta
                <select
                  value={simulatedStatus}
                  onChange={(event) =>
                    onStatusChange(Number(event.target.value))
                  }
                  className={selectClass}
                >
                  {activeApi.responses.map((response) => (
                    <option key={response.code} value={response.code}>
                      {response.code} {response.label}
                    </option>
                  ))}
                </select>
                <span className="mt-1 min-h-[16px] text-[11px] text-muted">
                  Elige el estado que quieres simular.
                </span>
              </label>
            </div>
          </div>

          <div className="rounded-xl border border-stroke bg-panel-strong p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Parametros
            </p>
            <div className="mt-3 grid auto-rows-fr gap-3 sm:grid-cols-2">
              {renderFields(activeApi.fields)}
            </div>
          </div>

          {errorMessage ? (
            <div className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
              {errorMessage}
            </div>
          ) : null}

          <button
            type="button"
            onClick={onRun}
            className="w-full rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white"
          >
            Ejecutar solicitud
          </button>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-stroke/80 bg-panel p-4 text-xs text-muted">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
                Payload JSON
              </p>
              <pre className="mt-2 max-h-48 overflow-auto whitespace-pre-wrap text-xs text-foreground">
                {formattedPayload}
              </pre>
            </div>
            {consoleResponse ? (
              <div className="rounded-xl border border-stroke/80 bg-panel p-4 text-xs text-foreground">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
                  Response
                </p>
                <pre className="mt-2 max-h-48 overflow-auto whitespace-pre-wrap text-xs text-foreground">
                  {consoleResponse}
                </pre>
              </div>
            ) : null}
          </div>

          {lastRunMeta ? (
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              <span className="rounded border border-stroke bg-panel px-2 py-1 text-foreground">
                {lastRunMeta.status}
              </span>
              <span>{lastRunMeta.latencyMs} ms</span>
              <span>{lastRunMeta.timestamp}</span>
            </div>
          ) : null}

          
        </div>
      </div>
    </div>
  );
}

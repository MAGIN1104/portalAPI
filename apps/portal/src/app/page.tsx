"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { apiCatalog } from "@/portal/adapters/in-memory/apiCatalog";
import { environmentPort } from "@/portal/adapters/in-memory/environments";
import { menuSectionsPort } from "@/portal/adapters/in-memory/menuSections";
import { supportInfoPort } from "@/portal/adapters/in-memory/supportInfo";
import { emptySolicitud } from "@/portal/adapters/in-memory/emptySolicitud";
import { getActiveApi } from "@/portal/application/use-cases/getActiveApi";
import { filterMenuSections } from "@/portal/application/use-cases/filterMenuSections";
import { collectLeafFields } from "@/portal/application/use-cases/collectLeafFields";
import { buildPayloadJson } from "@/portal/application/use-cases/buildPayload";
import { validateConsoleInputs } from "@/portal/application/use-cases/validateConsoleInputs";
import { buildCurlSnippet } from "@/portal/application/use-cases/buildCurlSnippet";
import { buildPrintableSolicitud } from "@/portal/application/use-cases/buildPrintableSolicitud";
import { ApiOverview } from "@/components/portal/ApiOverview";
import { ApiTables } from "@/components/portal/ApiTables";
import { ConsoleModal } from "@/components/portal/ConsoleModal";
import { Header } from "@/components/portal/Header";
import { ResponsesPanel } from "@/components/portal/ResponsesPanel";
import { RightPanel } from "@/components/portal/RightPanel";
import { Sidebar } from "@/components/portal/Sidebar";
import { SolicitudModal } from "@/components/portal/SolicitudModal";
import type { SolicitudForm } from "@/portal/domain/solicitud";

type RunMeta = {
  status: number;
  latencyMs: number;
  timestamp: string;
};

const environments = environmentPort.getAll();
const supportChannels = supportInfoPort.getSupportChannels();
const faqs = supportInfoPort.getFaqs();
const menuSections = menuSectionsPort.getSections();

export default function Home() {
  const [activeApiKey, setActiveApiKey] = useState("auth");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(menuSections.map((section) => [section.id, true]))
  );
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [solicitudOpen, setSolicitudOpen] = useState(false);
  const [consoleValues, setConsoleValues] = useState<Record<string, string>>({});
  const [consoleResponse, setConsoleResponse] = useState("");
  const [consoleError, setConsoleError] = useState<string | undefined>(
    undefined
  );
  const [authToken, setAuthToken] = useState("");
  const [tokenError, setTokenError] = useState<string | undefined>(undefined);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [simulatedStatus, setSimulatedStatus] = useState(200);
  const [solicitud, setSolicitud] = useState<SolicitudForm>(emptySolicitud);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedResponses, setExpandedResponses] = useState<
    Record<string, boolean>
  >({});
  const [expandAllResponses, setExpandAllResponses] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lastRunMeta, setLastRunMeta] = useState<RunMeta | undefined>(undefined);
  const [selectedEnvironment] = useState("sandbox");
  const activeApi = useMemo(
    () => getActiveApi(apiCatalog, activeApiKey),
    [activeApiKey]
  );

  const environmentInfo = useMemo(
    () =>
      environmentPort.getById(selectedEnvironment) ?? environments[0],
    [selectedEnvironment]
  );

  const filteredSections = useMemo(
    () => filterMenuSections(menuSections, searchQuery),
    [searchQuery]
  );

  const methodBadgeClass = (method: string) => {
    const normalized = method.toUpperCase();
    if (normalized === "GET") {
      return "border-emerald-200 bg-emerald-100 text-emerald-800";
    }
    if (normalized === "POST") {
      return "border-sky-200 bg-sky-100 text-sky-800";
    }
    if (normalized === "PUT") {
      return "border-amber-200 bg-amber-100 text-amber-800";
    }
    if (normalized === "DEL" || normalized === "DELETE") {
      return "border-rose-200 bg-rose-100 text-rose-800";
    }
    return "border-slate-200 bg-slate-100 text-slate-800";
  };

  const toggleSection = (sectionId: string) => {
    setCollapsed((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const handleApiClick = (itemId: string, enabled: boolean) => {
    if (!enabled || !apiCatalog.getByKey(itemId)) {
      return;
    }
    setActiveApiKey(itemId);
  };

  const openConsole = () => {
    const values: Record<string, string> = {};
    collectLeafFields(activeApi.fields).forEach(({ path }) => {
      values[path] = "";
    });
    setConsoleValues(values);
    setConsoleResponse("");
    setConsoleError(undefined);
    setAuthToken("");
    setTokenError(undefined);
    setFieldErrors({});
    setSimulatedStatus(activeApi.responses[0]?.code ?? 200);
    setConsoleOpen(true);
  };

  const runSimulation = () => {
    const validation = validateConsoleInputs({
      fields: activeApi.fields,
      values: consoleValues,
      requiresAuth: activeApi.requiresAuth,
      tokenValue: authToken,
    });
    setFieldErrors(validation.fieldErrors);
    setTokenError(validation.tokenError);
    setConsoleError(validation.hasErrors ? "Revisa los campos marcados." : undefined);

    const timestamp = new Date().toLocaleString();
    const latencyMs = Math.floor(180 + Math.random() * 220);
    const statusToUse = validation.hasErrors ? 400 : simulatedStatus;
    const responseMatch =
      activeApi.responses.find((item) => item.code === statusToUse) ??
      activeApi.responses[0];
    const statusCode = responseMatch?.code ?? statusToUse;
    setLastRunMeta({ status: statusCode, latencyMs, timestamp });
    setConsoleResponse(responseMatch?.example ?? activeApi.response);
    if (!validation.hasErrors) {
      setConsoleError(undefined);
      setTokenError(undefined);
      setFieldErrors({});
    }
  };
  const toggleResponse = (code: number) => {
    setExpandAllResponses(false);
    setExpandedResponses((prev) => ({
      ...prev,
      [String(code)]: !prev[String(code)],
    }));
  };

  const handleExpandAll = () => {
    setExpandAllResponses((prev) => {
      const next = !prev;
      if (next) {
        const allExpanded = Object.fromEntries(
          activeApi.responses.map((response) => [
            String(response.code),
            true,
          ])
        );
        setExpandedResponses(allExpanded);
      } else {
        setExpandedResponses({});
      }
      return next;
    });
  };

  useEffect(() => {
    const stored = window.localStorage.getItem("fie-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
      return;
    }
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    const initial = prefersLight ? "light" : "dark";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("fie-theme", next);
  };

  const formattedPayload = useMemo(
    () => buildPayloadJson(activeApi.fields, consoleValues),
    [activeApi.fields, consoleValues]
  );

  const snippetCode = useMemo(
    () =>
      buildCurlSnippet({
        baseUrl: environmentInfo.baseUrl,
        path: activeApi.path,
        method: activeApi.method,
        requiresAuth: activeApi.requiresAuth,
        authToken,
        payloadJson: formattedPayload,
      }),
    [activeApi, authToken, environmentInfo.baseUrl, formattedPayload]
  );

  const handleSolicitudChange = (
    field: keyof typeof emptySolicitud,
    value: string
  ) => {
    setSolicitud((prev) => ({ ...prev, [field]: value }));
  };

  const generatePrintable = () => buildPrintableSolicitud(solicitud);

  const handleSolicitudSubmit = (event: FormEvent) => {
    event.preventDefault();
    const printWindow = window.open("", "_blank", "width=900,height=700");
    if (!printWindow) {
      return;
    }
    printWindow.document.write(generatePrintable());
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const menuContent = (
    <Sidebar
      filteredSections={filteredSections}
      collapsed={collapsed}
      activeApiKey={activeApiKey}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      onToggleSection={toggleSection}
      onApiClick={handleApiClick}
      methodBadgeClass={methodBadgeClass}
      apiDefinitions={apiCatalog.getAll()}
    />
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSolicitud={() => setSolicitudOpen(true)}
        onOpenSidebar={() => setSidebarOpen(true)}
      />

      {sidebarOpen ? (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="relative z-10 flex h-full w-72 flex-col overflow-hidden border-r border-stroke bg-menu p-0">
            <div className="flex items-center justify-between px-4 pb-4 pt-4">
              <p className="text-sm font-semibold">Navegacion</p>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="text-lg text-muted"
              >
                ×
              </button>
            </div>
            {menuContent}
          </aside>
        </div>
      ) : null}

      <div className="mx-auto w-full max-w-none px-4 py-6 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)_380px]">
          <aside className="hidden h-[calc(100vh-120px)] rounded-2xl border border-stroke bg-menu p-0 lg:sticky lg:top-24 lg:overflow-hidden lg:block">
            {menuContent}
          </aside>

          <main className="min-w-0 space-y-6 xl:max-h-[calc(100vh-120px)] xl:overflow-y-auto xl:pr-2">
            <ApiOverview
              activeApi={activeApi}
              methodBadgeClass={methodBadgeClass}
              baseUrl={environmentInfo.baseUrl}
              baseUrlLabel={environmentInfo.label}
            />
            <section className="grid gap-6 xl:grid-cols-1">
              <ApiTables activeApi={activeApi} />
              <ResponsesPanel
                responses={activeApi.responses}
                expandedResponses={expandedResponses}
                expandAllResponses={expandAllResponses}
                onToggleResponse={toggleResponse}
                onToggleExpandAll={handleExpandAll}
              />
            </section>
            <section id="faq" className="rounded-2xl border border-stroke bg-panel-strong p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                FAQ tecnico
              </p>
              <div className="mt-4 space-y-3 text-xs">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-lg border border-stroke bg-panel px-3 py-2"
                  >
                    <p className="text-foreground font-semibold">
                      {faq.question}
                    </p>
                    <p className="text-muted mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>

          <RightPanel
            activeApi={activeApi}
            lastRunMeta={lastRunMeta}
            consoleResponse={consoleResponse}
            snippetLabel="cURL"
            snippetCode={snippetCode}
            supportChannels={supportChannels}
            onOpenConsole={openConsole}
          />
        </div>
      </div>

      <ConsoleModal
        open={consoleOpen}
        activeApi={activeApi}
        consoleValues={consoleValues}
        formattedPayload={formattedPayload}
        lastRunMeta={lastRunMeta}
        consoleResponse={consoleResponse}
        authToken={authToken}
        tokenRequired={Boolean(activeApi.requiresAuth)}
        errorMessage={consoleError}
        tokenError={tokenError}
        fieldErrors={fieldErrors}
        simulatedStatus={simulatedStatus}
        onClose={() => setConsoleOpen(false)}
        onChange={(field, value) => {
          setConsoleValues((prev) => ({ ...prev, [field]: value }));
          setFieldErrors((prev) => {
            if (!prev[field]) {
              return prev;
            }
            const next = { ...prev };
            delete next[field];
            return next;
          });
        }}
        onTokenChange={(value) => {
          setAuthToken(value);
          setTokenError(undefined);
        }}
        onStatusChange={setSimulatedStatus}
        onRun={runSimulation}
      />

      <SolicitudModal
        open={solicitudOpen}
        solicitud={solicitud}
        onClose={() => setSolicitudOpen(false)}
        onChange={handleSolicitudChange}
        onSubmit={handleSolicitudSubmit}
      />

    </div>
  );
}

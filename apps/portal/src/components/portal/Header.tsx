import Image from "next/image";

type HeaderProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
  onOpenSolicitud: () => void;
  onOpenSidebar: () => void;
};

export function Header({
  theme,
  onToggleTheme,
  onOpenSolicitud,
  onOpenSidebar,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-stroke bg-panel/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-none flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-fie.svg"
            alt="Logo Banco FIE"
            width={40}
            height={40}
            className="h-10 w-40 object-contain"
          />
          <div>
            <p className="font-display text-lg">API Studio</p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
          <button
            type="button"
            onClick={onOpenSidebar}
            className="w-full rounded-full border border-stroke bg-panel-strong px-4 py-2 text-sm font-semibold text-foreground sm:hidden"
          >
            Menu
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
            title={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
            className="w-full rounded-full border border-stroke bg-panel-strong px-4 py-2 text-sm font-semibold text-foreground sm:w-auto"
          >
            {theme === "dark" ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mx-auto h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mx-auto h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={onOpenSolicitud}
            className="w-full rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 sm:w-auto"
          >
            Solicitar acceso
          </button>
        </div>
      </div>
    </header>
  );
}

import type { FormEvent } from "react";
import type { SolicitudForm } from "@/types/solicitud";

type SolicitudModalProps = {
  open: boolean;
  solicitud: SolicitudForm;
  onClose: () => void;
  onChange: (field: keyof SolicitudForm, value: string) => void;
  onSubmit: (event: FormEvent) => void;
};

export function SolicitudModal({
  open,
  solicitud,
  onClose,
  onChange,
  onSubmit,
}: SolicitudModalProps) {
  if (!open) {
    return null;
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-stroke/80 bg-panel px-4 py-3 text-sm text-foreground placeholder:text-muted/70 shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
  const groupLabelClass = "text-[11px] font-semibold text-muted";
  const groupInputClass =
    "mt-1 w-full rounded-xl border border-stroke/80 bg-panel px-4 py-3 text-sm text-foreground placeholder:text-muted/70 shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4">
      <div className="max-h-[calc(100vh-3rem)] w-full max-w-xl overflow-y-auto rounded-2xl border border-stroke bg-panel text-foreground sm:max-h-[calc(100vh-5rem)]">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-stroke bg-panel/95 px-5 py-4 backdrop-blur sm:px-6">
          <div>
            <h3 className="font-display text-xl text-foreground">
              Solicitud de acceso
            </h3>
            <p className="mt-1 text-xs text-muted">
              Completa los datos para habilitar tu integracion.
            </p>
          </div>
          <button type="button" onClick={onClose} className="text-xl text-muted">
            ×
          </button>
        </div>
        <form className="space-y-6 px-5 py-4 sm:px-6" onSubmit={onSubmit}>
          <label className="text-xs font-semibold text-muted">
            Solicitado por
            <input
              required
              value={solicitud.solicitadoPor}
              onChange={(event) => onChange("solicitadoPor", event.target.value)}
              className={inputClass}
            />
          </label>
          <label className="text-xs font-semibold text-muted mb-4">
            Nombre de la empresa
            <input
              required
              value={solicitud.nombreEmpresa}
              onChange={(event) => onChange("nombreEmpresa", event.target.value)}
              className={inputClass}
            />
          </label>
          <div className="rounded-xl border border-stroke bg-panel-strong p-4 mt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Contacto empresa
            </p>
            <div className="mt-4 grid gap-4">
              <label className={groupLabelClass}>
                Nombre
                <input
                  required
                  placeholder="Nombre"
                  value={solicitud.contactoNombre}
                  onChange={(event) =>
                    onChange("contactoNombre", event.target.value)
                  }
                  className={groupInputClass}
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={groupLabelClass}>
                  Celular
                  <input
                    required
                    placeholder="Celular"
                    value={solicitud.contactoCelular}
                    onChange={(event) =>
                      onChange("contactoCelular", event.target.value)
                    }
                    className={groupInputClass}
                  />
                </label>
                <label className={groupLabelClass}>
                  Correo
                  <input
                    required
                    type="email"
                    placeholder="correo@empresa.com"
                    value={solicitud.contactoCorreo}
                    onChange={(event) =>
                      onChange("contactoCorreo", event.target.value)
                    }
                    className={groupInputClass}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-stroke bg-panel-strong p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              Contacto tecnico
            </p>
            <div className="mt-4 grid gap-4">
              <label className={groupLabelClass}>
                Nombre
                <input
                  required
                  placeholder="Nombre"
                  value={solicitud.tecnicoNombre}
                  onChange={(event) =>
                    onChange("tecnicoNombre", event.target.value)
                  }
                  className={groupInputClass}
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={groupLabelClass}>
                  Celular
                  <input
                    required
                    placeholder="Celular"
                    value={solicitud.tecnicoCelular}
                    onChange={(event) =>
                      onChange("tecnicoCelular", event.target.value)
                    }
                    className={groupInputClass}
                  />
                </label>
                <label className={groupLabelClass}>
                  Correo
                  <input
                    required
                    type="email"
                    placeholder="correo@empresa.com"
                    value={solicitud.tecnicoCorreo}
                    onChange={(event) =>
                      onChange("tecnicoCorreo", event.target.value)
                    }
                    className={groupInputClass}
                  />
                </label>
              </div>
            </div>
          </div>
          <label className="text-xs font-semibold text-muted">
            Volumen estimado (solicitudes por dia)
            <input
              required
              type="number"
              value={solicitud.volumenSolicitudes}
              onChange={(event) =>
                onChange("volumenSolicitudes", event.target.value)
              }
              className={inputClass}
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white mt-4"
          >
            Generar PDF
          </button>
        </form>
      </div>
    </div>
  );
}

import type { SolicitudForm } from "@/portal/domain/solicitud";

export const buildPrintableSolicitud = (solicitud: SolicitudForm): string => {
  const date = new Date().toLocaleDateString();
  return `
      <html>
        <head>
          <title>Solicitud API Banco FIE</title>
          <style>
            body { font-family: Arial, sans-serif; color: #004F97; padding: 32px; }
            h2 { color: #df1583; margin-bottom: 8px; }
            h3 { background: #f1f1f1; padding: 6px 10px; }
            .row { margin-bottom: 16px; }
            .footer { margin-top: 32px; font-size: 10px; color: #666; }
          </style>
        </head>
        <body>
          <h2>Solicitud de Acceso API - Banco FIE</h2>
          <p><strong>Fecha:</strong> ${date}</p>
          <div class="row">
            <h3>Datos generales</h3>
            <p><strong>Solicitado por:</strong> ${solicitud.solicitadoPor}</p>
            <p><strong>Empresa:</strong> ${solicitud.nombreEmpresa}</p>
          </div>
          <div class="row">
            <h3>Contacto de la empresa</h3>
            <p><strong>Responsable:</strong> ${solicitud.contactoNombre}</p>
            <p><strong>Celular:</strong> ${solicitud.contactoCelular}</p>
            <p><strong>Correo:</strong> ${solicitud.contactoCorreo}</p>
          </div>
          <div class="row">
            <h3>Contacto tecnico</h3>
            <p><strong>Responsable:</strong> ${solicitud.tecnicoNombre}</p>
            <p><strong>Celular:</strong> ${solicitud.tecnicoCelular}</p>
            <p><strong>Correo:</strong> ${solicitud.tecnicoCorreo}</p>
          </div>
          <div class="row">
            <h3>Proyeccion</h3>
            <p><strong>Volumen diario:</strong> ${solicitud.volumenSolicitudes}</p>
          </div>
          <div class="footer">
            Documento generado desde el portal de pruebas API Banco FIE.
          </div>
        </body>
      </html>
    `;
};

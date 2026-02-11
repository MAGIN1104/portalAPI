import type { SupportInfoPort } from "@/portal/application/ports/SupportInfoPort";
import type { FaqItem, SupportChannel } from "@/portal/domain/support";

export const supportChannels: SupportChannel[] = [
  { label: "Mesa de ayuda", value: "soporte@bancofie.bo" },
  { label: "WhatsApp", value: "+591 700 12345", hint: "Lun-Vie 08:00-18:00" },
  { label: "Ticket", value: "portal.bancofie.bo/soporte" },
];

export const faqs: FaqItem[] = [
  {
    question: "Como obtengo credenciales?",
    answer:
      "Completa la solicitud de acceso y el equipo de integraciones te enviara tus credenciales.",
  },
  {
    question: "Cual es el limite de llamadas?",
    answer:
      "En sandbox el limite es flexible; en produccion se define por contrato y SLA.",
  },
  {
    question: "Como reporto un error de API?",
    answer:
      "Abre un ticket con el transactionId y el payload usado para acelerar el analisis.",
  },
];

export const supportInfoPort: SupportInfoPort = {
  getSupportChannels: () => supportChannels,
  getFaqs: () => faqs,
};

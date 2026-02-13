import type { ApiDefinition } from "@/portal/domain/api";

// Cargar desde localStorage si están disponibles (sincronizados por el admin)
const loadFromSync = (): Record<string, ApiDefinition> => {
  if (typeof window === "undefined") return {};
  
  try {
    const raw = window.localStorage.getItem('fie-api-definitions');
    if (raw) {
      return JSON.parse(raw) as Record<string, ApiDefinition>;
    }
  } catch (error) {
    console.warn('Error cargando API definitions sincronizadas:', error);
  }
  
  return {};
};

// Fallback: datos por defecto
export const defaultApiDefinitions: Record<string, ApiDefinition> = {
  auth: {
    title: "Servicio de Autenticacion",
    method: "POST",
    path: "/onboarding/v1.0/noa/login",
    description: "Permite autenticar y obtener tokens.",
    sandbox: "https://sandbox.fiedemo.com.bo",
    headers: [["Content-Type", "application/json"]],
    requiresAuth: false,
    fields: [],
    request: "{}",
    response: "{}",
    responses: [{ code: 200, label: "OK", mediaType: "application/json", example: "{}", schema: "{}" }],
  },
  generateQR: {
    title: "Generar QR",
    method: "POST",
    path: "/qr/v1.0/generate",
    description: "Genera un codigo QR para una solicitud.",
    sandbox: "https://sandbox.fiedemo.com.bo",
    headers: [["Content-Type", "application/json"]],
    requiresAuth: true,
    fields: [],
    request: "{}",
    response: "{}",
    responses: [{ code: 200, label: "OK", mediaType: "application/json", example: "{}", schema: "{}" }],
  },
  stateQR: {
    title: "Estado QR",
    method: "GET",
    path: "/qr/v1.0/state/{qrId}",
    description: "Consulta el estado de un codigo QR.",
    sandbox: "https://sandbox.fiedemo.com.bo",
    headers: [["Content-Type", "application/json"]],
    requiresAuth: true,
    fields: [],
    request: "{}",
    response: "{}",
    responses: [{ code: 200, label: "OK", mediaType: "application/json", example: "{}", schema: "{}" }],
  },
};

const synced = loadFromSync();

export const apiDefinitions: Record<string, ApiDefinition> = Object.keys(synced).length > 0
  ? synced
  : defaultApiDefinitions;

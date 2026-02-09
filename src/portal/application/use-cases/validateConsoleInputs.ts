import type { ApiField } from "@/portal/domain/api";
import { collectLeafFields } from "@/portal/application/use-cases/collectLeafFields";

export type ConsoleValidationResult = {
  fieldErrors: Record<string, string>;
  tokenError?: string;
  hasErrors: boolean;
};

export const validateConsoleInputs = (options: {
  fields: ApiField[];
  values: Record<string, string>;
  requiresAuth?: boolean;
  tokenValue: string;
}): ConsoleValidationResult => {
  const { fields, values, requiresAuth, tokenValue } = options;
  const fieldErrors: Record<string, string> = {};

  collectLeafFields(fields).forEach(({ path, field }) => {
    const value = (values[path] ?? "").trim();
    if (field.required && !value) {
      fieldErrors[path] = "Campo requerido.";
      return;
    }
    if (field.required && value && field.pattern) {
      try {
        const regex = new RegExp(field.pattern);
        if (!regex.test(value)) {
          fieldErrors[path] = field.helper
            ? `Formato invalido. ${field.helper}`
            : "Formato invalido.";
        }
      } catch {
        fieldErrors[path] = "Formato invalido.";
      }
    }
  });

  let tokenError: string | undefined;
  if (requiresAuth) {
    const trimmed = tokenValue.trim();
    if (!/^Bearer\s+\S+$/.test(trimmed)) {
      tokenError = "Token invalido. Usa Bearer <token>.";
    }
  }

  const hasErrors =
    Object.keys(fieldErrors).length > 0 || Boolean(tokenError);
  return { fieldErrors, tokenError, hasErrors };
};

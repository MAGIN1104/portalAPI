import type { ApiField } from "@/portal/domain/api";
import { collectLeafFields } from "@/portal/application/use-cases/collectLeafFields";

const setDeepValue = (
  target: Record<string, unknown>,
  path: string,
  value: string
) => {
  const parts = path.split(".");
  let cursor: Record<string, unknown> = target;
  parts.forEach((part, index) => {
    if (index === parts.length - 1) {
      cursor[part] = value;
      return;
    }
    if (!cursor[part] || typeof cursor[part] !== "object") {
      cursor[part] = {};
    }
    cursor = cursor[part] as Record<string, unknown>;
  });
};

export const buildPayload = (
  fields: ApiField[],
  values: Record<string, string>
): Record<string, unknown> => {
  const payload: Record<string, unknown> = {};
  collectLeafFields(fields).forEach(({ path }) => {
    setDeepValue(payload, path, values[path] ?? "");
  });
  return payload;
};

export const buildPayloadJson = (
  fields: ApiField[],
  values: Record<string, string>
): string => {
  return JSON.stringify(buildPayload(fields, values), null, 2);
};

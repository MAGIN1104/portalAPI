import type { ApiField } from "@/portal/domain/api";

export type LeafField = {
  path: string;
  field: ApiField;
};

export const collectLeafFields = (
  fields: ApiField[],
  parentPath = ""
): LeafField[] => {
  const result: LeafField[] = [];
  fields.forEach((field) => {
    const path = parentPath ? `${parentPath}.${field.name}` : field.name;
    if ((field.type === "object" || field.children?.length) && field.children) {
      result.push(...collectLeafFields(field.children, path));
      return;
    }
    result.push({ path, field });
  });
  return result;
};

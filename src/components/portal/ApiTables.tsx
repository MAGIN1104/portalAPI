import type { ApiDefinition } from "@/types/api";

type ApiTablesProps = {
  activeApi: ApiDefinition;
};

export function ApiTables({ activeApi }: ApiTablesProps) {
  const flattenFields = (
    fields: ApiDefinition["fields"],
    parentPath = ""
  ): { field: ApiDefinition["fields"][number]; path: string }[] => {
    return fields.flatMap((field) => {
      const fieldPath = parentPath ? `${parentPath}.${field.name}` : field.name;
      const isObject = field.type === "object" || Boolean(field.children?.length);
      if (isObject && field.children) {
        return flattenFields(field.children, fieldPath);
      }
      return [{ field, path: fieldPath }];
    });
  };

  const flatFields = flattenFields(activeApi.fields);

  return (
    <div className="min-w-0 space-y-6">
      <div className="rounded-2xl border border-stroke bg-panel p-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Campos de solicitud
        </h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-stroke">
          <table className="min-w-[520px] w-full text-sm">
            <thead className="bg-background text-muted">
              <tr>
                <th className="px-4 py-2 text-left">Campo</th>
                <th className="px-4 py-2 text-left">Tipo</th>
                <th className="px-4 py-2 text-left">Descripcion</th>
                <th className="px-4 py-2 text-left">Formato</th>
              </tr>
            </thead>
            <tbody>
              {flatFields.map(({ field, path }) => (
                <tr key={path} className="border-t border-stroke">
                  <td className="px-4 py-2 font-semibold text-foreground">
                    {path}
                  </td>
                  <td className="px-4 py-2 text-xs text-foreground">
                    {field.type ?? "string"}
                  </td>
                  <td className="px-4 py-2 text-muted">{field.label}</td>
                  <td className="px-4 py-2 text-xs text-muted">
                    {field.helper ?? field.pattern ?? "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-stroke bg-panel p-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Headers
        </h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-stroke">
          <table className="min-w-[520px] w-full text-sm">
            <thead className="bg-background text-muted">
              <tr>
                <th className="px-4 py-2 text-left">Campo</th>
                <th className="px-4 py-2 text-left">Descripcion</th>
              </tr>
            </thead>
            <tbody>
              {activeApi.headers.map(([field, detail]) => (
                <tr key={field} className="border-t border-stroke">
                  <td className="px-4 py-2 font-semibold text-foreground">
                    {field}
                  </td>
                  <td className="px-4 py-2 text-muted">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useMemo, useState } from 'react';
import { defaultMenuSections, type AdminMenuSection } from '@/lib/menu-sections-data';
import { loadMenuSections } from '@/lib/menu-sections-store';

interface ApiField {
  name: string;
  label: string;
  type?: 'string' | 'number' | 'object';
  placeholder?: string;
  required?: boolean;
}

interface ApiResponse {
  code: number;
  label: string;
  mediaType: string;
  example: string;
  schema: string;
}

interface Endpoint {
  id: string;
  title: string;
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  description: string;
  sandbox?: string;
  menuSectionId?: string;
  menuItemId?: string;
  headers: [string, string][];
  fields: ApiField[];
  requiresAuth: boolean;
  request: string;
  response: string;
  responses: ApiResponse[];
  apiId: string;
}

export default function EndpointsPage() {
  const [menuSections, setMenuSections] = useState<AdminMenuSection[]>(defaultMenuSections);
  const initialSectionId = defaultMenuSections[0]?.id ?? '';
  const initialItemId = defaultMenuSections[0]?.items[0]?.id ?? '';
  const [endpoints, setEndpoints] = useState<Endpoint[]>([
    {
      id: '1',
      title: 'Obtener Usuarios',
      path: '/users',
      method: 'GET',
      description: 'Obtener lista de usuarios',
      sandbox: 'https://sandbox.example.com',
      menuSectionId: 'auth',
      menuItemId: 'auth',
      headers: [['Content-Type', 'application/json']],
      fields: [],
      requiresAuth: true,
      request: '{}',
      response: '{ "users": [] }',
      responses: [
        { code: 200, label: 'OK', mediaType: 'application/json', example: '{ "users": [] }', schema: '{ "users": [] }' },
        { code: 401, label: 'Unauthorized', mediaType: 'application/json', example: '{ "error": "Unauthorized" }', schema: '{ "error": "string" }' },
      ],
      apiId: '1',
    },
    {
      id: '2',
      title: 'Crear Usuario',
      path: '/users',
      method: 'POST',
      description: 'Crear nuevo usuario',
      sandbox: 'https://sandbox.example.com',
      menuSectionId: 'qr',
      menuItemId: 'generateQR',
      headers: [['Content-Type', 'application/json']],
      fields: [
        { name: 'name', label: 'Nombre', type: 'string', required: true },
        { name: 'email', label: 'Email', type: 'string', required: true },
      ],
      requiresAuth: true,
      request: '{ "name": "John", "email": "john@example.com" }',
      response: '{ "id": "123", "name": "John", "email": "john@example.com" }',
      responses: [
        { code: 201, label: 'Created', mediaType: 'application/json', example: '{ "id": "123" }', schema: '{ "id": "string" }' },
        { code: 400, label: 'Bad Request', mediaType: 'application/json', example: '{ "error": "Invalid data" }', schema: '{ "error": "string" }' },
      ],
      apiId: '1',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<{
    title: string;
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    description: string;
    sandbox: string;
    menuSectionId: string;
    menuItemId: string;
    requiresAuth: boolean;
    request: string;
    response: string;
    headers: [string, string][];
    fields: ApiField[];
    responses: ApiResponse[];
  }>({
    title: '',
    path: '',
    method: 'GET',
    description: '',
    sandbox: '',
    menuSectionId: initialSectionId,
    menuItemId: initialItemId,
    requiresAuth: true,
    request: '',
    response: '',
    headers: [['Content-Type', 'application/json']],
    fields: [],
    responses: [{ code: 200, label: 'OK', mediaType: 'application/json', example: '', schema: '' }],
  });

  useEffect(() => {
    setMenuSections(loadMenuSections());
  }, []);

  const getDefaultMenuSelection = () => {
    const firstSection = menuSections[0];
    return {
      menuSectionId: firstSection?.id ?? '',
      menuItemId: firstSection?.items[0]?.id ?? '',
    };
  };

  const sectionMap = useMemo(() => {
    return new Map(menuSections.map((section) => [section.id, section]));
  }, [menuSections]);

  const methodColors: Record<string, { bg: string; color: string }> = {
    GET: { bg: 'rgba(99, 164, 255, 0.2)', color: 'var(--primary)' },
    POST: { bg: 'rgba(99, 164, 255, 0.15)', color: 'var(--primary)' },
    PUT: { bg: 'rgba(223, 21, 131, 0.15)', color: 'var(--accent)' },
    DELETE: { bg: 'rgba(223, 21, 131, 0.2)', color: 'var(--accent)' },
    PATCH: { bg: 'rgba(99, 164, 255, 0.1)', color: 'var(--primary)' },
  };

  const handleAdd = () => {
    const { menuSectionId, menuItemId } = getDefaultMenuSelection();
    setEditingId(null);
    setFormData({
      title: '',
      path: '',
      method: 'GET',
      description: '',
      sandbox: '',
      menuSectionId,
      menuItemId,
      requiresAuth: true,
      request: '',
      response: '',
      headers: [['Content-Type', 'application/json']],
      fields: [],
      responses: [{ code: 200, label: 'OK', mediaType: 'application/json', example: '', schema: '' }],
    });
    setShowForm(true);
  };

  const handleEdit = (endpoint: Endpoint) => {
    setEditingId(endpoint.id);
    setFormData({
      title: endpoint.title,
      path: endpoint.path,
      method: endpoint.method,
      description: endpoint.description,
      sandbox: endpoint.sandbox || '',
      menuSectionId: endpoint.menuSectionId || '',
      menuItemId: endpoint.menuItemId || '',
      requiresAuth: endpoint.requiresAuth,
      request: endpoint.request,
      response: endpoint.response,
      headers: endpoint.headers,
      fields: endpoint.fields,
      responses: endpoint.responses,
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este endpoint?')) {
      setEndpoints(endpoints.filter((endpoint) => endpoint.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      setEndpoints(
        endpoints.map((endpoint) =>
          endpoint.id === editingId
            ? {
                ...endpoint,
                title: formData.title,
                path: formData.path,
                method: formData.method,
                description: formData.description,
                sandbox: formData.sandbox,
                menuSectionId: formData.menuSectionId,
                menuItemId: formData.menuItemId,
                requiresAuth: formData.requiresAuth,
                request: formData.request,
                response: formData.response,
                headers: formData.headers,
                fields: formData.fields,
                responses: formData.responses,
              }
            : endpoint
        )
      );
    } else {
      const newEndpoint: Endpoint = {
        id: Date.now().toString(),
        title: formData.title,
        path: formData.path,
        method: formData.method,
        description: formData.description,
        sandbox: formData.sandbox,
        menuSectionId: formData.menuSectionId,
        menuItemId: formData.menuItemId,
        headers: formData.headers,
        fields: formData.fields,
        requiresAuth: formData.requiresAuth,
        request: formData.request,
        response: formData.response,
        responses: formData.responses,
        apiId: '1',
      };
      setEndpoints([...endpoints, newEndpoint]);
    }

    setShowForm(false);
    const { menuSectionId, menuItemId } = getDefaultMenuSelection();
    setFormData({
      title: '',
      path: '',
      method: 'GET',
      description: '',
      sandbox: '',
      menuSectionId,
      menuItemId,
      requiresAuth: true,
      request: '',
      response: '',
      headers: [['Content-Type', 'application/json']],
      fields: [],
      responses: [{ code: 200, label: 'OK', mediaType: 'application/json', example: '', schema: '' }],
    });
  };

  return (
    <div className="space-y-6" style={{ color: 'var(--foreground)' }}>
      <div className="flex justify-between items-center">
        <h1 className="font-display text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
          Gestión de Endpoints
        </h1>
        <button
          onClick={handleAdd}
          className="text-white px-6 py-2 rounded-lg transition"
          style={{ backgroundColor: 'var(--primary)' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          + Nuevo Endpoint
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => setShowForm(false)}
        >
          <div
            className="rounded-lg p-8 w-full max-w-2xl"
            style={{ backgroundColor: 'var(--panel)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4
              className="font-display text-lg font-bold mb-4"
              style={{ color: 'var(--foreground)' }}
            >
              {editingId ? 'Editar Endpoint' : 'Nuevo Endpoint'}
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Grupo (Menu Section)
                  </label>
                  <select
                    value={formData.menuSectionId}
                    onChange={(e) => {
                      const nextSectionId = e.target.value;
                      const nextSection = sectionMap.get(nextSectionId);
                      const nextItemId = nextSection?.items[0]?.id ?? '';
                      setFormData({
                        ...formData,
                        menuSectionId: nextSectionId,
                        menuItemId: nextItemId,
                      });
                    }}
                    className="w-full px-3 py-2 border rounded-lg transition"
                    style={{
                      borderColor: 'var(--stroke)',
                      backgroundColor: 'var(--background)',
                      color: 'var(--foreground)',
                    }}
                  >
                    <option value="">Sin asignar</option>
                    {menuSections.map((section) => (
                      <option key={section.id} value={section.id}>
                        {section.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Item del menu
                  </label>
                  <select
                    value={formData.menuItemId}
                    onChange={(e) =>
                      setFormData({ ...formData, menuItemId: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg transition"
                    style={{
                      borderColor: 'var(--stroke)',
                      backgroundColor: 'var(--background)',
                      color: 'var(--foreground)',
                    }}
                    disabled={!formData.menuSectionId}
                  >
                    <option value="">Sin asignar</option>
                    {(sectionMap.get(formData.menuSectionId)?.items ?? []).map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  Título
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 border rounded-lg transition"
                  style={{
                    borderColor: 'var(--stroke)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--primary)')
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--stroke)')
                  }
                  placeholder="Ej: Obtener usuarios"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  Path
                </label>
                <input
                  type="text"
                  value={formData.path}
                  onChange={(e) =>
                    setFormData({ ...formData, path: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 border rounded-lg transition"
                  style={{
                    borderColor: 'var(--stroke)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--primary)')
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--stroke)')
                  }
                  placeholder="Ej: /users/{id}"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  Método HTTP
                </label>
                <select
                  value={formData.method}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      method: e.target.value as Endpoint['method'],
                    })
                  }
                  className="w-full px-3 py-2 border rounded-lg transition"
                  style={{
                    borderColor: 'var(--stroke)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--primary)')
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--stroke)')
                  }
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                  <option value="PATCH">PATCH</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  Descripción
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  required
                  className="w-full px-3 py-2 border rounded-lg transition"
                  style={{
                    borderColor: 'var(--stroke)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--primary)')
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--stroke)')
                  }
                  placeholder="Descripción del endpoint"
                  rows={2}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  URL Sandbox
                </label>
                <input
                  type="url"
                  value={formData.sandbox}
                  onChange={(e) =>
                    setFormData({ ...formData, sandbox: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg transition"
                  style={{
                    borderColor: 'var(--stroke)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--primary)')
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--stroke)')
                  }
                  placeholder="Ej: https://sandbox.example.com"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  Ejemplo Request
                </label>
                <textarea
                  value={formData.request}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      request: e.target.value,
                    })
                  }
                  required
                  className="w-full px-3 py-2 border rounded-lg transition font-mono text-xs"
                  style={{
                    borderColor: 'var(--stroke)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--primary)')
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--stroke)')
                  }
                  placeholder='{"key": "value"}'
                  rows={3}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  Ejemplo Response
                </label>
                <textarea
                  value={formData.response}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      response: e.target.value,
                    })
                  }
                  required
                  className="w-full px-3 py-2 border rounded-lg transition font-mono text-xs"
                  style={{
                    borderColor: 'var(--stroke)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--primary)')
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = 'var(--stroke)')
                  }
                  placeholder='{"result": "success"}'
                  rows={3}
                />
              </div>

              <div
                className="flex items-center justify-between py-2"
                style={{ borderColor: 'var(--stroke)' }}
              >
                <label
                  className="text-sm font-medium"
                  style={{ color: 'var(--foreground)' }}
                >
                  Requiere Autenticación
                </label>
                <input
                  type="checkbox"
                  checked={formData.requiresAuth}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      requiresAuth: e.target.checked,
                    })
                  }
                  className="w-4 h-4"
                  style={{ accentColor: 'var(--primary)' }}
                />
              </div>

              {/* Headers Section */}
              <div className="border-t pt-4" style={{ borderColor: 'var(--stroke)' }}>
                <h5 className="font-display text-sm font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                  Headers HTTP
                </h5>
                <div className="space-y-2">
                  {formData.headers.map((header, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        type="text"
                        value={header[0]}
                        onChange={(e) => {
                          const newHeaders = [...formData.headers];
                          newHeaders[idx] = [e.target.value, header[1]];
                          setFormData({ ...formData, headers: newHeaders });
                        }}
                        className="flex-1 px-3 py-2 border rounded-lg text-xs transition"
                        style={{
                          borderColor: 'var(--stroke)',
                          backgroundColor: 'var(--background)',
                          color: 'var(--foreground)',
                        }}
                        placeholder="Ej: Content-Type"
                      />
                      <input
                        type="text"
                        value={header[1]}
                        onChange={(e) => {
                          const newHeaders = [...formData.headers];
                          newHeaders[idx] = [header[0], e.target.value];
                          setFormData({ ...formData, headers: newHeaders });
                        }}
                        className="flex-1 px-3 py-2 border rounded-lg text-xs transition"
                        style={{
                          borderColor: 'var(--stroke)',
                          backgroundColor: 'var(--background)',
                          color: 'var(--foreground)',
                        }}
                        placeholder="Ej: application/json"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            headers: formData.headers.filter((_, i) => i !== idx),
                          });
                        }}
                        className="px-3 py-2 rounded-lg transition text-sm"
                        style={{ backgroundColor: 'rgba(223, 21, 131, 0.2)', color: 'var(--accent)' }}
                      >
                        Quitar
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        headers: [...formData.headers, ['', '']],
                      });
                    }}
                    className="w-full px-3 py-2 rounded-lg transition text-sm"
                    style={{ backgroundColor: 'rgba(99, 164, 255, 0.15)', color: 'var(--primary)' }}
                  >
                    + Agregar Header
                  </button>
                </div>
              </div>

              {/* Responses Section */}
              <div className="border-t pt-4" style={{ borderColor: 'var(--stroke)' }}>
                <h5 className="font-display text-sm font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                  Respuestas HTTP
                </h5>
                <div className="space-y-3">
                  {formData.responses.map((resp, idx) => (
                    <div key={idx} className="border rounded-lg p-3" style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--panel-strong)' }}>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <input
                          type="number"
                          value={resp.code}
                          onChange={(e) => {
                            const newResponses = [...formData.responses];
                            newResponses[idx] = { ...resp, code: parseInt(e.target.value) };
                            setFormData({ ...formData, responses: newResponses });
                          }}
                          className="px-3 py-2 border rounded-lg text-xs transition"
                          style={{
                            borderColor: 'var(--stroke)',
                            backgroundColor: 'var(--background)',
                            color: 'var(--foreground)',
                          }}
                          placeholder="200"
                        />
                        <input
                          type="text"
                          value={resp.label}
                          onChange={(e) => {
                            const newResponses = [...formData.responses];
                            newResponses[idx] = { ...resp, label: e.target.value };
                            setFormData({ ...formData, responses: newResponses });
                          }}
                          className="px-3 py-2 border rounded-lg text-xs transition"
                          style={{
                            borderColor: 'var(--stroke)',
                            backgroundColor: 'var(--background)',
                            color: 'var(--foreground)',
                          }}
                          placeholder="OK"
                        />
                      </div>
                      <textarea
                        value={resp.example}
                        onChange={(e) => {
                          const newResponses = [...formData.responses];
                          newResponses[idx] = { ...resp, example: e.target.value };
                          setFormData({ ...formData, responses: newResponses });
                        }}
                        className="w-full px-3 py-2 border rounded-lg text-xs transition font-mono mb-2"
                        style={{
                          borderColor: 'var(--stroke)',
                          backgroundColor: 'var(--background)',
                          color: 'var(--foreground)',
                        }}
                        placeholder="Ejemplo JSON"
                        rows={2}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            responses: formData.responses.filter((_, i) => i !== idx),
                          });
                        }}
                        className="w-full px-3 py-2 rounded-lg transition text-sm"
                        style={{ backgroundColor: 'rgba(223, 21, 131, 0.2)', color: 'var(--accent)' }}
                      >
                        Eliminar Response
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        responses: [...formData.responses, { code: 200, label: '', mediaType: 'application/json', example: '', schema: '' }],
                      });
                    }}
                    className="w-full px-3 py-2 rounded-lg transition text-sm"
                    style={{ backgroundColor: 'rgba(99, 164, 255, 0.15)', color: 'var(--primary)' }}
                  >
                    + Agregar Response
                  </button>
                </div>
              </div>

              {/* Fields Section */}
              <div className="border-t pt-4" style={{ borderColor: 'var(--stroke)' }}>
                <h5 className="font-display text-sm font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                  Parámetros de Entrada
                </h5>
                <div className="space-y-3">
                  {formData.fields.map((field, idx) => (
                    <div key={idx} className="border rounded-lg p-3" style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--panel-strong)' }}>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <input
                          type="text"
                          value={field.name}
                          onChange={(e) => {
                            const newFields = [...formData.fields];
                            newFields[idx] = { ...field, name: e.target.value };
                            setFormData({ ...formData, fields: newFields });
                          }}
                          className="px-3 py-2 border rounded-lg text-xs transition"
                          style={{
                            borderColor: 'var(--stroke)',
                            backgroundColor: 'var(--background)',
                            color: 'var(--foreground)',
                          }}
                          placeholder="Nombre del parámetro"
                        />
                        <select
                          value={field.type || 'string'}
                          onChange={(e) => {
                            const newFields = [...formData.fields];
                            newFields[idx] = { ...field, type: e.target.value as 'string' | 'number' | 'object' };
                            setFormData({ ...formData, fields: newFields });
                          }}
                          className="px-3 py-2 border rounded-lg text-xs transition"
                          style={{
                            borderColor: 'var(--stroke)',
                            backgroundColor: 'var(--background)',
                            color: 'var(--foreground)',
                          }}
                        >
                          <option value="string">string</option>
                          <option value="number">number</option>
                          <option value="object">object</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) => {
                          const newFields = [...formData.fields];
                          newFields[idx] = { ...field, label: e.target.value };
                          setFormData({ ...formData, fields: newFields });
                        }}
                        className="w-full px-3 py-2 border rounded-lg text-xs transition mb-2"
                        style={{
                          borderColor: 'var(--stroke)',
                          backgroundColor: 'var(--background)',
                          color: 'var(--foreground)',
                        }}
                        placeholder="Etiqueta para el formulario"
                      />
                      <div className="flex gap-2 mb-2">
                        <label className="flex items-center gap-2 text-xs" style={{ color: 'var(--foreground)' }}>
                          <input
                            type="checkbox"
                            checked={field.required || false}
                            onChange={(e) => {
                              const newFields = [...formData.fields];
                              newFields[idx] = { ...field, required: e.target.checked };
                              setFormData({ ...formData, fields: newFields });
                            }}
                            style={{ accentColor: 'var(--primary)' }}
                          />
                          Requerido
                        </label>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({
                            ...formData,
                            fields: formData.fields.filter((_, i) => i !== idx),
                          });
                        }}
                        className="w-full px-3 py-2 rounded-lg transition text-sm"
                        style={{ backgroundColor: 'rgba(223, 21, 131, 0.2)', color: 'var(--accent)' }}
                      >
                        Eliminar Campo
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        fields: [...formData.fields, { name: '', label: '', type: 'string', required: false }],
                      });
                    }}
                    className="w-full px-3 py-2 rounded-lg transition text-sm"
                    style={{ backgroundColor: 'rgba(99, 164, 255, 0.15)', color: 'var(--primary)' }}
                  >
                    + Agregar Campo
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-4 sticky bottom-0" style={{ backgroundColor: 'var(--panel)' }}>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-2 rounded-lg transition"
                  style={{
                    backgroundColor: 'var(--panel-strong)',
                    color: 'var(--foreground)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = '1')
                  }
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 text-white py-2 rounded-lg transition"
                  style={{ backgroundColor: 'var(--primary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = '1')
                  }
                >
                  {editingId ? 'Actualizar' : 'Crear'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Endpoints Table */}
      <div
        className="rounded-lg shadow overflow-hidden"
        style={{ backgroundColor: 'var(--panel)' }}
      >
        <table className="w-full">
          <thead
            className="border-b"
            style={{
              backgroundColor: 'var(--panel-strong)',
              borderColor: 'var(--stroke)',
            }}
          >
            <tr>
              <th
                className="px-6 py-3 text-left text-sm font-semibold"
                style={{ color: 'var(--primary)' }}
              >
                Método
              </th>
              <th
                className="px-6 py-3 text-left text-sm font-semibold"
                style={{ color: 'var(--primary)' }}
              >
                Título
              </th>
              <th
                className="px-6 py-3 text-left text-sm font-semibold"
                style={{ color: 'var(--primary)' }}
              >
                Path
              </th>
              <th
                className="px-6 py-3 text-left text-sm font-semibold"
                style={{ color: 'var(--primary)' }}
              >
                Grupo
              </th>
              <th
                className="px-6 py-3 text-left text-sm font-semibold"
                style={{ color: 'var(--primary)' }}
              >
                Sandbox
              </th>
              <th
                className="px-6 py-3 text-left text-sm font-semibold"
                style={{ color: 'var(--primary)' }}
              >
                Auth
              </th>
              <th
                className="px-6 py-3 text-left text-sm font-semibold"
                style={{ color: 'var(--primary)' }}
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map((endpoint) => (
              <tr
                key={endpoint.id}
                className="border-b transition"
                style={{ borderColor: 'var(--stroke)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    'var(--panel-strong)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = 'transparent')
                }
              >
                <td className="px-6 py-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor:
                        methodColors[endpoint.method].bg,
                      color: methodColors[endpoint.method].color,
                    }}
                  >
                    {endpoint.method}
                  </span>
                </td>
                <td
                  className="px-6 py-4 text-sm font-medium"
                  style={{ color: 'var(--foreground)' }}
                >
                  {endpoint.title}
                </td>
                <td
                  className="px-6 py-4 font-mono text-xs"
                  style={{ color: 'var(--muted)' }}
                >
                  {endpoint.path}
                </td>
                <td className="px-6 py-4">
                  <div className="text-xs" style={{ color: 'var(--foreground)' }}>
                    {sectionMap.get(endpoint.menuSectionId || '')?.title || 'Sin grupo'}
                  </div>
                  <div className="text-[10px]" style={{ color: 'var(--muted)' }}>
                    {sectionMap
                      .get(endpoint.menuSectionId || '')
                      ?.items.find((item) => item.id === endpoint.menuItemId)
                      ?.label || '-'}
                  </div>
                </td>
                <td
                  className="px-6 py-4 text-xs"
                  style={{ color: 'var(--muted)' }}
                >
                  {endpoint.sandbox ? endpoint.sandbox.replace('https://', '') : '-'}
                </td>
                <td className="px-6 py-4">
                  {endpoint.requiresAuth ? (
                    <span
                      className="text-xs px-3 py-1 rounded"
                      style={{
                        backgroundColor: 'rgba(223, 21, 131, 0.2)',
                        color: 'var(--accent)',
                      }}
                    >
                      Sí
                    </span>
                  ) : (
                    <span
                      className="text-xs px-3 py-1 rounded"
                      style={{
                        backgroundColor: 'rgba(99, 164, 255, 0.2)',
                        color: 'var(--primary)',
                      }}
                    >
                      No
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 space-x-3">
                  <button
                    onClick={() => handleEdit(endpoint)}
                    className="hover:underline text-sm transition"
                    style={{ color: 'var(--primary)' }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(endpoint.id)}
                    className="hover:underline text-sm transition"
                    style={{ color: 'var(--accent)' }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {endpoints.length === 0 && (
          <div className="p-8 text-center" style={{ color: 'var(--muted)' }}>
            No hay endpoints creados. ¡Crea el primero!
          </div>
        )}
      </div>
    </div>
  );
}

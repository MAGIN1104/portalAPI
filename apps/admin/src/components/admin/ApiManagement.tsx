'use client';

import { useState, useEffect } from 'react';
import { saveApiDefinitionsForPortal, loadApiDefinitionsForPortal } from '@/lib/data-sync-service';
import type { ApiDefinition } from '@/lib/types';

export const ApiManagement: React.FC = () => {
  const [apis, setApis] = useState<Record<string, ApiDefinition>>({});
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<ApiDefinition>({
    title: '',
    method: 'GET',
    path: '',
    description: '',
    sandbox: '',
    headers: [['Content-Type', 'application/json']],
    fields: [],
    requiresAuth: false,
    request: '',
    response: '',
    responses: [],
  });

  // Cargar API definitions al montar
  useEffect(() => {
    const loaded = loadApiDefinitionsForPortal();
    setApis(loaded);
  }, []);

  const handleAdd = () => {
    setEditingId(null);
    setFormData({
      title: '',
      method: 'GET',
      path: '',
      description: '',
      sandbox: '',
      headers: [['Content-Type', 'application/json']],
      fields: [],
      requiresAuth: false,
      request: '',
      response: '',
      responses: [],
    });
    setShowForm(true);
  };

  const handleEdit = (id: string, api: ApiDefinition) => {
    setEditingId(id);
    setFormData(api);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este endpoint?')) {
      const updated = { ...apis };
      delete updated[id];
      setApis(updated);
      saveApiDefinitionsForPortal(updated);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updated = { ...apis };
    
    if (editingId) {
      updated[editingId] = { ...formData, id: editingId };
    } else {
      const newId = Date.now().toString();
      updated[newId] = { ...formData, id: newId };
    }
    
    setApis(updated);
    saveApiDefinitionsForPortal(updated);
    setShowForm(false);
  };

  const methodColors: Record<string, string> = {
    GET: 'rgba(99, 164, 255, 0.2)',
    POST: 'rgba(99, 164, 255, 0.15)',
    PUT: 'rgba(223, 21, 131, 0.15)',
    DELETE: 'rgba(223, 21, 131, 0.2)',
    PATCH: 'rgba(99, 164, 255, 0.1)',
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-display text-xl font-bold" style={{ color: 'var(--foreground)' }}>Endpoints</h3>
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
            className="rounded-lg p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto" 
            style={{ backgroundColor: 'var(--panel)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-display text-lg font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              {editingId ? 'Editar Endpoint' : 'Nuevo Endpoint'}
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                  Título
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-3 py-2 border rounded-lg transition"
                  style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--stroke)')}
                  placeholder="Ej: Login de usuario"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                    Método
                  </label>
                  <select
                    value={formData.method}
                    onChange={(e) => setFormData({ ...formData, method: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg transition"
                    style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                  >
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                    <option>PATCH</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                    Path
                  </label>
                  <input
                    type="text"
                    value={formData.path}
                    onChange={(e) => setFormData({ ...formData, path: e.target.value })}
                    required
                    className="w-full px-3 py-2 border rounded-lg transition"
                    style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--stroke)')}
                    placeholder="/v1/login"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                  Descripción
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  className="w-full px-3 py-2 border rounded-lg transition"
                  style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--stroke)')}
                  placeholder="Descripción del endpoint"
                  rows={2}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                  URL Sandbox
                </label>
                <input
                  type="text"
                  value={formData.sandbox}
                  onChange={(e) => setFormData({ ...formData, sandbox: e.target.value })}
                  required
                  className="w-full px-3 py-2 border rounded-lg transition"
                  style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--stroke)')}
                  placeholder="https://sandbox.example.com"
                />
              </div>

              <div>
                <label className="flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                  <input
                    type="checkbox"
                    checked={formData.requiresAuth}
                    onChange={(e) => setFormData({ ...formData, requiresAuth: e.target.checked })}
                  />
                  <span className="text-sm font-medium">Requiere autenticación</span>
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                    Request (JSON)
                  </label>
                  <textarea
                    value={formData.request}
                    onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg font-mono text-xs transition"
                    style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                    Response (JSON)
                  </label>
                  <textarea
                    value={formData.response}
                    onChange={(e) => setFormData({ ...formData, response: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg font-mono text-xs transition"
                    style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                    rows={4}
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-2 rounded-lg transition"
                  style={{ backgroundColor: 'var(--panel-strong)', color: 'var(--foreground)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 text-white py-2 rounded-lg transition"
                  style={{ backgroundColor: 'var(--primary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {editingId ? 'Actualizar' : 'Crear'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Endpoints List */}
      <div className="space-y-3">
        {Object.entries(apis).length === 0 ? (
          <div className="p-8 text-center rounded-lg" style={{ backgroundColor: 'var(--panel)', color: 'var(--muted)' }}>
            No hay endpoints creados. ¡Crea el primero!
          </div>
        ) : (
          Object.entries(apis).map(([id, api]) => (
            <div 
              key={id}
              className="p-4 rounded-lg border transition"
              style={{ backgroundColor: 'var(--panel)', borderColor: 'var(--stroke)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--panel-strong)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--panel)')}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="px-2 py-1 rounded text-xs font-bold text-white"
                      style={{ backgroundColor: methodColors[api.method] || 'var(--primary)' }}
                    >
                      {api.method}
                    </span>
                    <span className="font-mono text-sm" style={{ color: 'var(--muted)' }}>{api.path}</span>
                  </div>
                  <h4 className="font-medium text-base" style={{ color: 'var(--foreground)' }}>{api.title}</h4>
                  <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{api.description}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(id, api)}
                    className="px-3 py-1 text-sm rounded transition"
                    style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(id)}
                    className="px-3 py-1 text-sm rounded transition"
                    style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

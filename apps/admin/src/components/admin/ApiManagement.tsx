'use client';

import { useState } from 'react';

interface API {
  id: string;
  name: string;
  description: string;
  baseUrl: string;
  version: string;
  status: 'active' | 'inactive' | 'deprecated';
  createdAt: string;
}

export const ApiManagement: React.FC = () => {
  const [apis, setApis] = useState<API[]>([
    {
      id: '1',
      name: 'Auth API',
      description: 'Autenticación y autorización',
      baseUrl: '/api/v1/auth',
      version: '1.0',
      status: 'active',
      createdAt: '2024-01-15',
    },
    {
      id: '2',
      name: 'Users API',
      description: 'Gestión de usuarios',
      baseUrl: '/api/v1/users',
      version: '1.0',
      status: 'active',
      createdAt: '2024-01-10',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    baseUrl: '',
    version: '1.0',
  });

  const handleAdd = () => {
    setEditingId(null);
    setFormData({ name: '', description: '', baseUrl: '', version: '1.0' });
    setShowForm(true);
  };

  const handleEdit = (api: API) => {
    setEditingId(api.id);
    setFormData({
      name: api.name,
      description: api.description,
      baseUrl: api.baseUrl,
      version: api.version,
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro?')) {
      setApis(apis.filter((api) => api.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      setApis(
        apis.map((api) =>
          api.id === editingId
            ? { ...api, ...formData }
            : api
        )
      );
    } else {
      const newApi: API = {
        id: Date.now().toString(),
        ...formData,
        status: 'inactive',
        createdAt: new Date().toISOString().split('T')[0],
      };
      setApis([...apis, newApi]);
    }
    
    setShowForm(false);
    setFormData({ name: '', description: '', baseUrl: '', version: '1.0' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-display text-xl font-bold" style={{ color: 'var(--foreground)' }}>APIs Disponibles</h3>
        <button
          onClick={handleAdd}
          className="text-white px-6 py-2 rounded-lg transition"
          style={{ backgroundColor: 'var(--primary)' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          + Nueva API
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
            className="rounded-lg p-8 w-full max-w-md" 
            style={{ backgroundColor: 'var(--panel)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-display text-lg font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              {editingId ? 'Editar API' : 'Nueva API'}
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                  Nombre
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 border rounded-lg transition"
                  style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--stroke)')}
                  placeholder="Ej: Payments API"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                  Descripción
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 border rounded-lg transition"
                  style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--stroke)')}
                  placeholder="Descripción de la API"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                  Base URL
                </label>
                <input
                  type="text"
                  value={formData.baseUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, baseUrl: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 border rounded-lg transition"
                  style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--stroke)')}
                  placeholder="Ej: /api/v1/payments"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                  Versión
                </label>
                <input
                  type="text"
                  value={formData.version}
                  onChange={(e) =>
                    setFormData({ ...formData, version: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg transition"
                  style={{ borderColor: 'var(--stroke)', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--stroke)')}
                  placeholder="Ej: 1.0"
                />
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

      {/* APIs Table */}
      <div className="rounded-lg shadow overflow-hidden" style={{ backgroundColor: 'var(--panel)' }}>
        <table className="w-full">
          <thead className="border-b" style={{ backgroundColor: 'var(--panel-strong)', borderColor: 'var(--stroke)' }}>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                Descripción
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                Base URL
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                Estado
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold" style={{ color: 'var(--foreground)' }}>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {apis.map((api) => (
              <tr key={api.id} className="border-b transition" style={{ borderColor: 'var(--stroke)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--panel-strong)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>

                <td className="px-6 py-4 font-medium" style={{ color: 'var(--foreground)' }}>{api.name}</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--muted)' }}>{api.description}</td>
                <td className="px-6 py-4 text-sm font-mono" style={{ color: 'var(--muted)' }}>{api.baseUrl}</td>
                <td className="px-6 py-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: api.status === 'active' 
                        ? 'rgba(99, 164, 255, 0.2)'
                        : api.status === 'deprecated'
                          ? 'rgba(223, 21, 131, 0.2)'
                          : 'var(--panel-strong)',
                      color: api.status === 'active'
                        ? 'var(--primary)'
                        : api.status === 'deprecated'
                          ? 'var(--accent)'
                          : 'var(--muted)'
                    }}
                  >
                    {api.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-3">
                  <button
                    onClick={() => handleEdit(api)}
                    className="hover:underline text-sm transition"
                    style={{ color: 'var(--primary)' }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(api.id)}
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

        {apis.length === 0 && (
          <div className="p-8 text-center" style={{ color: 'var(--muted)' }}>
            No hay APIs creadas. ¡Crea la primera!
          </div>
        )}
      </div>
    </div>
  );
};

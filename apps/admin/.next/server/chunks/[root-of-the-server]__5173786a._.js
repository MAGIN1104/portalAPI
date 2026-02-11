module.exports = [
"[project]/apps/admin/.next-internal/server/app/api/config/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/apps/admin/src/lib/endpoints-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Endpoints Data - Datos maestros de endpoints disponibles
 * Estos datos serán servidos al portal dinámicamente
 */ __turbopack_context__.s([
    "apiEndpointsData",
    ()=>apiEndpointsData,
    "getAllEndpoints",
    ()=>getAllEndpoints,
    "getAvailableCategories",
    ()=>getAvailableCategories,
    "getEndpointById",
    ()=>getEndpointById,
    "getEndpointsByCategory",
    ()=>getEndpointsByCategory
]);
const apiEndpointsData = {
    auth_login: {
        id: 'auth_login',
        title: 'Servicio de Autenticacion',
        method: 'POST',
        path: '/onboarding/v1.0/noa/login',
        category: 'auth',
        description: 'Permite autenticar a una empresa y obtener tokens necesarios para consumir servicios B2B.',
        sandbox: 'https://sandbox.fiedemo.com.bo',
        production: 'https://api.fiedemo.com.bo',
        headers: [
            [
                'Content-Type',
                'application/json'
            ]
        ],
        requiresAuth: false,
        fields: [
            {
                name: 'loginName',
                label: 'Usuario de la empresa',
                type: 'string',
                required: true,
                placeholder: 'empresa_user'
            },
            {
                name: 'password',
                label: 'Contraseña',
                type: 'string',
                required: true,
                placeholder: 'Abc#1234'
            },
            {
                name: 'idDevice',
                label: 'Identificador del dispositivo origen',
                type: 'string',
                required: true,
                placeholder: 'f5756dcc-906f-450f-83e7-816c302948f7'
            },
            {
                name: 'idBusiness',
                label: 'Identificador único de la empresa',
                type: 'string',
                required: true,
                placeholder: 'f5756dcc-906f-450f-83e7-816c302948f7'
            }
        ],
        request: `{
  "loginName": "usuarioEmpresa",
  "password": "Abc#1234",
  "idDevice": "f5756dcc-906f-450f-83e7-816c302948f7",
  "idBusiness": "f5756dcc-906f-450f-83e7-816c302948f7"
}`,
        response: `{
  "transactionId": "3d69cc42-25ae-4dad-8da1-6bfceb9a4c67",
  "result": {
    "authInfo": {
      "session": "d2da033a-cf9c-4ca3-b667-f71ebca04f49",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    }
  },
  "code": "000",
  "message": "OK"
}`,
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z'
    }
};
function getAllEndpoints() {
    return Object.values(apiEndpointsData);
}
function getEndpointById(id) {
    return apiEndpointsData[id];
}
function getEndpointsByCategory(category) {
    return Object.values(apiEndpointsData).filter((endpoint)=>endpoint.category === category);
}
function getAvailableCategories() {
    const categories = new Set(Object.values(apiEndpointsData).map((ep)=>ep.category));
    return Array.from(categories).sort();
}
}),
"[project]/apps/admin/src/lib/auth-types-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Authentication Types Data
 * Define los tipos de autenticación disponibles y sus características
 */ __turbopack_context__.s([
    "authGroupsData",
    ()=>authGroupsData,
    "authTypesData",
    ()=>authTypesData,
    "getActiveAuthGroups",
    ()=>getActiveAuthGroups,
    "getActiveAuthTypes",
    ()=>getActiveAuthTypes,
    "getAllAuthGroups",
    ()=>getAllAuthGroups,
    "getAllAuthTypes",
    ()=>getAllAuthTypes,
    "getAuthGroupByEndpoint",
    ()=>getAuthGroupByEndpoint,
    "getAuthGroupById",
    ()=>getAuthGroupById,
    "getAuthTypeById",
    ()=>getAuthTypeById,
    "getAuthTypesForGroup",
    ()=>getAuthTypesForGroup
]);
const authTypesData = {
    basic: {
        id: 'basic',
        name: 'Autenticación Básica',
        description: 'Usuario y contraseña estándar',
        icon: 'lock',
        requiredFields: [
            'loginName',
            'password'
        ],
        category: 'static',
        isActive: true,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
    },
    qr: {
        id: 'qr',
        name: 'QR Authentication',
        description: 'Autenticación mediante código QR',
        icon: 'qr-code',
        requiredFields: [
            'qrCode'
        ],
        category: 'dynamic',
        isActive: true,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
    },
    device: {
        id: 'device',
        name: 'Autenticación por Dispositivo',
        description: 'Validación mediante ID de dispositivo',
        icon: 'smartphone',
        requiredFields: [
            'idDevice',
            'idBusiness'
        ],
        category: 'static',
        isActive: true,
        createdAt: '2024-01-15T00:00:00Z',
        updatedAt: '2024-01-15T00:00:00Z'
    },
    cert: {
        id: 'cert',
        name: 'Autenticación Certificada',
        description: 'Autenticación con certificado digital',
        icon: 'certificate',
        requiredFields: [
            'certificate',
            'certificatePassword'
        ],
        category: 'custom',
        isActive: false,
        createdAt: '2024-01-20T00:00:00Z',
        updatedAt: '2024-01-20T00:00:00Z'
    },
    oauth: {
        id: 'oauth',
        name: 'OAuth 2.0',
        description: 'Autenticación mediante OAuth 2.0',
        icon: 'globe',
        requiredFields: [
            'clientId',
            'clientSecret'
        ],
        category: 'oauth',
        isActive: false,
        createdAt: '2024-02-01T00:00:00Z',
        updatedAt: '2024-02-01T00:00:00Z'
    }
};
const authGroupsData = {
    noa_login: {
        id: 'noa_login',
        name: 'Grupo NOA Login',
        description: 'Grupo de autenticación para servicios NOA',
        authTypes: [
            'basic',
            'device'
        ],
        endpoint: 'auth_login',
        metadata: {
            priority: 1,
            version: '1.0'
        }
    },
    qr_auth_group: {
        id: 'qr_auth_group',
        name: 'Grupo QR Authentication',
        description: 'Grupo de autenticación mediante QR',
        authTypes: [
            'qr'
        ],
        metadata: {
            priority: 2,
            version: '1.0'
        }
    },
    advanced_auth: {
        id: 'advanced_auth',
        name: 'Grupo Autenticación Avanzada',
        description: 'Grupo para autenticaciones avanzadas y certificadas',
        authTypes: [
            'cert',
            'oauth'
        ],
        metadata: {
            priority: 3,
            version: '2.0',
            experimental: true
        }
    }
};
function getAllAuthTypes() {
    return Object.values(authTypesData);
}
function getActiveAuthTypes() {
    return Object.values(authTypesData).filter((authType)=>authType.isActive);
}
function getAuthTypeById(id) {
    return authTypesData[id];
}
function getAllAuthGroups() {
    return Object.values(authGroupsData);
}
function getAuthGroupById(id) {
    return authGroupsData[id];
}
function getAuthGroupByEndpoint(endpointId) {
    return Object.values(authGroupsData).find((group)=>group.endpoint === endpointId);
}
function getAuthTypesForGroup(groupId) {
    const group = getAuthGroupById(groupId);
    if (!group) return [];
    return group.authTypes.map((typeId)=>getAuthTypeById(typeId)).filter((type)=>type !== undefined);
}
function getActiveAuthGroups() {
    return Object.values(authGroupsData).filter((group)=>{
        const activeTypes = group.authTypes.filter((typeId)=>getAuthTypeById(typeId)?.isActive);
        return activeTypes.length > 0;
    });
}
}),
"[project]/apps/admin/src/app/api/config/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Route - GET /api/config
 * Retorna la configuración general: endpoints, tipos de auth, grupos, etc.
 * Útil para obtener toda la información en una sola llamada
 */ __turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$endpoints$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/admin/src/lib/endpoints-data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$auth$2d$types$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/admin/src/lib/auth-types-data.ts [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const slim = searchParams.get('slim') === 'true';
        const endpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$endpoints$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllEndpoints"])();
        const authTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$auth$2d$types$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllAuthTypes"])();
        const authGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$auth$2d$types$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllAuthGroups"])();
        const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$endpoints$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAvailableCategories"])();
        // Respuesta completa
        const fullConfig = {
            endpoints: {
                data: endpoints,
                count: endpoints.length,
                categories
            },
            authTypes: {
                data: authTypes,
                count: authTypes.length,
                active: authTypes.filter((t)=>t.isActive).length
            },
            authGroups: {
                data: authGroups,
                count: authGroups.length
            },
            version: '1.0.0',
            lastUpdated: new Date().toISOString()
        };
        // Respuesta simplificada
        if (slim) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                endpoints: endpoints.map((e)=>({
                        id: e.id,
                        title: e.title,
                        category: e.category
                    })),
                authTypes: authTypes.map((t)=>({
                        id: t.id,
                        name: t.name,
                        isActive: t.isActive
                    })),
                categories
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(fullConfig);
    } catch (error) {
        console.error('Error fetching config:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Error al obtener configuración'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5173786a._.js.map
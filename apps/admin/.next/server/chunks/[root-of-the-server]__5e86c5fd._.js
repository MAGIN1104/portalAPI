module.exports = [
"[project]/apps/admin/.next-internal/server/app/api/endpoints/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/apps/admin/src/app/api/endpoints/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Route - GET /api/endpoints
 * Retorna la lista de endpoints disponibles
 * Puede filtrar por categoría mediante query param: ?category=auth
 */ __turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$endpoints$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/admin/src/lib/endpoints-data.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const category = searchParams.get('category');
        const id = searchParams.get('id');
        // Si pide un endpoint específico
        if (id) {
            const endpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$endpoints$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEndpointById"])(id);
            if (!endpoint) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Endpoint no encontrado'
                }, {
                    status: 404
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                data: endpoint
            });
        }
        // Si pide por categoría
        if (category) {
            const endpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$endpoints$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEndpointsByCategory"])(category);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                data: endpoints
            });
        }
        // Retornar todos
        const allEndpoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$endpoints$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllEndpoints"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data: allEndpoints
        });
    } catch (error) {
        console.error('Error fetching endpoints:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Error al obtener endpoints'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5e86c5fd._.js.map
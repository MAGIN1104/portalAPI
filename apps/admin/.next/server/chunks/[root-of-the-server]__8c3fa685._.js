module.exports = [
"[project]/apps/admin/.next-internal/server/app/api/auth-types/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/apps/admin/src/app/api/auth-types/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Route - GET /api/auth-types
 * Retorna los tipos de autenticación disponibles
 * Puede filtrar por estado: ?active=true
 */ __turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$auth$2d$types$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/admin/src/lib/auth-types-data.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const active = searchParams.get('active');
        const id = searchParams.get('id');
        // Si pide un tipo específico
        if (id) {
            const authType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$auth$2d$types$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthTypeById"])(id);
            if (!authType) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Tipo de autenticación no encontrado'
                }, {
                    status: 404
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                data: authType
            });
        }
        // Si pide solo activos
        if (active === 'true') {
            const activeTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$auth$2d$types$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getActiveAuthTypes"])();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                data: activeTypes
            });
        }
        // Retornar todos
        const allTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$auth$2d$types$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllAuthTypes"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data: allTypes
        });
    } catch (error) {
        console.error('Error fetching auth types:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Error al obtener tipos de autenticación'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8c3fa685._.js.map
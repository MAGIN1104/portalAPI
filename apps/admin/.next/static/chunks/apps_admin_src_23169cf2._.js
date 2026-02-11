(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/admin/src/lib/menu-sections-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultMenuSections",
    ()=>defaultMenuSections
]);
const defaultMenuSections = [
    {
        id: "auth",
        title: "Autenticacion",
        items: [
            {
                id: "auth",
                label: "Login",
                enabled: true
            },
            {
                id: "refresh",
                label: "Refresh Token",
                enabled: false
            }
        ]
    },
    {
        id: "qr",
        title: "Gestion QR",
        items: [
            {
                id: "generateQR",
                label: "Generar QR",
                enabled: true
            },
            {
                id: "stateQR",
                label: "Estado QR",
                enabled: true
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/admin/src/lib/menu-sections-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadMenuSections",
    ()=>loadMenuSections,
    "saveMenuSections",
    ()=>saveMenuSections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/admin/src/lib/menu-sections-data.ts [app-client] (ecmascript)");
;
const STORAGE_KEY = "fie-admin-menu-sections";
const loadMenuSections = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultMenuSections"];
    }
    try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultMenuSections"];
        }
        return parsed;
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultMenuSections"];
    }
};
const saveMenuSections = (sections)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sections));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/admin/src/app/admin/endpoints/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EndpointsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/admin/src/lib/menu-sections-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/admin/src/lib/menu-sections-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function EndpointsPage() {
    var _defaultMenuSections_, _defaultMenuSections__items_, _defaultMenuSections_1, _sectionMap_get;
    _s();
    const [menuSections, setMenuSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultMenuSections"]);
    var _defaultMenuSections__id;
    const initialSectionId = (_defaultMenuSections__id = (_defaultMenuSections_ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultMenuSections"][0]) === null || _defaultMenuSections_ === void 0 ? void 0 : _defaultMenuSections_.id) !== null && _defaultMenuSections__id !== void 0 ? _defaultMenuSections__id : '';
    var _defaultMenuSections__items__id;
    const initialItemId = (_defaultMenuSections__items__id = (_defaultMenuSections_1 = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultMenuSections"][0]) === null || _defaultMenuSections_1 === void 0 ? void 0 : (_defaultMenuSections__items_ = _defaultMenuSections_1.items[0]) === null || _defaultMenuSections__items_ === void 0 ? void 0 : _defaultMenuSections__items_.id) !== null && _defaultMenuSections__items__id !== void 0 ? _defaultMenuSections__items__id : '';
    const [endpoints, setEndpoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            title: 'Obtener Usuarios',
            path: '/users',
            method: 'GET',
            description: 'Obtener lista de usuarios',
            sandbox: 'https://sandbox.example.com',
            menuSectionId: 'auth',
            menuItemId: 'auth',
            headers: [
                [
                    'Content-Type',
                    'application/json'
                ]
            ],
            fields: [],
            requiresAuth: true,
            request: '{}',
            response: '{ "users": [] }',
            responses: [
                {
                    code: 200,
                    label: 'OK',
                    mediaType: 'application/json',
                    example: '{ "users": [] }',
                    schema: '{ "users": [] }'
                },
                {
                    code: 401,
                    label: 'Unauthorized',
                    mediaType: 'application/json',
                    example: '{ "error": "Unauthorized" }',
                    schema: '{ "error": "string" }'
                }
            ],
            apiId: '1'
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
            headers: [
                [
                    'Content-Type',
                    'application/json'
                ]
            ],
            fields: [
                {
                    name: 'name',
                    label: 'Nombre',
                    type: 'string',
                    required: true
                },
                {
                    name: 'email',
                    label: 'Email',
                    type: 'string',
                    required: true
                }
            ],
            requiresAuth: true,
            request: '{ "name": "John", "email": "john@example.com" }',
            response: '{ "id": "123", "name": "John", "email": "john@example.com" }',
            responses: [
                {
                    code: 201,
                    label: 'Created',
                    mediaType: 'application/json',
                    example: '{ "id": "123" }',
                    schema: '{ "id": "string" }'
                },
                {
                    code: 400,
                    label: 'Bad Request',
                    mediaType: 'application/json',
                    example: '{ "error": "Invalid data" }',
                    schema: '{ "error": "string" }'
                }
            ],
            apiId: '1'
        }
    ]);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
        headers: [
            [
                'Content-Type',
                'application/json'
            ]
        ],
        fields: [],
        responses: [
            {
                code: 200,
                label: 'OK',
                mediaType: 'application/json',
                example: '',
                schema: ''
            }
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EndpointsPage.useEffect": ()=>{
            setMenuSections((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadMenuSections"])());
        }
    }["EndpointsPage.useEffect"], []);
    const getDefaultMenuSelection = ()=>{
        var _firstSection_items_;
        const firstSection = menuSections[0];
        var _firstSection_id, _firstSection_items__id;
        return {
            menuSectionId: (_firstSection_id = firstSection === null || firstSection === void 0 ? void 0 : firstSection.id) !== null && _firstSection_id !== void 0 ? _firstSection_id : '',
            menuItemId: (_firstSection_items__id = firstSection === null || firstSection === void 0 ? void 0 : (_firstSection_items_ = firstSection.items[0]) === null || _firstSection_items_ === void 0 ? void 0 : _firstSection_items_.id) !== null && _firstSection_items__id !== void 0 ? _firstSection_items__id : ''
        };
    };
    const sectionMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EndpointsPage.useMemo[sectionMap]": ()=>{
            return new Map(menuSections.map({
                "EndpointsPage.useMemo[sectionMap]": (section)=>[
                        section.id,
                        section
                    ]
            }["EndpointsPage.useMemo[sectionMap]"]));
        }
    }["EndpointsPage.useMemo[sectionMap]"], [
        menuSections
    ]);
    const methodColors = {
        GET: {
            bg: 'rgba(99, 164, 255, 0.2)',
            color: 'var(--primary)'
        },
        POST: {
            bg: 'rgba(99, 164, 255, 0.15)',
            color: 'var(--primary)'
        },
        PUT: {
            bg: 'rgba(223, 21, 131, 0.15)',
            color: 'var(--accent)'
        },
        DELETE: {
            bg: 'rgba(223, 21, 131, 0.2)',
            color: 'var(--accent)'
        },
        PATCH: {
            bg: 'rgba(99, 164, 255, 0.1)',
            color: 'var(--primary)'
        }
    };
    const handleAdd = ()=>{
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
            headers: [
                [
                    'Content-Type',
                    'application/json'
                ]
            ],
            fields: [],
            responses: [
                {
                    code: 200,
                    label: 'OK',
                    mediaType: 'application/json',
                    example: '',
                    schema: ''
                }
            ]
        });
        setShowForm(true);
    };
    const handleEdit = (endpoint)=>{
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
            responses: endpoint.responses
        });
        setShowForm(true);
    };
    const handleDelete = (id)=>{
        if (window.confirm('¿Estás seguro de que quieres eliminar este endpoint?')) {
            setEndpoints(endpoints.filter((endpoint)=>endpoint.id !== id));
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (editingId) {
            setEndpoints(endpoints.map((endpoint)=>endpoint.id === editingId ? {
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
                    responses: formData.responses
                } : endpoint));
        } else {
            const newEndpoint = {
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
                apiId: '1'
            };
            setEndpoints([
                ...endpoints,
                newEndpoint
            ]);
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
            headers: [
                [
                    'Content-Type',
                    'application/json'
                ]
            ],
            fields: [],
            responses: [
                {
                    code: 200,
                    label: 'OK',
                    mediaType: 'application/json',
                    example: '',
                    schema: ''
                }
            ]
        });
    };
    var _sectionMap_get_items;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        style: {
            color: 'var(--foreground)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-2xl font-bold",
                        style: {
                            color: 'var(--foreground)'
                        },
                        children: "Gestión de Endpoints"
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAdd,
                        className: "text-white px-6 py-2 rounded-lg transition",
                        style: {
                            backgroundColor: 'var(--primary)'
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.opacity = '0.9',
                        onMouseLeave: (e)=>e.currentTarget.style.opacity = '1',
                        children: "+ Nuevo Endpoint"
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center z-50",
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                onClick: ()=>setShowForm(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg p-8 w-full max-w-2xl",
                    style: {
                        backgroundColor: 'var(--panel)'
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-display text-lg font-bold mb-4",
                            style: {
                                color: 'var(--foreground)'
                            },
                            children: editingId ? 'Editar Endpoint' : 'Nuevo Endpoint'
                        }, void 0, false, {
                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                            lineNumber: 289,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4 max-h-[70vh] overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-4 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    style: {
                                                        color: 'var(--foreground)'
                                                    },
                                                    children: "Grupo (Menu Section)"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formData.menuSectionId,
                                                    onChange: (e)=>{
                                                        var _nextSection_items_;
                                                        const nextSectionId = e.target.value;
                                                        const nextSection = sectionMap.get(nextSectionId);
                                                        var _nextSection_items__id;
                                                        const nextItemId = (_nextSection_items__id = nextSection === null || nextSection === void 0 ? void 0 : (_nextSection_items_ = nextSection.items[0]) === null || _nextSection_items_ === void 0 ? void 0 : _nextSection_items_.id) !== null && _nextSection_items__id !== void 0 ? _nextSection_items__id : '';
                                                        setFormData({
                                                            ...formData,
                                                            menuSectionId: nextSectionId,
                                                            menuItemId: nextItemId
                                                        });
                                                    },
                                                    className: "w-full px-3 py-2 border rounded-lg transition",
                                                    style: {
                                                        borderColor: 'var(--stroke)',
                                                        backgroundColor: 'var(--background)',
                                                        color: 'var(--foreground)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Sin asignar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 21
                                                        }, this),
                                                        menuSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: section.id,
                                                                children: section.title
                                                            }, section.id, false, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium mb-1",
                                                    style: {
                                                        color: 'var(--foreground)'
                                                    },
                                                    children: "Item del menu"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formData.menuItemId,
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            menuItemId: e.target.value
                                                        }),
                                                    className: "w-full px-3 py-2 border rounded-lg transition",
                                                    style: {
                                                        borderColor: 'var(--stroke)',
                                                        backgroundColor: 'var(--background)',
                                                        color: 'var(--foreground)'
                                                    },
                                                    disabled: !formData.menuSectionId,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Sin asignar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 21
                                                        }, this),
                                                        ((_sectionMap_get_items = (_sectionMap_get = sectionMap.get(formData.menuSectionId)) === null || _sectionMap_get === void 0 ? void 0 : _sectionMap_get.items) !== null && _sectionMap_get_items !== void 0 ? _sectionMap_get_items : []).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: item.id,
                                                                children: item.label
                                                            }, item.id, false, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Título"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.title,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    title: e.target.value
                                                }),
                                            required: true,
                                            className: "w-full px-3 py-2 border rounded-lg transition",
                                            style: {
                                                borderColor: 'var(--stroke)',
                                                backgroundColor: 'var(--background)',
                                                color: 'var(--foreground)'
                                            },
                                            onFocus: (e)=>e.currentTarget.style.borderColor = 'var(--primary)',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'var(--stroke)',
                                            placeholder: "Ej: Obtener usuarios"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Path"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.path,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    path: e.target.value
                                                }),
                                            required: true,
                                            className: "w-full px-3 py-2 border rounded-lg transition",
                                            style: {
                                                borderColor: 'var(--stroke)',
                                                backgroundColor: 'var(--background)',
                                                color: 'var(--foreground)'
                                            },
                                            onFocus: (e)=>e.currentTarget.style.borderColor = 'var(--primary)',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'var(--stroke)',
                                            placeholder: "Ej: /users/{id}"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 399,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Método HTTP"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.method,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    method: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border rounded-lg transition",
                                            style: {
                                                borderColor: 'var(--stroke)',
                                                backgroundColor: 'var(--background)',
                                                color: 'var(--foreground)'
                                            },
                                            onFocus: (e)=>e.currentTarget.style.borderColor = 'var(--primary)',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'var(--stroke)',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "GET",
                                                    children: "GET"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "POST",
                                                    children: "POST"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "PUT",
                                                    children: "PUT"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "DELETE",
                                                    children: "DELETE"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "PATCH",
                                                    children: "PATCH"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 422,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Descripción"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: formData.description,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    description: e.target.value
                                                }),
                                            required: true,
                                            className: "w-full px-3 py-2 border rounded-lg transition",
                                            style: {
                                                borderColor: 'var(--stroke)',
                                                backgroundColor: 'var(--background)',
                                                color: 'var(--foreground)'
                                            },
                                            onFocus: (e)=>e.currentTarget.style.borderColor = 'var(--primary)',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'var(--stroke)',
                                            placeholder: "Descripción del endpoint",
                                            rows: 2
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "URL Sandbox"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 492,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: formData.sandbox,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    sandbox: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border rounded-lg transition",
                                            style: {
                                                borderColor: 'var(--stroke)',
                                                backgroundColor: 'var(--background)',
                                                color: 'var(--foreground)'
                                            },
                                            onFocus: (e)=>e.currentTarget.style.borderColor = 'var(--primary)',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'var(--stroke)',
                                            placeholder: "Ej: https://sandbox.example.com"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 498,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 491,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Ejemplo Request"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 521,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: formData.request,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    request: e.target.value
                                                }),
                                            required: true,
                                            className: "w-full px-3 py-2 border rounded-lg transition font-mono text-xs",
                                            style: {
                                                borderColor: 'var(--stroke)',
                                                backgroundColor: 'var(--background)',
                                                color: 'var(--foreground)'
                                            },
                                            onFocus: (e)=>e.currentTarget.style.borderColor = 'var(--primary)',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'var(--stroke)',
                                            placeholder: '{"key": "value"}',
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Ejemplo Response"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 554,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: formData.response,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    response: e.target.value
                                                }),
                                            required: true,
                                            className: "w-full px-3 py-2 border rounded-lg transition font-mono text-xs",
                                            style: {
                                                borderColor: 'var(--stroke)',
                                                backgroundColor: 'var(--background)',
                                                color: 'var(--foreground)'
                                            },
                                            onFocus: (e)=>e.currentTarget.style.borderColor = 'var(--primary)',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'var(--stroke)',
                                            placeholder: '{"result": "success"}',
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 560,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 553,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between py-2",
                                    style: {
                                        borderColor: 'var(--stroke)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Requiere Autenticación"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 590,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: formData.requiresAuth,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    requiresAuth: e.target.checked
                                                }),
                                            className: "w-4 h-4",
                                            style: {
                                                accentColor: 'var(--primary)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 596,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 586,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t pt-4",
                                    style: {
                                        borderColor: 'var(--stroke)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "font-display text-sm font-semibold mb-3",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Headers HTTP"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 612,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                formData.headers.map((header, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: header[0],
                                                                onChange: (e)=>{
                                                                    const newHeaders = [
                                                                        ...formData.headers
                                                                    ];
                                                                    newHeaders[idx] = [
                                                                        e.target.value,
                                                                        header[1]
                                                                    ];
                                                                    setFormData({
                                                                        ...formData,
                                                                        headers: newHeaders
                                                                    });
                                                                },
                                                                className: "flex-1 px-3 py-2 border rounded-lg text-xs transition",
                                                                style: {
                                                                    borderColor: 'var(--stroke)',
                                                                    backgroundColor: 'var(--background)',
                                                                    color: 'var(--foreground)'
                                                                },
                                                                placeholder: "Ej: Content-Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 618,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: header[1],
                                                                onChange: (e)=>{
                                                                    const newHeaders = [
                                                                        ...formData.headers
                                                                    ];
                                                                    newHeaders[idx] = [
                                                                        header[0],
                                                                        e.target.value
                                                                    ];
                                                                    setFormData({
                                                                        ...formData,
                                                                        headers: newHeaders
                                                                    });
                                                                },
                                                                className: "flex-1 px-3 py-2 border rounded-lg text-xs transition",
                                                                style: {
                                                                    borderColor: 'var(--stroke)',
                                                                    backgroundColor: 'var(--background)',
                                                                    color: 'var(--foreground)'
                                                                },
                                                                placeholder: "Ej: application/json"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setFormData({
                                                                        ...formData,
                                                                        headers: formData.headers.filter((_, i)=>i !== idx)
                                                                    });
                                                                },
                                                                className: "px-3 py-2 rounded-lg transition text-sm",
                                                                style: {
                                                                    backgroundColor: 'rgba(223, 21, 131, 0.2)',
                                                                    color: 'var(--accent)'
                                                                },
                                                                children: "Quitar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 650,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                        lineNumber: 617,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setFormData({
                                                            ...formData,
                                                            headers: [
                                                                ...formData.headers,
                                                                [
                                                                    '',
                                                                    ''
                                                                ]
                                                            ]
                                                        });
                                                    },
                                                    className: "w-full px-3 py-2 rounded-lg transition text-sm",
                                                    style: {
                                                        backgroundColor: 'rgba(99, 164, 255, 0.15)',
                                                        color: 'var(--primary)'
                                                    },
                                                    children: "+ Agregar Header"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 615,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 611,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t pt-4",
                                    style: {
                                        borderColor: 'var(--stroke)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "font-display text-sm font-semibold mb-3",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Respuestas HTTP"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 683,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                formData.responses.map((resp, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded-lg p-3",
                                                        style: {
                                                            borderColor: 'var(--stroke)',
                                                            backgroundColor: 'var(--panel-strong)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-2 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: resp.code,
                                                                        onChange: (e)=>{
                                                                            const newResponses = [
                                                                                ...formData.responses
                                                                            ];
                                                                            newResponses[idx] = {
                                                                                ...resp,
                                                                                code: parseInt(e.target.value)
                                                                            };
                                                                            setFormData({
                                                                                ...formData,
                                                                                responses: newResponses
                                                                            });
                                                                        },
                                                                        className: "px-3 py-2 border rounded-lg text-xs transition",
                                                                        style: {
                                                                            borderColor: 'var(--stroke)',
                                                                            backgroundColor: 'var(--background)',
                                                                            color: 'var(--foreground)'
                                                                        },
                                                                        placeholder: "200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                        lineNumber: 690,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: resp.label,
                                                                        onChange: (e)=>{
                                                                            const newResponses = [
                                                                                ...formData.responses
                                                                            ];
                                                                            newResponses[idx] = {
                                                                                ...resp,
                                                                                label: e.target.value
                                                                            };
                                                                            setFormData({
                                                                                ...formData,
                                                                                responses: newResponses
                                                                            });
                                                                        },
                                                                        className: "px-3 py-2 border rounded-lg text-xs transition",
                                                                        style: {
                                                                            borderColor: 'var(--stroke)',
                                                                            backgroundColor: 'var(--background)',
                                                                            color: 'var(--foreground)'
                                                                        },
                                                                        placeholder: "OK"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                        lineNumber: 706,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 689,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: resp.example,
                                                                onChange: (e)=>{
                                                                    const newResponses = [
                                                                        ...formData.responses
                                                                    ];
                                                                    newResponses[idx] = {
                                                                        ...resp,
                                                                        example: e.target.value
                                                                    };
                                                                    setFormData({
                                                                        ...formData,
                                                                        responses: newResponses
                                                                    });
                                                                },
                                                                className: "w-full px-3 py-2 border rounded-lg text-xs transition font-mono mb-2",
                                                                style: {
                                                                    borderColor: 'var(--stroke)',
                                                                    backgroundColor: 'var(--background)',
                                                                    color: 'var(--foreground)'
                                                                },
                                                                placeholder: "Ejemplo JSON",
                                                                rows: 2
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 723,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setFormData({
                                                                        ...formData,
                                                                        responses: formData.responses.filter((_, i)=>i !== idx)
                                                                    });
                                                                },
                                                                className: "w-full px-3 py-2 rounded-lg transition text-sm",
                                                                style: {
                                                                    backgroundColor: 'rgba(223, 21, 131, 0.2)',
                                                                    color: 'var(--accent)'
                                                                },
                                                                children: "Eliminar Response"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 739,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                        lineNumber: 688,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setFormData({
                                                            ...formData,
                                                            responses: [
                                                                ...formData.responses,
                                                                {
                                                                    code: 200,
                                                                    label: '',
                                                                    mediaType: 'application/json',
                                                                    example: '',
                                                                    schema: ''
                                                                }
                                                            ]
                                                        });
                                                    },
                                                    className: "w-full px-3 py-2 rounded-lg transition text-sm",
                                                    style: {
                                                        backgroundColor: 'rgba(99, 164, 255, 0.15)',
                                                        color: 'var(--primary)'
                                                    },
                                                    children: "+ Agregar Response"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 754,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 686,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 682,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t pt-4",
                                    style: {
                                        borderColor: 'var(--stroke)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "font-display text-sm font-semibold mb-3",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Parámetros de Entrada"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 772,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                formData.fields.map((field, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded-lg p-3",
                                                        style: {
                                                            borderColor: 'var(--stroke)',
                                                            backgroundColor: 'var(--panel-strong)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-2 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: field.name,
                                                                        onChange: (e)=>{
                                                                            const newFields = [
                                                                                ...formData.fields
                                                                            ];
                                                                            newFields[idx] = {
                                                                                ...field,
                                                                                name: e.target.value
                                                                            };
                                                                            setFormData({
                                                                                ...formData,
                                                                                fields: newFields
                                                                            });
                                                                        },
                                                                        className: "px-3 py-2 border rounded-lg text-xs transition",
                                                                        style: {
                                                                            borderColor: 'var(--stroke)',
                                                                            backgroundColor: 'var(--background)',
                                                                            color: 'var(--foreground)'
                                                                        },
                                                                        placeholder: "Nombre del parámetro"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                        lineNumber: 779,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: field.type || 'string',
                                                                        onChange: (e)=>{
                                                                            const newFields = [
                                                                                ...formData.fields
                                                                            ];
                                                                            newFields[idx] = {
                                                                                ...field,
                                                                                type: e.target.value
                                                                            };
                                                                            setFormData({
                                                                                ...formData,
                                                                                fields: newFields
                                                                            });
                                                                        },
                                                                        className: "px-3 py-2 border rounded-lg text-xs transition",
                                                                        style: {
                                                                            borderColor: 'var(--stroke)',
                                                                            backgroundColor: 'var(--background)',
                                                                            color: 'var(--foreground)'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "string",
                                                                                children: "string"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                                lineNumber: 809,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "number",
                                                                                children: "number"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                                lineNumber: 810,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "object",
                                                                                children: "object"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                                lineNumber: 811,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                        lineNumber: 795,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 778,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: field.label,
                                                                onChange: (e)=>{
                                                                    const newFields = [
                                                                        ...formData.fields
                                                                    ];
                                                                    newFields[idx] = {
                                                                        ...field,
                                                                        label: e.target.value
                                                                    };
                                                                    setFormData({
                                                                        ...formData,
                                                                        fields: newFields
                                                                    });
                                                                },
                                                                className: "w-full px-3 py-2 border rounded-lg text-xs transition mb-2",
                                                                style: {
                                                                    borderColor: 'var(--stroke)',
                                                                    backgroundColor: 'var(--background)',
                                                                    color: 'var(--foreground)'
                                                                },
                                                                placeholder: "Etiqueta para el formulario"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 814,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 mb-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-2 text-xs",
                                                                    style: {
                                                                        color: 'var(--foreground)'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: field.required || false,
                                                                            onChange: (e)=>{
                                                                                const newFields = [
                                                                                    ...formData.fields
                                                                                ];
                                                                                newFields[idx] = {
                                                                                    ...field,
                                                                                    required: e.target.checked
                                                                                };
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    fields: newFields
                                                                                });
                                                                            },
                                                                            style: {
                                                                                accentColor: 'var(--primary)'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                            lineNumber: 832,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Requerido"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                    lineNumber: 831,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 830,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setFormData({
                                                                        ...formData,
                                                                        fields: formData.fields.filter((_, i)=>i !== idx)
                                                                    });
                                                                },
                                                                className: "w-full px-3 py-2 rounded-lg transition text-sm",
                                                                style: {
                                                                    backgroundColor: 'rgba(223, 21, 131, 0.2)',
                                                                    color: 'var(--accent)'
                                                                },
                                                                children: "Eliminar Campo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 845,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                        lineNumber: 777,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setFormData({
                                                            ...formData,
                                                            fields: [
                                                                ...formData.fields,
                                                                {
                                                                    name: '',
                                                                    label: '',
                                                                    type: 'string',
                                                                    required: false
                                                                }
                                                            ]
                                                        });
                                                    },
                                                    className: "w-full px-3 py-2 rounded-lg transition text-sm",
                                                    style: {
                                                        backgroundColor: 'rgba(99, 164, 255, 0.15)',
                                                        color: 'var(--primary)'
                                                    },
                                                    children: "+ Agregar Campo"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 860,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 775,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 771,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-4 sticky bottom-0",
                                    style: {
                                        backgroundColor: 'var(--panel)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowForm(false),
                                            className: "flex-1 py-2 rounded-lg transition",
                                            style: {
                                                backgroundColor: 'var(--panel-strong)',
                                                color: 'var(--foreground)'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.opacity = '0.8',
                                            onMouseLeave: (e)=>e.currentTarget.style.opacity = '1',
                                            children: "Cancelar"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 877,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "flex-1 text-white py-2 rounded-lg transition",
                                            style: {
                                                backgroundColor: 'var(--primary)'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.opacity = '0.9',
                                            onMouseLeave: (e)=>e.currentTarget.style.opacity = '1',
                                            children: editingId ? 'Actualizar' : 'Crear'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 892,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 876,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                    lineNumber: 284,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                lineNumber: 279,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg shadow overflow-hidden",
                style: {
                    backgroundColor: 'var(--panel)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "border-b",
                                style: {
                                    backgroundColor: 'var(--panel-strong)',
                                    borderColor: 'var(--stroke)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-sm font-semibold",
                                            style: {
                                                color: 'var(--primary)'
                                            },
                                            children: "Método"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 923,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-sm font-semibold",
                                            style: {
                                                color: 'var(--primary)'
                                            },
                                            children: "Título"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 929,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-sm font-semibold",
                                            style: {
                                                color: 'var(--primary)'
                                            },
                                            children: "Path"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 935,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-sm font-semibold",
                                            style: {
                                                color: 'var(--primary)'
                                            },
                                            children: "Grupo"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 941,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-sm font-semibold",
                                            style: {
                                                color: 'var(--primary)'
                                            },
                                            children: "Sandbox"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 947,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-sm font-semibold",
                                            style: {
                                                color: 'var(--primary)'
                                            },
                                            children: "Auth"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 953,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-sm font-semibold",
                                            style: {
                                                color: 'var(--primary)'
                                            },
                                            children: "Acciones"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 959,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 922,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                lineNumber: 915,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: endpoints.map((endpoint)=>{
                                    var _sectionMap_get, _sectionMap_get_items_find, _sectionMap_get1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b transition",
                                        style: {
                                            borderColor: 'var(--stroke)'
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--panel-strong)',
                                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 rounded-full text-xs font-bold",
                                                    style: {
                                                        backgroundColor: methodColors[endpoint.method].bg,
                                                        color: methodColors[endpoint.method].color
                                                    },
                                                    children: endpoint.method
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 982,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                lineNumber: 981,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 text-sm font-medium",
                                                style: {
                                                    color: 'var(--foreground)'
                                                },
                                                children: endpoint.title
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                lineNumber: 993,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 font-mono text-xs",
                                                style: {
                                                    color: 'var(--muted)'
                                                },
                                                children: endpoint.path
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                lineNumber: 999,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs",
                                                        style: {
                                                            color: 'var(--foreground)'
                                                        },
                                                        children: ((_sectionMap_get = sectionMap.get(endpoint.menuSectionId || '')) === null || _sectionMap_get === void 0 ? void 0 : _sectionMap_get.title) || 'Sin grupo'
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                        lineNumber: 1006,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px]",
                                                        style: {
                                                            color: 'var(--muted)'
                                                        },
                                                        children: ((_sectionMap_get1 = sectionMap.get(endpoint.menuSectionId || '')) === null || _sectionMap_get1 === void 0 ? void 0 : (_sectionMap_get_items_find = _sectionMap_get1.items.find((item)=>item.id === endpoint.menuItemId)) === null || _sectionMap_get_items_find === void 0 ? void 0 : _sectionMap_get_items_find.label) || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                        lineNumber: 1009,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                lineNumber: 1005,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 text-xs",
                                                style: {
                                                    color: 'var(--muted)'
                                                },
                                                children: endpoint.sandbox ? endpoint.sandbox.replace('https://', '') : '-'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                lineNumber: 1016,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: endpoint.requiresAuth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs px-3 py-1 rounded",
                                                    style: {
                                                        backgroundColor: 'rgba(223, 21, 131, 0.2)',
                                                        color: 'var(--accent)'
                                                    },
                                                    children: "Sí"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 1024,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs px-3 py-1 rounded",
                                                    style: {
                                                        backgroundColor: 'rgba(99, 164, 255, 0.2)',
                                                        color: 'var(--primary)'
                                                    },
                                                    children: "No"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 1034,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                lineNumber: 1022,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleEdit(endpoint),
                                                        className: "hover:underline text-sm transition",
                                                        style: {
                                                            color: 'var(--primary)'
                                                        },
                                                        children: "Editar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                        lineNumber: 1046,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDelete(endpoint.id),
                                                        className: "hover:underline text-sm transition",
                                                        style: {
                                                            color: 'var(--accent)'
                                                        },
                                                        children: "Eliminar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                        lineNumber: 1053,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                lineNumber: 1045,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, endpoint.id, true, {
                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                        lineNumber: 969,
                                        columnNumber: 15
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                lineNumber: 967,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                        lineNumber: 914,
                        columnNumber: 9
                    }, this),
                    endpoints.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 text-center",
                        style: {
                            color: 'var(--muted)'
                        },
                        children: "No hay endpoints creados. ¡Crea el primero!"
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                        lineNumber: 1067,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                lineNumber: 910,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
_s(EndpointsPage, "ZoaXfuwcgz9zhAyVG1uc6tUGXzs=");
_c = EndpointsPage;
var _c;
__turbopack_context__.k.register(_c, "EndpointsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_admin_src_23169cf2._.js.map
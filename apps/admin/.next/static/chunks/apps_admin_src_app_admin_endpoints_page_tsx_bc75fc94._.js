(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/admin/src/app/admin/endpoints/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Página de Gestión de Endpoints
 */ __turbopack_context__.s([
    "default",
    ()=>EndpointsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function EndpointsPage() {
    _s();
    const [endpoints, setEndpoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            title: 'Obtener Usuarios',
            path: '/users',
            method: 'GET',
            description: 'Obtener lista de usuarios',
            sandbox: 'https://sandbox.example.com',
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
        setEditingId(null);
        setFormData({
            title: '',
            path: '',
            method: 'GET',
            description: '',
            sandbox: '',
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
        setFormData({
            title: '',
            path: '',
            method: 'GET',
            description: '',
            sandbox: '',
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
                        className: "text-2xl font-bold",
                        style: {
                            color: 'var(--primary)'
                        },
                        children: "Gestión de Endpoints"
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                        lineNumber: 224,
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
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center z-50",
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg p-8 w-full max-w-2xl",
                    style: {
                        backgroundColor: 'var(--panel)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg font-bold mb-4",
                            style: {
                                color: 'var(--foreground)'
                            },
                            children: editingId ? 'Editar Endpoint' : 'Nuevo Endpoint'
                        }, void 0, false, {
                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4 max-h-[70vh] overflow-y-auto",
                            children: [
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
                                            lineNumber: 257,
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
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 256,
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
                                            lineNumber: 287,
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
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 286,
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
                                            lineNumber: 317,
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
                                                    lineNumber: 344,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "POST",
                                                    children: "POST"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "PUT",
                                                    children: "PUT"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "DELETE",
                                                    children: "DELETE"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "PATCH",
                                                    children: "PATCH"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 316,
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
                                            lineNumber: 353,
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
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 352,
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
                                            lineNumber: 386,
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
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 385,
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
                                            lineNumber: 415,
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
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 414,
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
                                            lineNumber: 448,
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
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 447,
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
                                            lineNumber: 484,
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
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t pt-4",
                                    style: {
                                        borderColor: 'var(--stroke)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-sm font-semibold mb-3",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Headers HTTP"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 506,
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
                                                                lineNumber: 512,
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
                                                                lineNumber: 528,
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
                                                                lineNumber: 544,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                        lineNumber: 511,
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
                                                    lineNumber: 559,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 509,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 505,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t pt-4",
                                    style: {
                                        borderColor: 'var(--stroke)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-sm font-semibold mb-3",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Respuestas HTTP"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 577,
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
                                                                        lineNumber: 584,
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
                                                                        lineNumber: 600,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 583,
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
                                                                lineNumber: 617,
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
                                                                lineNumber: 633,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                        lineNumber: 582,
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
                                                    lineNumber: 648,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 580,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 576,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t pt-4",
                                    style: {
                                        borderColor: 'var(--stroke)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-sm font-semibold mb-3",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Parámetros de Entrada"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 666,
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
                                                                        lineNumber: 673,
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
                                                                                lineNumber: 703,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "number",
                                                                                children: "number"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                                lineNumber: 704,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "object",
                                                                                children: "object"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                                lineNumber: 705,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                        lineNumber: 689,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 672,
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
                                                                lineNumber: 708,
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
                                                                            lineNumber: 726,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        "Requerido"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                    lineNumber: 725,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                                lineNumber: 724,
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
                                                                lineNumber: 739,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                        lineNumber: 671,
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
                                                    lineNumber: 754,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                            lineNumber: 669,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 665,
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
                                            lineNumber: 771,
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
                                            lineNumber: 786,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 770,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                    lineNumber: 244,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                lineNumber: 240,
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
                                            lineNumber: 817,
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
                                            lineNumber: 823,
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
                                            lineNumber: 829,
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
                                            lineNumber: 835,
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
                                            lineNumber: 841,
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
                                            lineNumber: 847,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                    lineNumber: 816,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                lineNumber: 809,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: endpoints.map((endpoint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
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
                                                    lineNumber: 870,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                lineNumber: 869,
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
                                                lineNumber: 881,
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
                                                lineNumber: 887,
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
                                                lineNumber: 893,
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
                                                    lineNumber: 901,
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
                                                    lineNumber: 911,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                lineNumber: 899,
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
                                                        lineNumber: 923,
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
                                                        lineNumber: 930,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                                lineNumber: 922,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, endpoint.id, true, {
                                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                        lineNumber: 857,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                                lineNumber: 855,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                        lineNumber: 808,
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
                        lineNumber: 944,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
                lineNumber: 804,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/admin/src/app/admin/endpoints/page.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
_s(EndpointsPage, "t4cO7KT9P8je6vPVtNGWm/OpwTk=");
_c = EndpointsPage;
var _c;
__turbopack_context__.k.register(_c, "EndpointsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_admin_src_app_admin_endpoints_page_tsx_bc75fc94._.js.map
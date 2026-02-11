(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/admin/src/components/admin/ApiManagement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiManagement",
    ()=>ApiManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ApiManagement = ()=>{
    _s();
    const [apis, setApis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            name: 'Auth API',
            description: 'Autenticación y autorización',
            baseUrl: '/api/v1/auth',
            version: '1.0',
            status: 'active',
            createdAt: '2024-01-15'
        },
        {
            id: '2',
            name: 'Users API',
            description: 'Gestión de usuarios',
            baseUrl: '/api/v1/users',
            version: '1.0',
            status: 'active',
            createdAt: '2024-01-10'
        }
    ]);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        description: '',
        baseUrl: '',
        version: '1.0'
    });
    const handleAdd = ()=>{
        setEditingId(null);
        setFormData({
            name: '',
            description: '',
            baseUrl: '',
            version: '1.0'
        });
        setShowForm(true);
    };
    const handleEdit = (api)=>{
        setEditingId(api.id);
        setFormData({
            name: api.name,
            description: api.description,
            baseUrl: api.baseUrl,
            version: api.version
        });
        setShowForm(true);
    };
    const handleDelete = (id)=>{
        if (window.confirm('¿Estás seguro?')) {
            setApis(apis.filter((api)=>api.id !== id));
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (editingId) {
            setApis(apis.map((api)=>api.id === editingId ? {
                    ...api,
                    ...formData
                } : api));
        } else {
            const newApi = {
                id: Date.now().toString(),
                ...formData,
                status: 'inactive',
                createdAt: new Date().toISOString().split('T')[0]
            };
            setApis([
                ...apis,
                newApi
            ]);
        }
        setShowForm(false);
        setFormData({
            name: '',
            description: '',
            baseUrl: '',
            version: '1.0'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-xl font-bold",
                        style: {
                            color: 'var(--foreground)'
                        },
                        children: "APIs Disponibles"
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAdd,
                        className: "text-white px-6 py-2 rounded-lg transition",
                        style: {
                            backgroundColor: 'var(--primary)'
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.opacity = '0.9',
                        onMouseLeave: (e)=>e.currentTarget.style.opacity = '1',
                        children: "+ Nueva API"
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center z-50",
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                onClick: ()=>setShowForm(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-lg p-8 w-full max-w-md",
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
                            children: editingId ? 'Editar API' : 'Nueva API'
                        }, void 0, false, {
                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Nombre"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.name,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    name: e.target.value
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
                                            placeholder: "Ej: Payments API"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Descripción"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
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
                                            placeholder: "Descripción de la API",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Base URL"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.baseUrl,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    baseUrl: e.target.value
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
                                            placeholder: "Ej: /api/v1/payments"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Versión"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.version,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    version: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border rounded-lg transition",
                                            style: {
                                                borderColor: 'var(--stroke)',
                                                backgroundColor: 'var(--background)',
                                                color: 'var(--foreground)'
                                            },
                                            onFocus: (e)=>e.currentTarget.style.borderColor = 'var(--primary)',
                                            onBlur: (e)=>e.currentTarget.style.borderColor = 'var(--stroke)',
                                            placeholder: "Ej: 1.0"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-4",
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
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
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
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
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
                                            className: "px-6 py-3 text-left text-sm font-semibold text-gray-900",
                                            children: "Nombre"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-sm font-semibold",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Descripción"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-sm font-semibold",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Base URL"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-sm font-semibold",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Estado"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-sm font-semibold",
                                            style: {
                                                color: 'var(--foreground)'
                                            },
                                            children: "Acciones"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: apis.map((api)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b transition",
                                        style: {
                                            borderColor: 'var(--stroke)'
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--panel-strong)',
                                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 font-medium",
                                                style: {
                                                    color: 'var(--foreground)'
                                                },
                                                children: api.name
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 text-sm",
                                                style: {
                                                    color: 'var(--muted)'
                                                },
                                                children: api.description
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 text-sm font-mono",
                                                style: {
                                                    color: 'var(--muted)'
                                                },
                                                children: api.baseUrl
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 rounded-full text-xs font-medium",
                                                    style: {
                                                        backgroundColor: api.status === 'active' ? 'rgba(99, 164, 255, 0.2)' : api.status === 'deprecated' ? 'rgba(223, 21, 131, 0.2)' : 'var(--panel-strong)',
                                                        color: api.status === 'active' ? 'var(--primary)' : api.status === 'deprecated' ? 'var(--accent)' : 'var(--muted)'
                                                    },
                                                    children: api.status
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleEdit(api),
                                                        className: "hover:underline text-sm transition",
                                                        style: {
                                                            color: 'var(--primary)'
                                                        },
                                                        children: "Editar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDelete(api.id),
                                                        className: "hover:underline text-sm transition",
                                                        style: {
                                                            color: 'var(--accent)'
                                                        },
                                                        children: "Eliminar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                                lineNumber: 277,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, api.id, true, {
                                        fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    apis.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 text-center",
                        style: {
                            color: 'var(--muted)'
                        },
                        children: "No hay APIs creadas. ¡Crea la primera!"
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/admin/src/components/admin/ApiManagement.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ApiManagement, "kdjJi1gjjJ37NeCAGIrMg5HtSF0=");
_c = ApiManagement;
var _c;
__turbopack_context__.k.register(_c, "ApiManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/admin/src/app/admin/apis/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApisPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$components$2f$admin$2f$ApiManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/admin/src/components/admin/ApiManagement.tsx [app-client] (ecmascript)");
'use client';
;
;
function ApisPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-2xl font-bold",
                        style: {
                            color: 'var(--foreground)'
                        },
                        children: "Gestión de APIs"
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/app/admin/apis/page.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1",
                        style: {
                            color: 'var(--muted)'
                        },
                        children: "Crea, edita y elimina APIs que estarán disponibles en el portal"
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/app/admin/apis/page.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/src/app/admin/apis/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$components$2f$admin$2f$ApiManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiManagement"], {}, void 0, false, {
                fileName: "[project]/apps/admin/src/app/admin/apis/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/admin/src/app/admin/apis/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = ApisPage;
var _c;
__turbopack_context__.k.register(_c, "ApisPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_admin_src_cc42b096._.js.map
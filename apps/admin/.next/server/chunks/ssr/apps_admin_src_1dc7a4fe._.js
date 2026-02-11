module.exports = [
"[project]/apps/admin/src/lib/menu-sections-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/apps/admin/src/lib/menu-sections-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadMenuSections",
    ()=>loadMenuSections,
    "saveMenuSections",
    ()=>saveMenuSections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/admin/src/lib/menu-sections-data.ts [app-ssr] (ecmascript)");
;
const STORAGE_KEY = "fie-admin-menu-sections";
const loadMenuSections = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultMenuSections"];
    }
    //TURBOPACK unreachable
    ;
    const raw = undefined;
};
const saveMenuSections = (sections)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
};
}),
"[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuSectionsManagement",
    ()=>MenuSectionsManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/admin/src/lib/menu-sections-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/admin/src/lib/menu-sections-store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const buildEmptyItem = ()=>({
        id: "",
        label: "",
        enabled: true
    });
const MenuSectionsManagement = ()=>{
    const [sections, setSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultMenuSections"]);
    const [newSection, setNewSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        title: ""
    });
    const [newItems, setNewItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSections((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadMenuSections"])());
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$lib$2f$menu$2d$sections$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveMenuSections"])(sections);
    }, [
        sections
    ]);
    const sectionIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Set(sections.map((section)=>section.id)), [
        sections
    ]);
    const filteredSections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!searchQuery.trim()) {
            return sections;
        }
        const query = searchQuery.toLowerCase();
        return sections.filter((section)=>section.id.toLowerCase().includes(query) || section.title.toLowerCase().includes(query) || section.items.some((item)=>item.id.toLowerCase().includes(query) || item.label.toLowerCase().includes(query)));
    }, [
        sections,
        searchQuery
    ]);
    const handleAddSection = ()=>{
        const id = newSection.id.trim();
        const title = newSection.title.trim();
        if (!id || !title) {
            window.alert("Completa el id y el titulo del grupo.");
            return;
        }
        if (sectionIds.has(id)) {
            window.alert("Ya existe un grupo con ese id.");
            return;
        }
        setSections([
            ...sections,
            {
                id,
                title,
                items: []
            }
        ]);
        setNewSection({
            id: "",
            title: ""
        });
    };
    const handleRemoveSection = (id)=>{
        if (window.confirm("Eliminar este grupo y todos sus items?")) {
            setSections(sections.filter((section)=>section.id !== id));
        }
    };
    const handleTitleChange = (id, title)=>{
        setSections(sections.map((section)=>section.id === id ? {
                ...section,
                title
            } : section));
    };
    const handleToggleItem = (sectionId, itemId)=>{
        setSections(sections.map((section)=>section.id !== sectionId ? section : {
                ...section,
                items: section.items.map((item)=>item.id === itemId ? {
                        ...item,
                        enabled: !item.enabled
                    } : item)
            }));
    };
    const handleItemLabelChange = (sectionId, itemId, label)=>{
        setSections(sections.map((section)=>section.id !== sectionId ? section : {
                ...section,
                items: section.items.map((item)=>item.id === itemId ? {
                        ...item,
                        label
                    } : item)
            }));
    };
    const handleRemoveItem = (sectionId, itemId)=>{
        setSections(sections.map((section)=>section.id !== sectionId ? section : {
                ...section,
                items: section.items.filter((item)=>item.id !== itemId)
            }));
    };
    const handleAddItem = (sectionId)=>{
        const draft = newItems[sectionId] ?? buildEmptyItem();
        const id = draft.id.trim();
        const label = draft.label.trim();
        if (!id || !label) {
            window.alert("Completa el id y el nombre del item.");
            return;
        }
        const section = sections.find((entry)=>entry.id === sectionId);
        if (!section) {
            return;
        }
        if (section.items.some((item)=>item.id === id)) {
            window.alert("Ya existe un item con ese id en este grupo.");
            return;
        }
        setSections(sections.map((entry)=>entry.id !== sectionId ? entry : {
                ...entry,
                items: [
                    ...entry.items,
                    {
                        ...draft,
                        id,
                        label
                    }
                ]
            }));
        setNewItems({
            ...newItems,
            [sectionId]: buildEmptyItem()
        });
    };
    const toggleCollapse = (sectionId)=>{
        setCollapsed((prev)=>({
                ...prev,
                [sectionId]: !prev[sectionId]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        style: {
            color: "var(--foreground)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                style: {
                    borderColor: "var(--stroke)",
                    backgroundColor: "var(--panel)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-display text-sm font-semibold mb-3",
                        style: {
                            color: "var(--foreground)"
                        },
                        children: "Buscar grupos"
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: searchQuery,
                        onChange: (event)=>setSearchQuery(event.target.value),
                        placeholder: "Buscar por id, titulo o items...",
                        className: "w-full rounded-lg border px-3 py-2 text-sm",
                        style: {
                            borderColor: "var(--stroke)",
                            backgroundColor: "var(--background)",
                            color: "var(--foreground)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4",
                style: {
                    borderColor: "var(--stroke)",
                    backgroundColor: "var(--panel)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-display text-sm font-semibold mb-3",
                        style: {
                            color: "var(--foreground)"
                        },
                        children: "Nuevo grupo"
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr_auto]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: newSection.id,
                                onChange: (event)=>setNewSection({
                                        ...newSection,
                                        id: event.target.value
                                    }),
                                placeholder: "id (ej: auth)",
                                className: "w-full rounded-lg border px-3 py-2 text-sm",
                                style: {
                                    borderColor: "var(--stroke)",
                                    backgroundColor: "var(--background)",
                                    color: "var(--foreground)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: newSection.title,
                                onChange: (event)=>setNewSection({
                                        ...newSection,
                                        title: event.target.value
                                    }),
                                placeholder: "Titulo (ej: Autenticacion)",
                                className: "w-full rounded-lg border px-3 py-2 text-sm",
                                style: {
                                    borderColor: "var(--stroke)",
                                    backgroundColor: "var(--background)",
                                    color: "var(--foreground)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleAddSection,
                                className: "rounded-lg px-4 py-2 text-sm font-medium text-white",
                                style: {
                                    backgroundColor: "var(--primary)"
                                },
                                children: "Agregar"
                            }, void 0, false, {
                                fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: filteredSections.map((section)=>{
                    const draftItem = newItems[section.id] ?? buildEmptyItem();
                    const isCollapsed = collapsed[section.id];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b px-2 py-3",
                                style: {
                                    borderColor: "var(--stroke)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>toggleCollapse(section.id),
                                        className: "flex w-full items-center justify-between text-left",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] transition ${isCollapsed ? "-rotate-90" : "rotate-0"}`,
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: "▼"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-semibold uppercase tracking-[0.3em]",
                                                            style: {
                                                                color: "var(--muted)"
                                                            },
                                                            children: section.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: section.title,
                                                            onChange: (event)=>handleTitleChange(section.id, event.target.value),
                                                            onClick: (e)=>e.stopPropagation(),
                                                            className: "mt-1 w-full rounded border px-2 py-1 text-sm",
                                                            style: {
                                                                borderColor: "var(--stroke)",
                                                                backgroundColor: "var(--background)",
                                                                color: "var(--foreground)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleRemoveSection(section.id),
                                        className: "ml-3 rounded-lg px-3 py-1 text-xs",
                                        style: {
                                            backgroundColor: "rgba(223, 21, 131, 0.2)",
                                            color: "var(--accent)"
                                        },
                                        children: "Eliminar"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 pb-4 pt-2 space-y-2",
                                children: [
                                    section.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 rounded-lg border px-3 py-2",
                                            style: {
                                                borderColor: "var(--stroke)",
                                                backgroundColor: "var(--panel)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-[100px] text-[10px] uppercase tracking-[0.3em]",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: item.id
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: item.label,
                                                    onChange: (event)=>handleItemLabelChange(section.id, item.id, event.target.value),
                                                    className: "flex-1 rounded border px-2 py-1 text-sm",
                                                    style: {
                                                        borderColor: "var(--stroke)",
                                                        backgroundColor: "var(--background)",
                                                        color: "var(--foreground)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-1 text-[10px] whitespace-nowrap",
                                                    style: {
                                                        color: "var(--muted)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: item.enabled,
                                                            onChange: ()=>handleToggleItem(section.id, item.id),
                                                            style: {
                                                                accentColor: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Visible"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleRemoveItem(section.id, item.id),
                                                    className: "rounded px-2 py-1 text-[10px]",
                                                    style: {
                                                        backgroundColor: "rgba(223, 21, 131, 0.2)",
                                                        color: "var(--accent)"
                                                    },
                                                    children: "Quitar"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                            lineNumber: 244,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-2 pt-2 md:grid-cols-[1fr_1fr_auto]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: draftItem.id,
                                                onChange: (event)=>setNewItems({
                                                        ...newItems,
                                                        [section.id]: {
                                                            ...draftItem,
                                                            id: event.target.value
                                                        }
                                                    }),
                                                placeholder: "id del item",
                                                className: "w-full rounded border px-2 py-1 text-sm",
                                                style: {
                                                    borderColor: "var(--stroke)",
                                                    backgroundColor: "var(--background)",
                                                    color: "var(--foreground)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                                lineNumber: 275,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: draftItem.label,
                                                onChange: (event)=>setNewItems({
                                                        ...newItems,
                                                        [section.id]: {
                                                            ...draftItem,
                                                            label: event.target.value
                                                        }
                                                    }),
                                                placeholder: "Nombre del item",
                                                className: "w-full rounded border px-2 py-1 text-sm",
                                                style: {
                                                    borderColor: "var(--stroke)",
                                                    backgroundColor: "var(--background)",
                                                    color: "var(--foreground)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                                lineNumber: 287,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleAddItem(section.id),
                                                className: "rounded px-3 py-1 text-sm font-medium",
                                                style: {
                                                    backgroundColor: "rgba(99, 164, 255, 0.15)",
                                                    color: "var(--primary)"
                                                },
                                                children: "+ Item"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                                lineNumber: 299,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                        lineNumber: 274,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                                lineNumber: 242,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, section.id, true, {
                        fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                        lineNumber: 201,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/admin/src/app/admin/menu/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuSectionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$components$2f$admin$2f$MenuSectionsManagement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/admin/src/components/admin/MenuSectionsManagement.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function MenuSectionsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-2xl font-bold",
                        style: {
                            color: "var(--foreground)"
                        },
                        children: "Gestión de Grupos"
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/app/admin/menu/page.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1",
                        style: {
                            color: "var(--muted)"
                        },
                        children: "Controla los grupos que aparecen en el portal."
                    }, void 0, false, {
                        fileName: "[project]/apps/admin/src/app/admin/menu/page.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/admin/src/app/admin/menu/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$admin$2f$src$2f$components$2f$admin$2f$MenuSectionsManagement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuSectionsManagement"], {}, void 0, false, {
                fileName: "[project]/apps/admin/src/app/admin/menu/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/admin/src/app/admin/menu/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_admin_src_1dc7a4fe._.js.map
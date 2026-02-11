(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/admin/src/lib/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = (param)=>{
    let { children } = param;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Verificar sesión existente en localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const checkAuthStatus = {
                "AuthProvider.useEffect.checkAuthStatus": async ()=>{
                    try {
                        const token = localStorage.getItem('auth_token');
                        const userStr = localStorage.getItem('auth_user');
                        if (token && userStr) {
                            const userData = JSON.parse(userStr);
                            // Aquí se podría validar el token con el backend
                            setUser(userData);
                        }
                    } catch (error) {
                        console.error('Error checking auth status:', error);
                        localStorage.removeItem('auth_token');
                        localStorage.removeItem('auth_user');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["AuthProvider.useEffect.checkAuthStatus"];
            checkAuthStatus();
        }
    }["AuthProvider.useEffect"], []);
    const login = async (email, password)=>{
        setIsLoading(true);
        try {
            // TODO: Reemplazar con llamada real con los api que sean necesarios... (consultar con Silverio)
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (!response.ok) {
                throw new Error('Credenciales inválidas');
            }
            const { token, user: userData } = await response.json();
            localStorage.setItem('auth_token', token);
            localStorage.setItem('auth_user', JSON.stringify(userData));
            setUser(userData);
        } finally{
            setIsLoading(false);
        }
    };
    const loginWithSSO = async (token)=>{
        setIsLoading(true);
        try {
            // TODO: Integración con RHSSO (Consultar con silverio)
            const response = await fetch('/api/auth/sso-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(token)
                }
            });
            if (!response.ok) {
                throw new Error('SSO login failed');
            }
            const { token: newToken, user: userData } = await response.json();
            localStorage.setItem('auth_token', newToken);
            localStorage.setItem('auth_user', JSON.stringify(userData));
            setUser(userData);
        } finally{
            setIsLoading(false);
        }
    };
    const logout = async ()=>{
        try {
            // TODO: POST /api/auth/logout
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_user');
            setUser(null);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };
    const refreshToken = async ()=>{
        try {
            // TODO: POST /api/auth/refresh
            const response = await fetch('/api/auth/refresh', {
                method: 'POST',
                headers: {
                    'Authorization': "Bearer ".concat(localStorage.getItem('auth_token'))
                }
            });
            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem('auth_token', token);
            } else {
                await logout();
            }
        } catch (error) {
            console.error('Token refresh error:', error);
            await logout();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoading,
            isAuthenticated: !!user,
            login,
            loginWithSSO,
            logout,
            refreshToken
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/admin/src/lib/auth-context.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "YajQB7LURzRD+QP5gw0+K2TZIWA=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_admin_src_lib_auth-context_tsx_9ffff7d0._.js.map
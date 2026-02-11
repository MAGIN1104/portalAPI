module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/apps/portal/src/portal/adapters/in-memory/apiDefinitions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiDefinitions",
    ()=>apiDefinitions
]);
const apiDefinitions = {
    auth: {
        title: "Servicio de Autenticacion",
        method: "POST",
        path: "/onboarding/v1.0/noa/login",
        description: "Permite autenticar a una empresa y obtener tokens necesarios para consumir servicios B2B.",
        sandbox: "https://sandbox.fiedemo.com.bo",
        headers: [
            [
                "Content-Type",
                "application/json"
            ]
        ],
        requiresAuth: false,
        fields: [
            {
                name: "loginName",
                label: "Usuario de la empresa",
                required: true,
                placeholder: ""
            },
            {
                name: "password",
                label: "Contrasena",
                type: "string",
                required: true,
                placeholder: ""
            },
            {
                name: "idDevice",
                label: "Identificador del dispositivo origen",
                required: true,
                placeholder: ""
            },
            {
                name: "idBusiness",
                label: "Identificador unico de la empresa",
                required: true,
                placeholder: ""
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
      "accessToken": "sdEAtgdEAtgdEAtgdEAtg",
      "expiresIn": 60,
      "refreshToken": "eyJhbGnZFfPGcnZFfPGcnZFfPGcnZFfPGc",
      "refreshExpiresIn": 170
    }
  }
}`,
        responses: [
            {
                code: 200,
                label: "OK",
                mediaType: "application/json",
                example: `{
  "transactionId": "string",
  "result": {},
  "timestamp": "2026-02-06T15:23:37.677Z"
}`,
                schema: `{
  "transactionId": "string",
  "result": {},
  "timestamp": "2026-02-06T15:23:37.677Z"
}`
            },
            {
                code: 400,
                label: "Bad Request",
                mediaType: "application/json",
                example: `{
    "code": "000800",
    "message": "B\u00fasqueda sin resultados.",
    "reference": "https://sandbox.fie/api/listObservedOperation"
}`,
                schema: `{
  "code": "string",
  "message": "string",
  "reference": "string",
  "transactionId": "string"
}`
            },
            {
                code: 500,
                label: "Internal Server Error",
                mediaType: "application/json",
                example: `{
    "code": "810",
    "message": "El servicio solicitado no se encuentra disponible, por favor intente mas tarde",
    "cause": "Error on consume API REST - On Extract CustomException",
    "reference": "https://sandbox.fie/api/listObservedOperation"
}`,
                schema: `{
  "code": "string",
  "message": "string",
  "cause": "string",
  "reference": "string",
  "transactionId": "string"
}`
            }
        ]
    },
    generateQR: {
        title: "Servicio de Generacion QR",
        method: "PUT",
        path: "/paymentasaservice/v1.0/generateQ",
        description: "Genera un codigo QR para pagos electronicos.",
        sandbox: "https://sandbox.fiedemo.com.bo",
        headers: [
            [
                "Content-Type",
                "application/json"
            ],
            [
                "Authorization",
                "Bearer Token"
            ]
        ],
        requiresAuth: true,
        fields: [
            {
                name: "transactionId",
                label: "ID de transaccion desde autenticacion",
                required: true,
                placeholder: "3d69cc42-25ae-4dad-8da1-6bfceb9a4c67"
            },
            {
                name: "accessToken",
                label: "Token de acceso",
                required: true,
                placeholder: "eyJ..."
            },
            {
                name: "recOwner",
                label: "Nombre del beneficiario",
                required: true,
                placeholder: "JUAN PEREZ"
            },
            {
                name: "documentNumber",
                label: "Documento del beneficiario",
                required: true,
                placeholder: "7040877"
            },
            {
                name: "phone",
                label: "Telefono del beneficiario",
                type: "string",
                required: true,
                placeholder: "71902157"
            },
            {
                name: "recAccount",
                label: "Numero de cuenta receptora",
                required: true,
                placeholder: "40015047001"
            },
            {
                name: "currency",
                label: "Moneda",
                required: true,
                placeholder: "BOB"
            },
            {
                name: "amount",
                label: "Monto",
                type: "number",
                required: true,
                placeholder: "1000"
            },
            {
                name: "reference",
                label: "Referencia del concepto",
                placeholder: "Carga de Credito"
            },
            {
                name: "expirationDate",
                label: "Fecha expiracion",
                type: "string",
                required: true,
                placeholder: "2025-12-31"
            },
            {
                name: "uniqueUse",
                label: "Uso unico",
                required: true,
                placeholder: "0"
            },
            {
                name: "serviceCode",
                label: "Codigo de servicio",
                required: true,
                placeholder: "8877"
            }
        ],
        request: `{
  "transactionId": "...",
  "accessToken": "...",
  "recOwner": "JUAN PEREZ",
  "documentNumber": "7040877",
  "phone": "71902157",
  "recAccount": "40015047001",
  "currency": "BOB",
  "amount": "1000",
  "reference": "Carga de Credito",
  "expirationDate": "2025-12-31",
  "uniqueUse": "0",
  "serviceCode": "8877"
}`,
        response: `{
  "transactionId": "3d69cc42-25ae-4dad-8da1-6bfceb9a4c67",
  "result": {
    "code": "0000",
    "description": "Success",
    "result": "INn5NfOGqpUKarZdx0vHjsulplz9ca8DnEgtZzlfw==|46509df2",
    "idQr": "25050301033171857027"
  },
  "timestamp": "2025-10-27T18:54:03.669Z"
}`,
        responses: [
            {
                code: 200,
                label: "OK",
                mediaType: "application/json",
                example: `{
  "transactionId": "string",
  "result": {
    "code": "0000",
    "description": "Success",
    "result": "INn5NfOGqpUKarZdx0vHjsulplz9ca8DnEgtZzlfw==|46509df2",
    "idQr": "25050301033171857027"
  },
  "timestamp": "2025-10-27T18:54:03.669Z"
}`,
                schema: `{
  "transactionId": "string",
  "result": {
    "code": "string",
    "description": "string",
    "result": "string",
    "idQr": "string"
  },
  "timestamp": "string"
}`
            },
            {
                code: 400,
                label: "Bad Request",
                mediaType: "application/json",
                example: `{
  "code": "string",
  "message": "string",
  "cause": "string",
  "reference": "string",
  "transactionId": "string"
}`,
                schema: `{
  "code": "string",
  "message": "string",
  "cause": "string",
  "reference": "string",
  "transactionId": "string"
}`
            },
            {
                code: 500,
                label: "Internal Server Error",
                mediaType: "application/json",
                example: `{
  "code": "string",
  "message": "string",
  "cause": "string",
  "reference": "string",
  "transactionId": "string"
}`,
                schema: `{
  "code": "string",
  "message": "string",
  "cause": "string",
  "reference": "string",
  "transactionId": "string"
}`
            }
        ]
    },
    stateQR: {
        title: "Servicio Estado QR",
        method: "GET",
        path: "/paymentasaservice/v1.0/stateQR",
        description: "Consulta el estado de un QR generado.",
        sandbox: "https://sandbox.fiedemo.com.bo",
        headers: [
            [
                "Content-Type",
                "application/json"
            ],
            [
                "Authorization",
                "Bearer Token"
            ]
        ],
        requiresAuth: true,
        fields: [
            {
                name: "transactionId",
                label: "ID de transaccion",
                required: true,
                placeholder: "3d69cc42-25ae-4dad-8da1-6bfceb9a4c67"
            },
            {
                name: "accessToken",
                label: "Token de acceso",
                required: true,
                placeholder: "eyJ..."
            },
            {
                name: "idQr",
                label: "Identificador del QR",
                required: true,
                placeholder: "25050301033171857027"
            }
        ],
        request: `{
  "transactionId": "...",
  "accessToken": "...",
  "idQr": "25050301033171857027"
}`,
        response: `{
  "result": {
    "state": "PA"
  }
}`,
        responses: [
            {
                code: 200,
                label: "OK",
                mediaType: "application/json",
                example: `{
  "result": {
    "state": "PA"
  }
}`,
                schema: `{
  "result": {
    "state": "string"
  }
}`
            },
            {
                code: 400,
                label: "Bad Request",
                mediaType: "application/json",
                example: `{
  "code": "string",
  "message": "string",
  "cause": "string",
  "reference": "string",
  "transactionId": "string"
}`,
                schema: `{
  "code": "string",
  "message": "string",
  "cause": "string",
  "reference": "string",
  "transactionId": "string"
}`
            },
            {
                code: 500,
                label: "Internal Server Error",
                mediaType: "application/json",
                example: `{
  "code": "string",
  "message": "string",
  "cause": "string",
  "reference": "string",
  "transactionId": "string"
}`,
                schema: `{
  "code": "string",
  "message": "string",
  "cause": "string",
  "reference": "string",
  "transactionId": "string"
}`
            }
        ]
    }
};
}),
"[project]/apps/portal/src/portal/adapters/in-memory/apiCatalog.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiCatalog",
    ()=>apiCatalog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$apiDefinitions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/adapters/in-memory/apiDefinitions.ts [app-ssr] (ecmascript)");
;
const apiCatalog = {
    getAll: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$apiDefinitions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiDefinitions"],
    getByKey: (key)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$apiDefinitions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiDefinitions"][key]
};
}),
"[project]/apps/portal/src/portal/adapters/in-memory/environments.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "environmentPort",
    ()=>environmentPort,
    "environments",
    ()=>environments
]);
const environments = [
    {
        id: "sandbox",
        label: "Sandbox",
        baseUrl: "https://sandbox.fiedemo.com.bo"
    },
    {
        id: "prod",
        label: "Produccion",
        baseUrl: "https://sandbox.fiedemo.com.bo"
    }
];
const environmentPort = {
    getAll: ()=>environments,
    getById: (id)=>environments.find((env)=>env.id === id)
};
}),
"[project]/apps/portal/src/portal/adapters/in-memory/menuSections.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "menuSections",
    ()=>menuSections,
    "menuSectionsPort",
    ()=>menuSectionsPort
]);
const menuSections = [
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
const menuSectionsPort = {
    getSections: ()=>menuSections
};
}),
"[project]/apps/portal/src/portal/adapters/in-memory/supportInfo.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "faqs",
    ()=>faqs,
    "supportChannels",
    ()=>supportChannels,
    "supportInfoPort",
    ()=>supportInfoPort
]);
const supportChannels = [
    {
        label: "Mesa de ayuda",
        value: "soporte@bancofie.bo"
    },
    {
        label: "WhatsApp",
        value: "+591 700 12345",
        hint: "Lun-Vie 08:00-18:00"
    },
    {
        label: "Ticket",
        value: "portal.bancofie.bo/soporte"
    }
];
const faqs = [
    {
        question: "Como obtengo credenciales?",
        answer: "Completa la solicitud de acceso y el equipo de integraciones te enviara tus credenciales."
    },
    {
        question: "Cual es el limite de llamadas?",
        answer: "En sandbox el limite es flexible; en produccion se define por contrato y SLA."
    },
    {
        question: "Como reporto un error de API?",
        answer: "Abre un ticket con el transactionId y el payload usado para acelerar el analisis."
    }
];
const supportInfoPort = {
    getSupportChannels: ()=>supportChannels,
    getFaqs: ()=>faqs
};
}),
"[project]/apps/portal/src/portal/adapters/in-memory/emptySolicitud.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emptySolicitud",
    ()=>emptySolicitud
]);
const emptySolicitud = {
    solicitadoPor: "",
    nombreEmpresa: "",
    contactoNombre: "",
    contactoCelular: "",
    contactoCorreo: "",
    tecnicoNombre: "",
    tecnicoCelular: "",
    tecnicoCorreo: "",
    volumenSolicitudes: ""
};
}),
"[project]/apps/portal/src/portal/application/use-cases/getActiveApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getActiveApi",
    ()=>getActiveApi
]);
const getActiveApi = (catalog, apiKey)=>{
    const byKey = catalog.getByKey(apiKey);
    if (byKey) {
        return byKey;
    }
    const fallback = catalog.getByKey("auth");
    if (fallback) {
        return fallback;
    }
    const all = catalog.getAll();
    const first = Object.values(all)[0];
    if (!first) {
        throw new Error("Api catalog is empty.");
    }
    return first;
};
}),
"[project]/apps/portal/src/portal/application/use-cases/filterMenuSections.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterMenuSections",
    ()=>filterMenuSections
]);
const filterMenuSections = (sections, query)=>{
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
        return sections;
    }
    return sections.map((section)=>({
            ...section,
            items: section.items.filter((item)=>item.label.toLowerCase().includes(normalized))
        })).filter((section)=>section.items.length > 0);
};
}),
"[project]/apps/portal/src/portal/application/use-cases/collectLeafFields.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectLeafFields",
    ()=>collectLeafFields
]);
const collectLeafFields = (fields, parentPath = "")=>{
    const result = [];
    fields.forEach((field)=>{
        const path = parentPath ? `${parentPath}.${field.name}` : field.name;
        if ((field.type === "object" || field.children?.length) && field.children) {
            result.push(...collectLeafFields(field.children, path));
            return;
        }
        result.push({
            path,
            field
        });
    });
    return result;
};
}),
"[project]/apps/portal/src/portal/application/use-cases/buildPayload.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildPayload",
    ()=>buildPayload,
    "buildPayloadJson",
    ()=>buildPayloadJson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$collectLeafFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/application/use-cases/collectLeafFields.ts [app-ssr] (ecmascript)");
;
const setDeepValue = (target, path, value)=>{
    const parts = path.split(".");
    let cursor = target;
    parts.forEach((part, index)=>{
        if (index === parts.length - 1) {
            cursor[part] = value;
            return;
        }
        if (!cursor[part] || typeof cursor[part] !== "object") {
            cursor[part] = {};
        }
        cursor = cursor[part];
    });
};
const buildPayload = (fields, values)=>{
    const payload = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$collectLeafFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectLeafFields"])(fields).forEach(({ path })=>{
        setDeepValue(payload, path, values[path] ?? "");
    });
    return payload;
};
const buildPayloadJson = (fields, values)=>{
    return JSON.stringify(buildPayload(fields, values), null, 2);
};
}),
"[project]/apps/portal/src/portal/application/use-cases/validateConsoleInputs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateConsoleInputs",
    ()=>validateConsoleInputs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$collectLeafFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/application/use-cases/collectLeafFields.ts [app-ssr] (ecmascript)");
;
const validateConsoleInputs = (options)=>{
    const { fields, values, requiresAuth, tokenValue } = options;
    const fieldErrors = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$collectLeafFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectLeafFields"])(fields).forEach(({ path, field })=>{
        const value = (values[path] ?? "").trim();
        if (field.required && !value) {
            fieldErrors[path] = "Campo requerido.";
            return;
        }
        if (field.required && value && field.pattern) {
            try {
                const regex = new RegExp(field.pattern);
                if (!regex.test(value)) {
                    fieldErrors[path] = field.helper ? `Formato invalido. ${field.helper}` : "Formato invalido.";
                }
            } catch  {
                fieldErrors[path] = "Formato invalido.";
            }
        }
    });
    let tokenError;
    if (requiresAuth) {
        const trimmed = tokenValue.trim();
        if (!/^Bearer\s+\S+$/.test(trimmed)) {
            tokenError = "Token invalido. Usa Bearer <token>.";
        }
    }
    const hasErrors = Object.keys(fieldErrors).length > 0 || Boolean(tokenError);
    return {
        fieldErrors,
        tokenError,
        hasErrors
    };
};
}),
"[project]/apps/portal/src/portal/application/use-cases/buildCurlSnippet.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCurlSnippet",
    ()=>buildCurlSnippet
]);
const buildCurlSnippet = (options)=>{
    const { baseUrl, path, method, requiresAuth, authToken, payloadJson } = options;
    const url = `${baseUrl}${path}`;
    const headerLines = [
        "Content-Type: application/json",
        ...requiresAuth ? [
            `Authorization: ${authToken || "Bearer <token>"}`
        ] : []
    ];
    const headers = headerLines.map((header)=>`  -H "${header}" \\\n`).join("");
    const body = payloadJson.replace(/'/g, "'\"'\"'");
    return `curl -X ${method} "${url}" \\\n${headers}  -d '${body}'`;
};
}),
"[project]/apps/portal/src/portal/application/use-cases/buildPrintableSolicitud.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildPrintableSolicitud",
    ()=>buildPrintableSolicitud
]);
const buildPrintableSolicitud = (solicitud)=>{
    const date = new Date().toLocaleDateString();
    return `
      <html>
        <head>
          <title>Solicitud API Banco FIE</title>
          <style>
            body { font-family: Arial, sans-serif; color: #004F97; padding: 32px; }
            h2 { color: #df1583; margin-bottom: 8px; }
            h3 { background: #f1f1f1; padding: 6px 10px; }
            .row { margin-bottom: 16px; }
            .footer { margin-top: 32px; font-size: 10px; color: #666; }
          </style>
        </head>
        <body>
          <h2>Solicitud de Acceso API - Banco FIE</h2>
          <p><strong>Fecha:</strong> ${date}</p>
          <div class="row">
            <h3>Datos generales</h3>
            <p><strong>Solicitado por:</strong> ${solicitud.solicitadoPor}</p>
            <p><strong>Empresa:</strong> ${solicitud.nombreEmpresa}</p>
          </div>
          <div class="row">
            <h3>Contacto de la empresa</h3>
            <p><strong>Responsable:</strong> ${solicitud.contactoNombre}</p>
            <p><strong>Celular:</strong> ${solicitud.contactoCelular}</p>
            <p><strong>Correo:</strong> ${solicitud.contactoCorreo}</p>
          </div>
          <div class="row">
            <h3>Contacto tecnico</h3>
            <p><strong>Responsable:</strong> ${solicitud.tecnicoNombre}</p>
            <p><strong>Celular:</strong> ${solicitud.tecnicoCelular}</p>
            <p><strong>Correo:</strong> ${solicitud.tecnicoCorreo}</p>
          </div>
          <div class="row">
            <h3>Proyeccion</h3>
            <p><strong>Volumen diario:</strong> ${solicitud.volumenSolicitudes}</p>
          </div>
          <div class="footer">
            Documento generado desde el portal de pruebas API Banco FIE.
          </div>
        </body>
      </html>
    `;
};
}),
"[project]/apps/portal/src/components/portal/ApiOverview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiOverview",
    ()=>ApiOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ApiOverview({ activeApi, methodBadgeClass, baseUrl, baseUrlLabel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-2xl border border-stroke bg-panel p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] uppercase tracking-[0.3em] text-muted",
                            children: "API seleccionada"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/ApiOverview.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex flex-wrap items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `rounded border px-2 py-1 text-[10px] font-semibold ${methodBadgeClass(activeApi.method)}`,
                                    children: activeApi.method
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/ApiOverview.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display text-2xl text-foreground",
                                    children: activeApi.title
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/ApiOverview.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/ApiOverview.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-muted",
                            children: activeApi.description
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/ApiOverview.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/portal/ApiOverview.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/components/portal/ApiOverview.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-stroke bg-panel-strong p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted",
                            children: "Ruta"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/ApiOverview.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-foreground break-all",
                            children: activeApi.path
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/ApiOverview.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/portal/ApiOverview.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/components/portal/ApiOverview.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portal/src/components/portal/ApiOverview.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/portal/src/components/portal/ApiTables.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiTables",
    ()=>ApiTables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ApiTables({ activeApi }) {
    const flattenFields = (fields, parentPath = "")=>{
        return fields.flatMap((field)=>{
            const fieldPath = parentPath ? `${parentPath}.${field.name}` : field.name;
            const isObject = field.type === "object" || Boolean(field.children?.length);
            if (isObject && field.children) {
                return flattenFields(field.children, fieldPath);
            }
            return [
                {
                    field,
                    path: fieldPath
                }
            ];
        });
    };
    const flatFields = flattenFields(activeApi.fields);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-w-0 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-stroke bg-panel p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-semibold uppercase tracking-[0.3em] text-muted",
                        children: "Campos de solicitud"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 overflow-x-auto rounded-xl border border-stroke",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-[520px] w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-background text-muted",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Campo"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Tipo"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Descripcion"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Formato"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: flatFields.map(({ field, path })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-t border-stroke",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2 font-semibold text-foreground",
                                                    children: path
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2 text-xs text-foreground",
                                                    children: field.type ?? "string"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2 text-muted",
                                                    children: field.label
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2 text-xs text-muted",
                                                    children: field.helper ?? field.pattern ?? "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, path, true, {
                                            fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-stroke bg-panel p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-semibold uppercase tracking-[0.3em] text-muted",
                        children: "Headers"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 overflow-x-auto rounded-xl border border-stroke",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-[520px] w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-background text-muted",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Campo"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left",
                                                children: "Descripcion"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: activeApi.headers.map(([field, detail])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-t border-stroke",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2 font-semibold text-foreground",
                                                    children: field
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2 text-muted",
                                                    children: detail
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, field, true, {
                                            fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portal/src/components/portal/ApiTables.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/portal/src/components/portal/ConsoleModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsoleModal",
    ()=>ConsoleModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ConsoleModal({ open, activeApi, consoleValues, formattedPayload, lastRunMeta, consoleResponse, authToken, tokenRequired, errorMessage, tokenError, fieldErrors, simulatedStatus, onClose, onChange, onTokenChange, onStatusChange, onRun }) {
    if (!open) {
        return null;
    }
    const inputClass = "mt-2 w-full rounded-lg border border-stroke/80 bg-panel px-3 py-2 text-sm text-foreground placeholder:text-muted/70 shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
    const selectClass = "mt-2 w-full rounded-lg border border-stroke/80 bg-panel px-3 py-2 text-sm text-foreground shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
    const renderFields = (fields, parentPath = "")=>fields.map((field)=>{
            const fieldPath = parentPath ? `${parentPath}.${field.name}` : field.name;
            const isObject = field.type === "object" || Boolean(field.children?.length);
            if (isObject) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:col-span-2 rounded-lg border border-stroke bg-panel px-3 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold text-foreground",
                            children: [
                                field.label,
                                " (",
                                fieldPath,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 grid auto-rows-fr gap-3 sm:grid-cols-2",
                            children: renderFields(field.children ?? [], fieldPath)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, fieldPath, true, {
                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex min-h-[96px] flex-col text-xs font-semibold text-muted",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    field.label,
                                    " (",
                                    fieldPath,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            field.required ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-rose-400",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: consoleValues[fieldPath] ?? "",
                        onChange: (event)=>onChange(fieldPath, event.target.value),
                        type: "text",
                        placeholder: field.placeholder,
                        pattern: field.pattern,
                        className: `${inputClass} ${fieldErrors[fieldPath] ? "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/20" : ""}`,
                        "aria-invalid": Boolean(fieldErrors[fieldPath])
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `mt-1 min-h-[16px] text-[11px] ${fieldErrors[fieldPath] ? "text-rose-300" : "text-muted"}`,
                        children: fieldErrors[fieldPath] ?? field.helper ?? " "
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                ]
            }, fieldPath, true, {
                fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this);
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-[calc(100vh-3rem)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-stroke bg-panel text-foreground sm:max-h-[calc(100vh-5rem)]",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-stroke bg-panel/95 px-5 py-4 backdrop-blur sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl text-foreground",
                                    children: [
                                        "Prueba: ",
                                        activeApi.title
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-muted",
                                    children: "Simula ejecuciones y valida los payloads antes de consumir la API."
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "text-xl text-muted",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5 px-5 py-4 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-stroke bg-panel-strong p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.3em] text-muted",
                                    children: "Credenciales"
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 grid auto-rows-fr gap-3 sm:grid-cols-2",
                                    children: [
                                        tokenRequired ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex min-h-[96px] flex-col text-xs font-semibold text-muted sm:col-span-2",
                                            children: [
                                                "Token de acceso (Authorization)",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: authToken,
                                                    onChange: (event)=>onTokenChange(event.target.value),
                                                    placeholder: "Bearer eyJ...",
                                                    pattern: "^Bearer\\s+.+$",
                                                    className: `${inputClass} ${tokenError ? "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/20" : ""}`,
                                                    "aria-invalid": Boolean(tokenError)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `mt-1 min-h-[16px] text-[11px] ${tokenError ? "text-rose-300" : "text-muted"}`,
                                                    children: tokenError ?? "Usa el formato: Bearer <token>."
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex min-h-[96px] flex-col text-xs font-semibold text-muted sm:col-span-2",
                                            children: [
                                                "Simular respuesta",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: simulatedStatus,
                                                    onChange: (event)=>onStatusChange(Number(event.target.value)),
                                                    className: selectClass,
                                                    children: activeApi.responses.map((response)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: response.code,
                                                            children: [
                                                                response.code,
                                                                " ",
                                                                response.label
                                                            ]
                                                        }, response.code, true, {
                                                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 min-h-[16px] text-[11px] text-muted",
                                                    children: "Elige el estado que quieres simular."
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-stroke bg-panel-strong p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.3em] text-muted",
                                    children: "Parametros"
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 grid auto-rows-fr gap-3 sm:grid-cols-2",
                                    children: renderFields(activeApi.fields)
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-200",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onRun,
                            className: "w-full rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white",
                            children: "Ejecutar solicitud"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-stroke/80 bg-panel p-4 text-xs text-muted",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] uppercase tracking-[0.3em] text-muted",
                                            children: "Payload JSON"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "mt-2 max-h-48 overflow-auto whitespace-pre-wrap text-xs text-foreground",
                                            children: formattedPayload
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                consoleResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-stroke/80 bg-panel p-4 text-xs text-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] uppercase tracking-[0.3em] text-muted",
                                            children: "Response"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "mt-2 max-h-48 overflow-auto whitespace-pre-wrap text-xs text-foreground",
                                            children: consoleResponse
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        lastRunMeta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3 text-xs text-muted",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded border border-stroke bg-panel px-2 py-1 text-foreground",
                                    children: lastRunMeta.status
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        lastRunMeta.latencyMs,
                                        " ms"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: lastRunMeta.timestamp
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/portal/src/components/portal/ConsoleModal.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/portal/src/components/portal/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
function Header({ theme, onToggleTheme, onOpenSolicitud, onOpenSidebar }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 border-b border-stroke bg-panel/95 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-none flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo-fie.svg",
                            alt: "Logo Banco FIE",
                            width: 40,
                            height: 40,
                            className: "h-10 w-40 object-contain"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-lg",
                                children: "API Studio"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onOpenSidebar,
                            className: "w-full rounded-full border border-stroke bg-panel-strong px-4 py-2 text-sm font-semibold text-foreground sm:hidden",
                            children: "Menu"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onToggleTheme,
                            "aria-label": theme === "dark" ? "Activar modo claro" : "Activar modo oscuro",
                            title: theme === "dark" ? "Activar modo claro" : "Activar modo oscuro",
                            className: "w-full rounded-full border border-stroke bg-panel-strong px-4 py-2 text-sm font-semibold text-foreground sm:w-auto",
                            children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                "aria-hidden": "true",
                                viewBox: "0 0 24 24",
                                className: "mx-auto h-4 w-4",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.6",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                "aria-hidden": "true",
                                viewBox: "0 0 24 24",
                                className: "mx-auto h-4 w-4",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.6",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onOpenSolicitud,
                            className: "w-full rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 sm:w-auto",
                            children: "Solicitar acceso"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/portal/src/components/portal/Header.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/portal/src/components/portal/ResponsesPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResponsesPanel",
    ()=>ResponsesPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ResponsesPanel({ responses, expandedResponses, expandAllResponses, onToggleResponse, onToggleExpandAll }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-stroke bg-panel p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-[0.3em] text-muted",
                                children: "Responses"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-2xl text-foreground",
                                children: "Codigos y ejemplos"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onToggleExpandAll,
                        className: "rounded-full border border-stroke bg-panel-strong px-3 py-1 text-xs font-semibold text-foreground",
                        children: expandAllResponses ? "Colapsar todo" : "Expandir todo"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-4",
                children: responses.map((response)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-stroke bg-panel-strong p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onToggleResponse(response.code),
                                className: "flex w-full flex-wrap items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded border border-stroke bg-panel px-2 py-1 text-xs font-semibold",
                                                children: response.code
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-foreground",
                                                children: response.label
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted",
                                        children: expandAllResponses || expandedResponses[String(response.code)] ? "Ocultar" : "Ver"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `collapse-panel ${expandAllResponses || expandedResponses[String(response.code)] ? "is-open" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-xs text-muted",
                                        children: [
                                            "Media type",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 rounded-lg border border-stroke bg-panel px-3 py-2 text-xs text-foreground",
                                                children: response.mediaType
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid gap-3 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.3em] text-muted",
                                                        children: "Example value"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "mt-2 max-h-48 whitespace-pre-wrap rounded-lg bg-code p-3 text-xs text-emerald-200 overflow-auto",
                                                        children: response.example
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.3em] text-muted",
                                                        children: "Schema"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "mt-2 max-h-48 whitespace-pre-wrap rounded-lg bg-code p-3 text-xs text-emerald-200 overflow-auto",
                                                        children: response.schema
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, response.code, true, {
                        fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portal/src/components/portal/ResponsesPanel.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/portal/src/components/portal/RightPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RightPanel",
    ()=>RightPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function RightPanel({ activeApi, lastRunMeta, consoleResponse, snippetLabel, snippetCode, supportChannels, onOpenConsole }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "hidden space-y-6 xl:block xl:sticky xl:top-24 xl:max-h-[calc(100vh-140px)] xl:overflow-y-auto xl:pr-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-stroke bg-panel-strong p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-[0.3em] text-muted",
                                children: "Try it"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onOpenConsole,
                                className: "rounded-full border border-stroke bg-panel px-3 py-1 text-xs font-semibold",
                                children: "Abrir consola"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-stroke bg-panel px-3 py-2 text-xs text-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2 font-semibold text-foreground",
                                        children: activeApi.method
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "break-all",
                                        children: activeApi.path
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onOpenConsole,
                                className: "w-full rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white",
                                children: "Ejecutar"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    lastRunMeta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap items-center gap-3 text-xs text-muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded border border-stroke bg-panel px-2 py-1 text-foreground",
                                children: lastRunMeta.status
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    lastRunMeta.latencyMs,
                                    " ms"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: lastRunMeta.timestamp
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this) : null,
                    consoleResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "mt-4 whitespace-pre-wrap rounded-lg bg-code p-4 text-xs text-emerald-200",
                        children: consoleResponse
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-stroke bg-code p-5 text-emerald-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs uppercase tracking-[0.3em] text-emerald-100",
                        children: "Ejemplo request"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "mt-3 max-h-64 whitespace-pre-wrap text-xs break-words overflow-auto",
                        children: activeApi.request
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-stroke bg-code p-5 text-emerald-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs uppercase tracking-[0.3em] text-emerald-100",
                        children: "Ejemplo response"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "mt-3 max-h-64 whitespace-pre-wrap text-xs break-words overflow-auto",
                        children: activeApi.response
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-stroke bg-panel-strong p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-[0.3em] text-muted",
                                children: "Code snippet"
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-stroke bg-panel px-3 py-1 text-[10px] font-semibold text-foreground",
                                children: snippetLabel
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "mt-4 max-h-64 whitespace-pre-wrap rounded-lg bg-code p-4 text-xs text-emerald-200 overflow-auto",
                        children: snippetCode
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-stroke bg-panel-strong p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-[0.3em] text-muted",
                        children: "Soporte"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-3 text-xs",
                        children: supportChannels.map((channel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-stroke bg-panel px-3 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground font-semibold",
                                        children: channel.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted break-all",
                                        children: channel.value
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    channel.hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-muted mt-1",
                                        children: channel.hint
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, channel.label, true, {
                                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portal/src/components/portal/RightPanel.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/portal/src/components/portal/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Sidebar({ filteredSections, collapsed, activeApiKey, searchQuery, onSearchChange, onToggleSection, onApiClick, methodBadgeClass, apiDefinitions }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full min-h-0 flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-stroke bg-menu px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-[10px] uppercase tracking-[0.3em] text-muted",
                        children: "Buscar API"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: searchQuery,
                        onChange: (event)=>onSearchChange(event.target.value),
                        placeholder: "Busca una API",
                        className: "mt-2 w-full rounded-lg border border-stroke/80 bg-panel px-3 py-2 text-sm text-foreground placeholder:text-muted/70 shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0 space-y-4 overflow-y-auto px-2 pb-4 pt-3",
                children: filteredSections.map((section)=>{
                    const isCollapsed = collapsed[section.id];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onToggleSection(section.id),
                                className: "flex w-full items-center justify-between border-b border-stroke px-2 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.3em] text-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: section.title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] transition ${isCollapsed ? "-rotate-90" : "rotate-0"}`,
                                        children: "▼"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${isCollapsed ? "hidden" : "grid"} gap-2 px-2`,
                                children: section.items.map((item)=>{
                                    const isActive = activeApiKey === item.id;
                                    const isEnabled = item.enabled;
                                    const method = apiDefinitions[item.id]?.method ?? "";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onApiClick(item.id, isEnabled),
                                        disabled: !isEnabled,
                                        className: `flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${isEnabled ? "text-foreground hover:bg-panel-strong" : "text-muted opacity-60"} ${isActive ? "bg-panel-strong" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                                                lineNumber: 76,
                                                columnNumber: 23
                                            }, this),
                                            isEnabled && method ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `rounded border px-2 py-0.5 text-[10px] font-semibold ${methodBadgeClass(method)}`,
                                                children: method
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                                                lineNumber: 78,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase",
                                                children: "Prox."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                                                lineNumber: 86,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                                        lineNumber: 65,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        ]
                    }, section.id, true, {
                        fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portal/src/components/portal/Sidebar.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/portal/src/components/portal/SolicitudModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SolicitudModal",
    ()=>SolicitudModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SolicitudModal({ open, solicitud, onClose, onChange, onSubmit }) {
    if (!open) {
        return null;
    }
    const inputClass = "mt-2 w-full rounded-xl border border-stroke/80 bg-panel px-4 py-3 text-sm text-foreground placeholder:text-muted/70 shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
    const groupLabelClass = "text-[11px] font-semibold text-muted";
    const groupInputClass = "mt-1 w-full rounded-xl border border-stroke/80 bg-panel px-4 py-3 text-sm text-foreground placeholder:text-muted/70 shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-[calc(100vh-3rem)] w-full max-w-xl overflow-y-auto rounded-2xl border border-stroke bg-panel text-foreground sm:max-h-[calc(100vh-5rem)]",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-stroke bg-panel/95 px-5 py-4 backdrop-blur sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl text-foreground",
                                    children: "Solicitud de acceso"
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-muted",
                                    children: "Completa los datos para habilitar tu integracion."
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "text-xl text-muted",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "space-y-6 px-5 py-4 sm:px-6",
                    onSubmit: onSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-xs font-semibold text-muted",
                            children: [
                                "Solicitado por",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    required: true,
                                    value: solicitud.solicitadoPor,
                                    onChange: (event)=>onChange("solicitadoPor", event.target.value),
                                    className: inputClass
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-xs font-semibold text-muted mb-4",
                            children: [
                                "Nombre de la empresa",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    required: true,
                                    value: solicitud.nombreEmpresa,
                                    onChange: (event)=>onChange("nombreEmpresa", event.target.value),
                                    className: inputClass
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-stroke bg-panel-strong p-4 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.3em] text-muted",
                                    children: "Contacto empresa"
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: groupLabelClass,
                                            children: [
                                                "Nombre",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    placeholder: "Nombre",
                                                    value: solicitud.contactoNombre,
                                                    onChange: (event)=>onChange("contactoNombre", event.target.value),
                                                    className: groupInputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: groupLabelClass,
                                                    children: [
                                                        "Celular",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            placeholder: "Celular",
                                                            value: solicitud.contactoCelular,
                                                            onChange: (event)=>onChange("contactoCelular", event.target.value),
                                                            className: groupInputClass
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: groupLabelClass,
                                                    children: [
                                                        "Correo",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            type: "email",
                                                            placeholder: "correo@empresa.com",
                                                            value: solicitud.contactoCorreo,
                                                            onChange: (event)=>onChange("contactoCorreo", event.target.value),
                                                            className: groupInputClass
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-stroke bg-panel-strong p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.3em] text-muted",
                                    children: "Contacto tecnico"
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: groupLabelClass,
                                            children: [
                                                "Nombre",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    placeholder: "Nombre",
                                                    value: solicitud.tecnicoNombre,
                                                    onChange: (event)=>onChange("tecnicoNombre", event.target.value),
                                                    className: groupInputClass
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: groupLabelClass,
                                                    children: [
                                                        "Celular",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            placeholder: "Celular",
                                                            value: solicitud.tecnicoCelular,
                                                            onChange: (event)=>onChange("tecnicoCelular", event.target.value),
                                                            className: groupInputClass
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: groupLabelClass,
                                                    children: [
                                                        "Correo",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            type: "email",
                                                            placeholder: "correo@empresa.com",
                                                            value: solicitud.tecnicoCorreo,
                                                            onChange: (event)=>onChange("tecnicoCorreo", event.target.value),
                                                            className: groupInputClass
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-xs font-semibold text-muted",
                            children: [
                                "Volumen estimado (solicitudes por dia)",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    required: true,
                                    type: "number",
                                    value: solicitud.volumenSolicitudes,
                                    onChange: (event)=>onChange("volumenSolicitudes", event.target.value),
                                    className: inputClass
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white mt-4",
                            children: "Generar PDF"
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/portal/src/components/portal/SolicitudModal.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/portal/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$apiCatalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/adapters/in-memory/apiCatalog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$environments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/adapters/in-memory/environments.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$menuSections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/adapters/in-memory/menuSections.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$supportInfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/adapters/in-memory/supportInfo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$emptySolicitud$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/adapters/in-memory/emptySolicitud.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$getActiveApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/application/use-cases/getActiveApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$filterMenuSections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/application/use-cases/filterMenuSections.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$collectLeafFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/application/use-cases/collectLeafFields.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$buildPayload$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/application/use-cases/buildPayload.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$validateConsoleInputs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/application/use-cases/validateConsoleInputs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$buildCurlSnippet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/application/use-cases/buildCurlSnippet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$buildPrintableSolicitud$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/portal/application/use-cases/buildPrintableSolicitud.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$ApiOverview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/components/portal/ApiOverview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$ApiTables$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/components/portal/ApiTables.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$ConsoleModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/components/portal/ConsoleModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/components/portal/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$ResponsesPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/components/portal/ResponsesPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$RightPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/components/portal/RightPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/components/portal/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$SolicitudModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portal/src/components/portal/SolicitudModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const environments = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$environments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["environmentPort"].getAll();
const supportChannels = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$supportInfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportInfoPort"].getSupportChannels();
const faqs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$supportInfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supportInfoPort"].getFaqs();
const menuSections = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$menuSections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuSectionsPort"].getSections();
function Home() {
    const [activeApiKey, setActiveApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("auth");
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Object.fromEntries(menuSections.map((section)=>[
                section.id,
                true
            ])));
    const [consoleOpen, setConsoleOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [solicitudOpen, setSolicitudOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [consoleValues, setConsoleValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [consoleResponse, setConsoleResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [consoleError, setConsoleError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [authToken, setAuthToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [tokenError, setTokenError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [fieldErrors, setFieldErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [simulatedStatus, setSimulatedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(200);
    const [solicitud, setSolicitud] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$emptySolicitud$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emptySolicitud"]);
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [expandedResponses, setExpandedResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [expandAllResponses, setExpandAllResponses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [lastRunMeta, setLastRunMeta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [selectedEnvironment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("sandbox");
    const activeApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$getActiveApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$apiCatalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiCatalog"], activeApiKey), [
        activeApiKey
    ]);
    const environmentInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$environments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["environmentPort"].getById(selectedEnvironment) ?? environments[0], [
        selectedEnvironment
    ]);
    const filteredSections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$filterMenuSections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterMenuSections"])(menuSections, searchQuery), [
        searchQuery
    ]);
    const methodBadgeClass = (method)=>{
        const normalized = method.toUpperCase();
        if (normalized === "GET") {
            return "border-emerald-200 bg-emerald-100 text-emerald-800";
        }
        if (normalized === "POST") {
            return "border-sky-200 bg-sky-100 text-sky-800";
        }
        if (normalized === "PUT") {
            return "border-amber-200 bg-amber-100 text-amber-800";
        }
        if (normalized === "DEL" || normalized === "DELETE") {
            return "border-rose-200 bg-rose-100 text-rose-800";
        }
        return "border-slate-200 bg-slate-100 text-slate-800";
    };
    const toggleSection = (sectionId)=>{
        setCollapsed((prev)=>({
                ...prev,
                [sectionId]: !prev[sectionId]
            }));
    };
    const handleApiClick = (itemId, enabled)=>{
        if (!enabled || !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$apiCatalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiCatalog"].getByKey(itemId)) {
            return;
        }
        setActiveApiKey(itemId);
    };
    const openConsole = ()=>{
        const values = {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$collectLeafFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectLeafFields"])(activeApi.fields).forEach(({ path })=>{
            values[path] = "";
        });
        setConsoleValues(values);
        setConsoleResponse("");
        setConsoleError(undefined);
        setAuthToken("");
        setTokenError(undefined);
        setFieldErrors({});
        setSimulatedStatus(activeApi.responses[0]?.code ?? 200);
        setConsoleOpen(true);
    };
    const runSimulation = ()=>{
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$validateConsoleInputs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateConsoleInputs"])({
            fields: activeApi.fields,
            values: consoleValues,
            requiresAuth: activeApi.requiresAuth,
            tokenValue: authToken
        });
        setFieldErrors(validation.fieldErrors);
        setTokenError(validation.tokenError);
        setConsoleError(validation.hasErrors ? "Revisa los campos marcados." : undefined);
        const timestamp = new Date().toLocaleString();
        const latencyMs = Math.floor(180 + Math.random() * 220);
        const statusToUse = validation.hasErrors ? 400 : simulatedStatus;
        const responseMatch = activeApi.responses.find((item)=>item.code === statusToUse) ?? activeApi.responses[0];
        const statusCode = responseMatch?.code ?? statusToUse;
        setLastRunMeta({
            status: statusCode,
            latencyMs,
            timestamp
        });
        setConsoleResponse(responseMatch?.example ?? activeApi.response);
        if (!validation.hasErrors) {
            setConsoleError(undefined);
            setTokenError(undefined);
            setFieldErrors({});
        }
    };
    const toggleResponse = (code)=>{
        setExpandAllResponses(false);
        setExpandedResponses((prev)=>({
                ...prev,
                [String(code)]: !prev[String(code)]
            }));
    };
    const handleExpandAll = ()=>{
        setExpandAllResponses((prev)=>{
            const next = !prev;
            if (next) {
                const allExpanded = Object.fromEntries(activeApi.responses.map((response)=>[
                        String(response.code),
                        true
                    ]));
                setExpandedResponses(allExpanded);
            } else {
                setExpandedResponses({});
            }
            return next;
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = window.localStorage.getItem("fie-theme");
        if (stored === "light" || stored === "dark") {
            setTheme(stored);
            document.documentElement.dataset.theme = stored;
            return;
        }
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        const initial = prefersLight ? "light" : "dark";
        setTheme(initial);
        document.documentElement.dataset.theme = initial;
    }, []);
    const toggleTheme = ()=>{
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.dataset.theme = next;
        window.localStorage.setItem("fie-theme", next);
    };
    const formattedPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$buildPayload$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildPayloadJson"])(activeApi.fields, consoleValues), [
        activeApi.fields,
        consoleValues
    ]);
    const snippetCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$buildCurlSnippet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildCurlSnippet"])({
            baseUrl: environmentInfo.baseUrl,
            path: activeApi.path,
            method: activeApi.method,
            requiresAuth: activeApi.requiresAuth,
            authToken,
            payloadJson: formattedPayload
        }), [
        activeApi,
        authToken,
        environmentInfo.baseUrl,
        formattedPayload
    ]);
    const handleSolicitudChange = (field, value)=>{
        setSolicitud((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const generatePrintable = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$application$2f$use$2d$cases$2f$buildPrintableSolicitud$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildPrintableSolicitud"])(solicitud);
    const handleSolicitudSubmit = (event)=>{
        event.preventDefault();
        const printWindow = window.open("", "_blank", "width=900,height=700");
        if (!printWindow) {
            return;
        }
        printWindow.document.write(generatePrintable());
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    };
    const menuContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
        filteredSections: filteredSections,
        collapsed: collapsed,
        activeApiKey: activeApiKey,
        searchQuery: searchQuery,
        onSearchChange: setSearchQuery,
        onToggleSection: toggleSection,
        onApiClick: handleApiClick,
        methodBadgeClass: methodBadgeClass,
        apiDefinitions: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$portal$2f$adapters$2f$in$2d$memory$2f$apiCatalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiCatalog"].getAll()
    }, void 0, false, {
        fileName: "[project]/apps/portal/src/app/page.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                theme: theme,
                onToggleTheme: toggleTheme,
                onOpenSolicitud: ()=>setSolicitudOpen(true),
                onOpenSidebar: ()=>setSidebarOpen(true)
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/app/page.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            sidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/70",
                        onClick: ()=>setSidebarOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/apps/portal/src/app/page.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "relative z-10 flex h-full w-72 flex-col overflow-hidden border-r border-stroke bg-menu p-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-4 pb-4 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold",
                                        children: "Navegacion"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/app/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSidebarOpen(false),
                                        className: "text-lg text-muted",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/portal/src/app/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/portal/src/app/page.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            menuContent
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portal/src/app/page.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portal/src/app/page.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-none px-4 py-6 sm:px-6 lg:px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)_380px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "hidden h-[calc(100vh-120px)] rounded-2xl border border-stroke bg-menu p-0 lg:sticky lg:top-24 lg:overflow-hidden lg:block",
                            children: menuContent
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/app/page.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "min-w-0 space-y-6 xl:max-h-[calc(100vh-120px)] xl:overflow-y-auto xl:pr-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$ApiOverview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiOverview"], {
                                    activeApi: activeApi,
                                    methodBadgeClass: methodBadgeClass,
                                    baseUrl: environmentInfo.baseUrl,
                                    baseUrlLabel: environmentInfo.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/portal/src/app/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "grid gap-6 xl:grid-cols-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$ApiTables$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiTables"], {
                                            activeApi: activeApi
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/app/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$ResponsesPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsesPanel"], {
                                            responses: activeApi.responses,
                                            expandedResponses: expandedResponses,
                                            expandAllResponses: expandAllResponses,
                                            onToggleResponse: toggleResponse,
                                            onToggleExpandAll: handleExpandAll
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/app/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/app/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    id: "faq",
                                    className: "rounded-2xl border border-stroke bg-panel-strong p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-[0.3em] text-muted",
                                            children: "FAQ tecnico"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/app/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 space-y-3 text-xs",
                                            children: faqs.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg border border-stroke bg-panel px-3 py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-foreground font-semibold",
                                                            children: faq.question
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/app/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted mt-1",
                                                            children: faq.answer
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/portal/src/app/page.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, faq.question, true, {
                                                    fileName: "[project]/apps/portal/src/app/page.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/portal/src/app/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/portal/src/app/page.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/portal/src/app/page.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$RightPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RightPanel"], {
                            activeApi: activeApi,
                            lastRunMeta: lastRunMeta,
                            consoleResponse: consoleResponse,
                            snippetLabel: "cURL",
                            snippetCode: snippetCode,
                            supportChannels: supportChannels,
                            onOpenConsole: openConsole
                        }, void 0, false, {
                            fileName: "[project]/apps/portal/src/app/page.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portal/src/app/page.tsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/app/page.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$ConsoleModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConsoleModal"], {
                open: consoleOpen,
                activeApi: activeApi,
                consoleValues: consoleValues,
                formattedPayload: formattedPayload,
                lastRunMeta: lastRunMeta,
                consoleResponse: consoleResponse,
                authToken: authToken,
                tokenRequired: Boolean(activeApi.requiresAuth),
                errorMessage: consoleError,
                tokenError: tokenError,
                fieldErrors: fieldErrors,
                simulatedStatus: simulatedStatus,
                onClose: ()=>setConsoleOpen(false),
                onChange: (field, value)=>{
                    setConsoleValues((prev)=>({
                            ...prev,
                            [field]: value
                        }));
                    setFieldErrors((prev)=>{
                        if (!prev[field]) {
                            return prev;
                        }
                        const next = {
                            ...prev
                        };
                        delete next[field];
                        return next;
                    });
                },
                onTokenChange: (value)=>{
                    setAuthToken(value);
                    setTokenError(undefined);
                },
                onStatusChange: setSimulatedStatus,
                onRun: runSimulation
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/app/page.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portal$2f$src$2f$components$2f$portal$2f$SolicitudModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolicitudModal"], {
                open: solicitudOpen,
                solicitud: solicitud,
                onClose: ()=>setSolicitudOpen(false),
                onChange: handleSolicitudChange,
                onSubmit: handleSolicitudSubmit
            }, void 0, false, {
                fileName: "[project]/apps/portal/src/app/page.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portal/src/app/page.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2b907a83._.js.map
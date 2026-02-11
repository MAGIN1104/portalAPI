import type { ApiDefinition } from "@/portal/domain/api";

export const apiDefinitions: Record<string, ApiDefinition> = {
  auth: {
    title: "Servicio de Autenticacion",
    method: "POST",
    path: "/onboarding/v1.0/noa/login",
    description:
      "Permite autenticar a una empresa y obtener tokens necesarios para consumir servicios B2B.",
    sandbox: "https://sandbox.fiedemo.com.bo",
    headers: [["Content-Type", "application/json"]],
    requiresAuth: false,
    fields: [
      {
        name: "loginName",
        label: "Usuario de la empresa",
        required: true,
        placeholder: "",
      },
      {
        name: "password",
        label: "Contrasena",
        type: "string",
        required: true,
        placeholder: "",
      },
      {
        name: "idDevice",
        label: "Identificador del dispositivo origen",
        required: true,
        placeholder: "",
      },
      {
        name: "idBusiness",
        label: "Identificador unico de la empresa",
        required: true,
        placeholder: "",
      },
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
}`,
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
}`,
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
}`,
      },
    ],
  },
  generateQR: {
    title: "Servicio de Generacion QR",
    method: "PUT",
    path: "/paymentasaservice/v1.0/generateQ",
    description: "Genera un codigo QR para pagos electronicos.",
    sandbox: "https://sandbox.fiedemo.com.bo",
    headers: [
      ["Content-Type", "application/json"],
      ["Authorization", "Bearer Token"],
    ],
    requiresAuth: true,
    fields: [
      {
        name: "transactionId",
        label: "ID de transaccion desde autenticacion",
        required: true,
        placeholder: "3d69cc42-25ae-4dad-8da1-6bfceb9a4c67",
      },
      {
        name: "accessToken",
        label: "Token de acceso",
        required: true,
        placeholder: "eyJ...",
      },
      {
        name: "recOwner",
        label: "Nombre del beneficiario",
        required: true,
        placeholder: "JUAN PEREZ",
      },
      {
        name: "documentNumber",
        label: "Documento del beneficiario",
        required: true,
        placeholder: "7040877",
      },
      {
        name: "phone",
        label: "Telefono del beneficiario",
        type: "string",
        required: true,
        placeholder: "71902157",
      },
      {
        name: "recAccount",
        label: "Numero de cuenta receptora",
        required: true,
        placeholder: "40015047001",
      },
      {
        name: "currency",
        label: "Moneda",
        required: true,
        placeholder: "BOB",
      },
      {
        name: "amount",
        label: "Monto",
        type: "number",
        required: true,
        placeholder: "1000",
      },
      {
        name: "reference",
        label: "Referencia del concepto",
        placeholder: "Carga de Credito",
      },
      {
        name: "expirationDate",
        label: "Fecha expiracion",
        type: "string",
        required: true,
        placeholder: "2025-12-31",
      },
      {
        name: "uniqueUse",
        label: "Uso unico",
        required: true,
        placeholder: "0",
      },
      {
        name: "serviceCode",
        label: "Codigo de servicio",
        required: true,
        placeholder: "8877",
      },
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
}`,
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
}`,
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
}`,
      },
    ],
  },
  stateQR: {
    title: "Servicio Estado QR",
    method: "GET",
    path: "/paymentasaservice/v1.0/stateQR",
    description: "Consulta el estado de un QR generado.",
    sandbox: "https://sandbox.fiedemo.com.bo",
    headers: [
      ["Content-Type", "application/json"],
      ["Authorization", "Bearer Token"],
    ],
    requiresAuth: true,
    fields: [
      {
        name: "transactionId",
        label: "ID de transaccion",
        required: true,
        placeholder: "3d69cc42-25ae-4dad-8da1-6bfceb9a4c67",
      },
      {
        name: "accessToken",
        label: "Token de acceso",
        required: true,
        placeholder: "eyJ...",
      },
      {
        name: "idQr",
        label: "Identificador del QR",
        required: true,
        placeholder: "25050301033171857027",
      },
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
}`,
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
}`,
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
}`,
      },
    ],
  },
};

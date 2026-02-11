import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { AuthProvider } from "@/lib/auth-context";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Admin Panel | Banco FIE",
  description:
    "Admin panel para gestionar APIs de Banco FIE a nivel de base de datos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${lato.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

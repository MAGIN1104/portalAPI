import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata: Metadata = {
  title: "Portal de APIs | Banco FIE",
  description:
    "Portal de APIs de Banco FIE para comercializar, documentar y escalar integraciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Exemplo de Boyler plate",
  description: "Generated by create next app",
};

export const viewport = {
  initialScale:1.0,
  width: 'device-width',
  height:1080,
  colorScheme:'dark'
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}

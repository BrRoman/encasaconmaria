import type { Metadata } from "next";
import { Roboto, Parisienne } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const parisienne = Parisienne({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-parisienne",
});

export const metadata: Metadata = {
  title: "En casa con María",
  description: "Tienda católica de artículos religiosos y productos naturales",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${roboto.variable} ${parisienne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

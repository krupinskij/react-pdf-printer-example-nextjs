import type { Metadata } from "next";
import "./globals.css";

import { Lato } from "next/font/google";
import Providers from "./providers";

export const runtime = "edge";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "React PDF Printer | Parki Narodowe w Polsce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
        <Providers>
          <body className={`${lato.className}`}>{children}</body>
        </Providers>
      </html>
    </>
  );
}

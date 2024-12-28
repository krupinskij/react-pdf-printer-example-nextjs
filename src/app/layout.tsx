import type { Metadata } from "next";
import "./globals.css";
// import "/node_modules/react-pdf-printer/dist/style.css";

import { Lato, Mukta } from "next/font/google";

export const runtime = "edge";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
});

// const mukta = Mukta({
//   weight: ["500"],
//   display: "swap",
//   subsets: ["latin", "latin-ext"],
// });

export const metadata: Metadata = {
  title: "React PDF Printer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
        <body className={`${lato.className}`}>{children}</body>
      </html>
    </>
  );
}

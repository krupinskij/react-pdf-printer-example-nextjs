"use client";

import { PrinterProvider as Provider } from "react-pdf-printer";

const PrinterProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider configuration={{ useAsync: true }}>{children}</Provider>;
};

export default PrinterProvider;

"use client";

import QueryProvider from "./QueryProvider";
import PrinterProvider from "./PrinterProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <PrinterProvider>{children}</PrinterProvider>
    </QueryProvider>
  );
};

export default Providers;

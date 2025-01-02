'use client';

import PrinterProvider from './PrinterProvider';
import QueryProvider from './QueryProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <PrinterProvider>{children}</PrinterProvider>
    </QueryProvider>
  );
};

export default Providers;

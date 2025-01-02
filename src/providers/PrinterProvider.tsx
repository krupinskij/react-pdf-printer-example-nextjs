'use client';

import { useEffect } from 'react';
import { PrinterProvider as Provider } from 'react-pdf-printer';

const detectFirefox = () => {
  if (navigator.userAgent.includes('Firefox')) {
    setTimeout(
      () =>
        alert(`Wykryto przeglądarkę Firefox!
Wciąż możesz korzystać z aplikacji natomiast z powodu braku wsparcia wydrukowane dokumenty PDF mogą być uszkodzone.`),
      10
    );
  }
};

const PrinterProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    detectFirefox();
  }, []);

  return <Provider configuration={{ useAsync: true }}>{children}</Provider>;
};

export default PrinterProvider;

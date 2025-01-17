'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { DocumentRef, PortalDocument } from 'react-pdf-printer';

import Footer from '../Footer';
import Header from '../Header';
import Park from '../Park';

const PortalDoc = () => {
  const documentRef = useRef<DocumentRef>(null);
  const searchParams = useSearchParams();

  const printKey = searchParams.get('print');
  const clicks = searchParams.get('clicks');

  useEffect(() => {
    if (!!printKey) {
      documentRef.current?.render();
    }
  }, [printKey, clicks]);

  return (
    <>
      <PortalDocument
        ref={documentRef}
        header={<Header />}
        footer={<Footer />}
        configuration={{
          pagination: {
            format: 'Strona #p z #t',
          },
        }}
      >
        {printKey && <Park parkKey={printKey} />}
      </PortalDocument>
    </>
  );
};

export default PortalDoc;

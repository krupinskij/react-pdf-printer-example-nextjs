'use client';

import { useRef } from 'react';
import { DocumentRef, Document } from 'react-pdf-printer';

import useQuery from '@/app/api/park/useQuery';

import Footer from '../Footer';
import Header from '../Header';
import Park from '../Park';
import Screen from '../Screen';

const PortalDoc = () => {
  const documentRef = useRef<DocumentRef>(null);
  const { data = [] } = useQuery({ select: (data) => data.map(({ key }) => key) });

  return (
    <Document
      ref={documentRef}
      header={<Header />}
      footer={<Footer />}
      screen={({ isRendering }) => (
        <Screen isLoading={isRendering} onRenderClick={() => documentRef.current?.render()} />
      )}
      title="Parki Narodowe w Polsce"
      renderOnInit={false}
    >
      {data.map((key) => (
        <Park key={key} parkKey={key} />
      ))}
    </Document>
  );
};

export default PortalDoc;

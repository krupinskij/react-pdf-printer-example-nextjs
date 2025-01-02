"use client";

import { DocumentRef, Document } from "react-pdf-printer";

import {
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Park from "../Park";
import Button from "../../Button";
import Header from "../Header";
import Footer from "../Footer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Screen from "../Screen";
import useQuery from "@/app/api/park/useQuery";

const PortalDoc = () => {
  const documentRef = useRef<DocumentRef>(null);
  const { data = [] } = useQuery();

  return (
    <Document
      ref={documentRef}
      header={<Header />}
      footer={<Footer />}
      screen={({ isRendering }) => (
        <Screen
          isLoading={isRendering}
          onRenderClick={() => documentRef.current?.render()}
        />
      )}
      title="Parki Narodowe w Polsce"
      renderOnInit={false}
    >
      {data.map(({ key }) => (
        <Park key={key} parkKey={key} />
      ))}
    </Document>
  );
};

export default PortalDoc;

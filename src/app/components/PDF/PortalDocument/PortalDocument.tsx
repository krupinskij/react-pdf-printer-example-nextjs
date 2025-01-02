"use client";

import { DocumentRef, PortalDocument, usePrinter } from "react-pdf-printer";

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

const PortalDoc = memo(
  () => {
    const documentRef = useRef<DocumentRef>(null);
    const searchParams = useSearchParams();

    const printKey = searchParams.get("print");
    const clicks = searchParams.get("clicks");

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
        >
          {printKey && <Park parkKey={printKey} />}
        </PortalDocument>
      </>
    );
  },
  () => false
);

export default PortalDoc;

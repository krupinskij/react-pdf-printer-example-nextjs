"use client";

import { DocumentRef, PortalDocument } from "react-pdf-printer";

import { useEffect, useRef } from "react";
import Park from "../Park";
import Header from "../Header";
import Footer from "../Footer";
import { useSearchParams } from "next/navigation";

const PortalDoc = () => {
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
      <PortalDocument ref={documentRef} header={<Header />} footer={<Footer />}>
        {printKey && <Park parkKey={printKey} />}
      </PortalDocument>
    </>
  );
};

export default PortalDoc;

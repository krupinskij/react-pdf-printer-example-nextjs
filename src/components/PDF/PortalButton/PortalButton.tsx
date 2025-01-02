'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MouseEvent, useCallback } from 'react';
import { usePrinter } from 'react-pdf-printer';

import Button from '@/components/Button';

type Props = {
  park: string;
};

const PortalDoc = ({ park }: Props) => {
  const { isRendering } = usePrinter();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const printKey = searchParams.get('print');
  const clicks = Number(searchParams.get('clicks')) || 0;

  const createQueryString = useCallback(
    (obj: object) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(obj).forEach(([name, value]) => {
        params.set(name, value);
      });

      return params.toString();
    },
    [searchParams]
  );

  const handlePrint = (event: MouseEvent<HTMLButtonElement>) => {
    const park = event.currentTarget.dataset.park || null;
    if (!!park) {
      router.push(pathname + '?' + createQueryString({ print: park, clicks: clicks + 1 }));
    }
  };

  return (
    <>
      <Button
        loading={isRendering && printKey === park}
        disabled={isRendering}
        data-park={park}
        onClick={handlePrint}
        size="sm"
      >
        Drukuj
      </Button>
    </>
  );
};

export default PortalDoc;

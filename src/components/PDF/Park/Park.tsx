import { useEffect } from 'react';
import { Page, Pages, usePrinter } from 'react-pdf-printer';

import useQuery from '@/app/api/park/[park]/useQuery';
import Cover from '@/components/Cover';
import Data from '@/components/Data';
import Pictures from '@/components/Pictures';

type Props = {
  parkKey: string;
};

export default function Park({ parkKey }: Props) {
  const { data } = useQuery(parkKey);
  const { subscribe, run } = usePrinter(parkKey);

  useEffect(() => {
    subscribe();
  }, []);

  useEffect(() => {
    if (!!data) {
      run();
    }
  }, [data]);

  if (!data) return null;

  return (
    <>
      <Page>
        <Cover {...data} key="cover" />
        <Data {...data} key="data" />
      </Page>
      <Pages>
        <Pictures {...data} key="pictures" />
      </Pages>
    </>
  );
}

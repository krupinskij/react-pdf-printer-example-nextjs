import Cover from "../../Cover";
import Data from "../../Data";
import Pictures from "../../Pictures";
import { Page, Pages, usePrinter } from "react-pdf-printer";
import useQuery from "@/app/api/park/detail/[park]/useQuery";
import { useEffect } from "react";

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

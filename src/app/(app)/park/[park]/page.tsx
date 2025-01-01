import styles from "./page.module.css";
import { query } from "./page.queries";
import Cover from "@/app/components/Cover";
import Data from "@/app/components/Data";
import Pictures from "@/app/components/Pictures";

export const runtime = "edge";

type Props = {
  params: Promise<{ park: string }>;
};

export default async function Park({ params }: Props) {
  const parkKey = (await params).park;
  const result = await query(parkKey);

  return (
    <div className={styles.page}>
      <Cover {...result} key="cover" />
      <Data {...result} key="data" />
      <Pictures {...result} key="pictures" />
    </div>
  );
}

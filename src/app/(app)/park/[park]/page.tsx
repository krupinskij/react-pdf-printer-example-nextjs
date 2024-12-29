import Image from "next/image";
import styles from "./page.module.css";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { query } from "./page.queries";
import Cover from "@/app/components/Cover";
import Data from "@/app/components/Data";

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
    </div>
  );
}

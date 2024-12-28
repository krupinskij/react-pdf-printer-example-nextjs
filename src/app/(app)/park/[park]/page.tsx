import Image from "next/image";
import styles from "./page.module.css";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export default async function Home() {
  return <div>PARK</div>;
}

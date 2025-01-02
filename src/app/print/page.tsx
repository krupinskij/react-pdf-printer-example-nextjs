import styles from "./page.module.css";
import Table, { Column } from "../components/Table";
import Link from "../components/Link";
import { PortalBtn, PortalDoc, StaticDoc } from "../components/PDF";
import { query } from "../api/park/query";

export default async function Page() {
  return <StaticDoc />;
}

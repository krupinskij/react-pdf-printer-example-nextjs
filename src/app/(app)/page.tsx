import Image from "next/image";
import styles from "./page.module.css";
import { query } from "./page.queries";
import Table, { Column } from "../components/Table";
import Button from "../components/Button";
import Link from "../components/Link";

export default async function Home() {
  const data = await query();

  const columns: Column[] = [
    {
      dataIndex: "logo",
      title: "",
      style: {
        minWidth: "25px",
      },
    },
    {
      dataIndex: "name",
      title: <span className={styles.column}>Nazwa</span>,
      style: {
        minWidth: "200px",
      },
    },
    {
      dataIndex: "year",
      title: (
        <span className={styles.column} title="Rok założenia">
          Rok zał.
        </span>
      ),
      align: "right",
      style: {
        minWidth: "100px",
      },
    },
    {
      dataIndex: "area",
      title: (
        <span className={styles.column} title="Powierzchnia w km²">
          Pow. (km²)
        </span>
      ),
      align: "right",
      style: {
        minWidth: "150px",
      },
    },
    {
      dataIndex: "print",
      title: "",
      align: "center",
      style: {
        minWidth: "150px",
      },
    },
  ];

  const dataSource = data.map((row) => ({
    id: row.key,
    logo: <img className={styles.logo} src={row.logo} />,
    name: (
      <Link className={styles.link} href={`/park/${row.key}`}>
        <span className={styles.name}>{row.name}</span>
      </Link>
    ),
    year: <span className={styles.cell}>{row.year}</span>,
    area: <span className={styles.cell}>{row.area}</span>,
    print: <Button size="sm">Drukuj</Button>,
  }));

  return (
    <Table
      className={styles.table}
      columns={columns}
      dataSource={dataSource}
      isLoading={false}
    />
  );
}

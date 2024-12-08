import Image from "next/image";
import styles from "./template.module.css";
import Navbar from "../components/Navbar";
import Link from "../components/Link";
import Menu from "../components/Menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Image
            src="/assets/logo/logo_mid.png"
            alt=""
            width="50"
            height="50"
          />
          Parki Narodowe w Polsce
          <Image
            src="/assets/logo/logo_mid.png"
            alt=""
            width="50"
            height="50"
          />
        </h1>
        <Navbar />
      </header>
      <aside className={styles.sidebar}>
        <Menu />
      </aside>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <span>
          <Link
            className={styles.link}
            translate="no"
            href="https://github.com/krupinskij/react-pdf-printer"
          >
            React PDF Printer
          </Link>
          &nbsp;| Parki Narodowe w Polsce
        </span>
        <Link
          className={styles.link}
          href="https://www.flaticon.com/free-icons/poland"
        >
          Ikona Polski autorstwa Agung Rama - Flaticon
        </Link>
      </footer>
    </>
  );
}

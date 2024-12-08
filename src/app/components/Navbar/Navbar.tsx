import Link from "../Link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} href="/" checkCurrent>
        Strona główna
      </Link>
      <Link className={styles.link} href="/print" checkCurrent>
        Wydrukuj wszystko
      </Link>
    </nav>
  );
}

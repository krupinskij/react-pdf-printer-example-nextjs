import Link from "../Link";
import styles from "./Menu.module.css";

export default function Menu() {
  const data: any[] = [];
  return (
    <ul className={styles.menu}>
      {data.map(({ id: city }) => (
        <li className={styles.item} key={city}>
          <Link className={styles.link} href={`/city/${city}`} checkCurrent>
            <img className={styles.img} src={`/assets/coa/city/${city}.svg`} />
            {city}
          </Link>
        </li>
      ))}
    </ul>
  );
}

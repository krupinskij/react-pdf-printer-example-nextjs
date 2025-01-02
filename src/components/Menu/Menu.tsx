import { query } from '@/app/api/park/query';

import Link from '../Link';
import styles from './Menu.module.css';

export const runtime = 'edge';

export default async function Menu() {
  const parks = await query();

  return (
    <ul className={styles.menu}>
      {parks.map(({ key, name, logo }) => (
        <li className={styles.item} key={key}>
          <Link className={styles.link} href={`/park/${key}`} checkCurrent>
            <img className={styles.img} src={logo} />
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

import { Park } from '@/model';

import Background from './Background';
import styles from './Cover.module.css';

type Props = Park;

const Cover = ({ name, logo, background }: Props) => {
  return (
    <section className={styles.cover}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{name}</h2>
      </div>
      <img className={styles.logo} src={logo} alt={`${name} logo`} height={300} width={300} />
      <Background {...background} />
    </section>
  );
};

export default Cover;

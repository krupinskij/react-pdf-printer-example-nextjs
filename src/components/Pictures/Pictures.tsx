import { Park } from '@/model';

import Image from '../Image';
import styles from './Pictures.module.css';

type Props = Park;

const Pictures = ({ pictures }: Props) => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.h3}>Zdjęcia</h3>
      <div className={styles.list} data-printer-divisible>
        {pictures.map((picture) => (
          <Image key={picture.src} {...picture} />
        ))}
      </div>
    </section>
  );
};

export default Pictures;

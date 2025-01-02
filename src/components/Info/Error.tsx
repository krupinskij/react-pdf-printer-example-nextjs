import classNames from 'classnames';
import Image from 'next/image';

import Button from '../Button';
import styles from './Info.module.css';

type Props = {
  className?: string;
  onClick?: () => void;
};

const Error = ({ onClick, className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Image className={styles.icon} src="/assets/icon/error.svg" alt="error" aria-hidden="true" />
      <span className={styles.text}>Błąd</span>
      <Button className={styles.button} onClick={() => onClick?.()}>
        Odśwież
      </Button>
    </div>
  );
};

export default Error;

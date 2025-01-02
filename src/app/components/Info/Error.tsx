import Image from "next/image";
import styles from "./Info.module.css";
import Button from "../Button";
import classNames from "classnames";

type Props = {
  className?: string;
  onClick?: () => void;
};

const Error = ({ onClick, className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Image
        className={styles.icon}
        src="/assets/icon/error.svg"
        alt="error"
        aria-hidden="true"
      />
      <span className={styles.text}>Błąd</span>
      <Button className={styles.button} onClick={() => onClick?.()}>
        t('refresh')
      </Button>
    </div>
  );
};

export default Error;

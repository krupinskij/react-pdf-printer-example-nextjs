import classNames from "classnames";
import styles from "./Info.module.css";
import Image from "next/image";

type Props = {
  text?: boolean;
  className?: string;
};

const Spinner = ({ text, className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Image
        className={styles.icon}
        src="/assets/icon/spinner.svg"
        alt="spinner"
        aria-hidden="true"
        width="100"
        height="100"
      />
      {text && <span className={styles.text}>Ładowanie...</span>}
    </div>
  );
};

export default Spinner;

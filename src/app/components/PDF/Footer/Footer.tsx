import { Pagination } from "react-pdf-printer";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Pagination className={styles.pagination} />
    </div>
  );
};

export default Footer;

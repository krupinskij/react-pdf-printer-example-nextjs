import { Pagination } from "react-pdf-printer";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Pagination />
    </div>
  );
};

export default Footer;

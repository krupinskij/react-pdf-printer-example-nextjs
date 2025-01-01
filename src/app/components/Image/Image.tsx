import { useRef } from "react";

import { Position } from "./Image.model";
import styles from "./Image.module.css";
import classNames from "classnames";

type Props = {
  src: string;
  caption: string;
  source: string;
  className?: string;
};

const Image = ({ src, caption, source, className }: Props) => {
  return (
    <figure className={styles.figure}>
      <img
        className={classNames(styles.img, className)}
        src={src}
        alt={caption}
      />
      <figcaption className={styles.caption}>
        {caption} |{" "}
        <a className={styles.source} href={source} target="_blank">
          Źródło
        </a>
      </figcaption>
    </figure>
  );
};

export default Image;

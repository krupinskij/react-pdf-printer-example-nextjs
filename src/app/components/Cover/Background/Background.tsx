import Image from "../../Image";
import styles from "./Background.module.css";

type Props = {
  src: string;
  caption: string;
  source: string;
};

const Background = ({ caption, source, src }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shadow} />
      <Image
        className={styles.img}
        src={src}
        caption={caption}
        source={source}
      />
    </div>
  );
};

export default Background;

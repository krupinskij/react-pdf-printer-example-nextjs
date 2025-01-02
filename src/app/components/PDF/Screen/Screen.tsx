import { useRouter } from "next/navigation";
import Button from "../../Button";
import styles from "./Screen.module.css";

type Props = {
  isLoading: boolean;
  onRenderClick?: () => void;
};

const Screen = ({ isLoading, onRenderClick }: Props) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <img src="/assets/logo/logo_lg.png" alt="" width="350" />
      <div className={styles.buttons}>
        <Button
          loading={isLoading}
          disabled={isLoading}
          size="lg"
          onClick={onRenderClick}
        >
          Drukuj
        </Button>
        <Button size="lg" variant="outlined" onClick={() => router.back()}>
          Powrót
        </Button>
      </div>
    </div>
  );
};

export default Screen;

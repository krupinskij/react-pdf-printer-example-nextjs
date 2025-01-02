'use client';

import classNames from 'classnames';

import styles from './Map.module.css';

type Props = {
  position: { x: number; y: number };
  className?: string;
};

const MapImage = ({ position, className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)} aria-hidden="true">
      <span className={styles.point} style={{ ['--x']: position.x, ['--y']: position.y } as any} />
      <img className={styles.map} src="/assets/icon/poland.svg" alt="Mapa Polski" />
    </div>
  );
};

export default MapImage;

'use client';

import classNames from 'classnames';
import { useEffect } from 'react';
import { usePrinter } from 'react-pdf-printer';

import styles from './Image.module.css';

type Props = {
  src: string;
  caption: string;
  source?: string;
  className?: string;
};

const Image = ({ src, caption, source, className }: Props) => {
  const { subscribe, run } = usePrinter(src);

  useEffect(() => {
    subscribe();
  }, []);

  return (
    <figure className={styles.figure}>
      <img
        className={classNames(styles.img, className)}
        src={src}
        alt={caption}
        onLoad={run}
        onError={run}
      />
      {source && (
        <figcaption className={styles.caption}>
          {caption} |{' '}
          <a className={styles.source} href={source} target="_blank">
            Źródło
          </a>
        </figcaption>
      )}
    </figure>
  );
};

export default Image;

import { query } from '@/app/api/park/[park]/query';
import Cover from '@/components/Cover';
import Data from '@/components/Data';
import Pictures from '@/components/Pictures';

import styles from './page.module.css';

export const runtime = 'edge';

type Props = {
  params: Promise<{ park: string }>;
};

export default async function Park({ params }: Props) {
  const parkKey = (await params).park;
  const result = await query(parkKey);

  return (
    <div className={styles.page}>
      <Cover {...result} key="cover" />
      <Data {...result} key="data" />
      <Pictures {...result} key="pictures" />
    </div>
  );
}

import classNames from "classnames";
import styles from "./Table.module.css";
import { Spinner } from "../Info";

export type Align = "left" | "center" | "right";

export type Column = {
  title: React.ReactNode;
  dataIndex: string;
  key?: string;
  style?: React.CSSProperties;
  align?: Align;
};

export type DataSource = {
  id: string | number;
  [key: string]: React.ReactNode;
};

type Props<T> = {
  columns: Column[];
  dataSource: T[];
  className?: string;
  isLoading?: boolean;
};

const Table = <T extends DataSource>({
  columns,
  dataSource,
  className,
  isLoading,
}: Props<T>) => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        { [styles.loading]: isLoading },
        className
      )}
    >
      <Spinner className={styles.spinner} />
      <table className={styles.table}>
        <colgroup>
          {columns.map(({ key, dataIndex, style }) => (
            <col key={key || dataIndex} style={style} />
          ))}
        </colgroup>
        <thead className={styles.thead}>
          <tr>
            {columns.map(({ key, title, dataIndex }) => (
              <th key={key || dataIndex}>
                <span className={styles.theadcell}>{title}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row) => (
            <tr className={styles.trow} key={row.id}>
              {columns.map(({ dataIndex, key, align }) => (
                <td key={key || dataIndex}>
                  <span
                    className={classNames(
                      styles.trowcell,
                      styles[align || "left"]
                    )}
                  >
                    {row[dataIndex]}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import { Park } from "@/model";
import styles from "./Data.module.css";
import MapImage from "./Map";
import classNames from "classnames";

type Props = Park;

const Data = ({ area, year, symbols, position }: Props) => {
  return (
    <section className={styles.wrapper}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.th} scope="row">
              Powierzchnia
            </th>
            <td className={styles.td}>{area} km²</td>
          </tr>
          <tr>
            <th className={styles.th} scope="row">
              Rok założenia
            </th>
            <td className={styles.td}>{year}</td>
          </tr>
          <tr>
            <th className={styles.th} scope="row">
              Symbol(e)
            </th>
            <td className={styles.td}>
              <ul>
                {symbols.map((symbol) => (
                  <li key={symbol.name}>
                    <a
                      className={classNames(styles.link, {
                        [styles.empty]: !symbol.url,
                      })}
                      href={symbol.url || "#"}
                      target="_blank"
                    >
                      {symbol.name}
                    </a>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <MapImage className={styles.map} position={position} />
    </section>
  );
};

export default Data;

import Link from "next/link";
import styles from "./CollectionItem.module.css";

const sluglify = string => string.toLowerCase().replaceAll(" ", "-");

export function CollectionItem({ imageSrc, title }) {
  return (
    <Link href={`arte-plastico/${sluglify(title)}`}>
      <article className={styles.collectionItem}>
        <picture className={styles.collectionItem__picture}>
          <img src={imageSrc} alt="colección de arte pop" />
        </picture>
        <h2 className={styles.collectionItem__title}>{title}</h2>
        <div>
          <h3>Grafito</h3>
          <h4>Formato</h4>
          <h4>Técnica</h4>
          <h4>Descripción</h4>
        </div>
        Ver Coleccion
      </article>
    </Link>
  );
}

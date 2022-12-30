import styles from "./CollectionsList.module.css";
import { CollectionItem } from "./CollectionItem/CollectionItem";
import { v4 as uuid } from "uuid";

const PICTURES = [
  {
    imageSrc: "/img/cuadro-1.jpg",
    title: "Retratos"
  },
  {
    imageSrc: "/img/cuadro-2.jpg",
    title: "Naturaleza"
  },
  {
    imageSrc: "/img/cuadro-3.jpg",
    title: "Abstracto"
  },
  {
    imageSrc: "/img/cuadro-3.jpg",
    title: "Arte optico"
  }
];

export function CollectionsList() {
  return (
    <section className={styles.collectionsList}>
      {PICTURES.map(picture => (
        <CollectionItem {...picture} key={uuid()} />
      ))}
    </section>
  );
}

import { Picture } from "../components/Picture";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const PICTURES = [
  {
    src: "/img/cuadro-1.jpg",
    title: "Retratos"
  },
  {
    src: "/img/cuadro-2.jpg",
    title: "Naturaleza"
  },
  {
    src: "/img/cuadro-3.jpg",
    title: "Abstracto"
  },
  {
    src: "/img/cuadro-3.jpg",
    title: "Arte optico"
  }
];

const STPictures = styled.section`
  padding: 1rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

export default function Home() {
  return (
    <>
      <h1>Hola, Soy Paula Bonavita, bienvenid@ a mi blog(?)</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi error
        iure mollitia, accusantium commodi ab numquam aperiam placeat illo
        dolore culpa incidunt voluptatibus fugiat quidem quas earum ad ducimus
        perferendis?
      </p>
      <STPictures>
        {PICTURES.map(pic => (
          <Picture key={uuid()} {...pic} />
        ))}
      </STPictures>
    </>
  );
}

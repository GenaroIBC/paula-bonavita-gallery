import { Picture } from "../components/Picture";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const PICTURES = [
  {
    src: "/img/cuadro-1.jpg",
    title: "Cuadro o=une"
  },
  {
    src: "/img/cuadro-2.jpg",
    title: "Cuadro o=une"
  },
  {
    src: "/img/cuadro-3.jpg",
    title: "Cuadro o=une"
  }
];

const STPictures = styled.section`
  padding: 1rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

export default function Index() {
  return (
    <STPictures>
      {PICTURES.map(pic => (
        <Picture key={uuid()} {...pic} />
      ))}
    </STPictures>
  );
}

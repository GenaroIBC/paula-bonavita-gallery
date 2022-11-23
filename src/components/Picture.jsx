import Image from "next/image";
import styled from "styled-components";

const STPicture = styled.article`
  display: flex;
  background-color: rgba(182, 0, 0);
  border-radius: 10px;
  padding: 1rem;
  justify-content: space-between;
  transition: 0.4s transform;
  cursor: pointer;

  h3 {
    font-size: 1.7rem;
  }

  &:hover {
    background-color: rgb(141, 0, 0);
    transform: scale(1.05);
  }

  picture {
    width: 200px;
  }
`;

export function Picture({ src, title }) {
  return (
    <STPicture>
      <picture>
        <img src={src} alt="colección de arte pop" />
      </picture>

      <h2>{title}</h2>
      <div>
        <h3>Grafito</h3>
        <h4>Formato</h4>
        <h4>Técnica</h4>
        <h4>Descripción</h4>
      </div>
    </STPicture>
  );
}

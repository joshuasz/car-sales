import styled from "styled-components";
import Center from "./Center";
import CarroBox from "./CarroBox";

const CarrosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;

export default function NewCarros({ carro }) {
  return (
    <Center>
      <Title>NUEVOS AUTOS</Title>
      <CarrosGrid>
        {carro?.length > 0 &&
          carro.map((carro) => (
            <div>
              <CarroBox {...carro}/>
            </div>
          ))}
      </CarrosGrid>
    </Center>
  );
}

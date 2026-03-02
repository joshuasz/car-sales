import Button from "./Button";
import ButtonLink from "./ButtonLink";
import Center from "./Center";
import styled from "styled-components";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  img{
    max-width: 100%
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function Featured({carro}) {
 
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
          <div>
          <Title>{carro.marca} {carro.modelo}</Title>
            <Desc>{carro.descripcion}</Desc>
            <ButtonLink href={'/carro/' + carro._id} outline={1} white={1}>VER MAS</ButtonLink>
          </div>
          </Column>
          <Column>
            <img src="https://next-carsales.s3.amazonaws.com/1713972200278.jpeg" alt=""/>
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
}

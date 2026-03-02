import styled from "styled-components";

import Link from "next/link";

const CarroWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 250px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
`;

const CarroInfoBox = styled.div`
  margin-top: 5px;
`;

const PrecioRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Precio = styled.div`
  font-size: 1.5rem;
  font-weight:bold;
`;

export default function CarroBox({
  _id,
  marca,
  modelo,
  descripcion,
  precio,
  images,
}) {
  const url = '/carro/'+_id;
  return (
    <CarroWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt="" />
        </div>
      </WhiteBox>
      <CarroInfoBox>
        <Title href={url}>
          {marca} {modelo}
        </Title>
        <PrecioRow>
          <Precio>${precio}</Precio>
        </PrecioRow>
      </CarroInfoBox>
    </CarroWrapper>
  );
}

import CarroImages from "@/components/CarroImages";
import Center from "@/components/Center";
import CotizarButton from "@/components/CotizarButton";
import Header from "@/components/Header";
import WhiteBox from "@/components/WhiteBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Carro } from "@/models/Carro";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  margin-top: 40px;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
  
`;

export default function CarroPage({ carro }) {
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <CarroImages images={carro.images}/>
          </WhiteBox>
          <div>
            <h1>
              {carro.marca} {carro.modelo}
            </h1>
            <PriceRow>
              <div>
                <Price>${carro.precio}</Price>
              </div>
              <div>
                
              </div>
            </PriceRow>
            <p>{carro.descripcion}</p>
            
            <CotizarButton/>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const carro = await Carro.findById(id);
  return {
    props: {
      carro: JSON.parse(JSON.stringify(carro)),
    },
  };
}

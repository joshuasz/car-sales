import CarrosGrid from "@/components/CarrosGrid";
import Center from "@/components/Center";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Carro } from "@/models/Carro";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5rem;
`;

export default function CarrosPage({carros}) {
    console.log(carros);
  return (
    <>
      <Header />
      <Center>
        <Title>Todos los autos</Title>
        <CarrosGrid carros={carros}/>
      </Center>
    </>
  );
}

export async function getServerSideProps(){
    await mongooseConnect();
    const carros = await Carro.find({},null, {sort:{'_id':-1}});
    return{
        props:{
            carros: JSON.parse(JSON.stringify(carros)),
        }
    };
}
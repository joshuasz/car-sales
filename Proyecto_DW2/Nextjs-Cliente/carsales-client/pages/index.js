import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewCarros from "@/components/NewCarros";
import { mongooseConnect } from "@/lib/mongoose";
import { Carro } from "@/models/Carro";

export default function HomePage({featuredCarro, newCarros}){
  return(
    <div>
      <Header />
      <Featured carro={featuredCarro}/>
      <NewCarros carro={newCarros} />
    </div>
  );
}

export async function getServerSideProps(){
  const featuredCarroId = '6629241c7207a6dc362acb27';
  mongooseConnect();
  const featuredCarro = await Carro.findById(featuredCarroId);
  const newCarros = await Carro.find({}, null, {sort: {'_id' : -1}, limit:10});
  return {
    props: {
      featuredCarro: JSON.parse(JSON.stringify(featuredCarro)),
      newCarros: JSON.parse(JSON.stringify(newCarros)),
    }
  };
}
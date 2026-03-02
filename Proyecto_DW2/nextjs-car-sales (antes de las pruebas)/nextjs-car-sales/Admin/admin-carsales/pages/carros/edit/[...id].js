import CarroForm from "@/components/CarroForm";
import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditarCarroPage(){
    const [carroInfo, setCarroInfo] = useState(null);
    const router = useRouter();
    const {id} = router.query;
    useEffect(() =>{
        if (!id) {
            return;
        }
      axios.get(`/api/carros?id=`+id).then(response => {
        setCarroInfo(response.data);
      });
    }, [id]);
    return(
        <Layout>
            <h1>Editar auto</h1>
            {carroInfo && (
                <CarroForm {...carroInfo}/>
            )}
            
        </Layout>
    )
}
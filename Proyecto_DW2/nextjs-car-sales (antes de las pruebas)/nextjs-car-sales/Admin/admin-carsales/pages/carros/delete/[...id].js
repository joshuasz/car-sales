import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EliminarCarro(){
    const router = useRouter();
    const [carroInfo,setCarroInfo] = useState();
    const {id} = router.query;
    useEffect(() => {
        if (id) {
          axios
            .get(`/api/carros?id=${id}`)
            .then((response) => {
              setCarroInfo(response.data);
            })
            .catch((error) => {
              console.error("Error al obtener el carro:", error);
            });
        }
      }, [id]);
    
    function goBack(){
        router.push(`/carros`);
    }
    async function eliminarCarro() {
        await axios.delete(`/api/carros?id=`+id);
        goBack();
    }
    return(
        <Layout>
            <h1 className="text-center">Realmente desea eliminar {carroInfo?.marca}?</h1>
            <div className="flex gap-2 justify-center">
            <button
            onClick={eliminarCarro} 
            className="btn-red">SI</button>
            <button 
                className="btn-default" 
                onClick={goBack}>
                NO
            </button>
            </div>
            
        </Layout>
    );
}
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

export default function CarroForm({
    _id,
    marca: existingMarca,
    modelo: existingModelo,
    año: existingAño,
    descripcion: existingDescripcion,
    precio: existingPrecio,
    images: existingImages,
  }){
    const [marca, setMarca] = useState(existingMarca || ``);
    const [modelo, setModelo] = useState(existingModelo || ``);
    const [año, setAño] = useState(existingAño || '');
    const [descripcion, setDescripcion] = useState(existingDescripcion || ``);
    const [precio, setPrecio] = useState(existingPrecio || ``);
    const [images, setImages] = useState(existingImages || []);
    const [goToCarros,setGoToCarros] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const router = useRouter();
    
    async function crearCarro(ev){
        ev.preventDefault();
        const data = {marca,modelo,año,descripcion,precio, images};
        if (_id) {
            //actualizar
            await axios.put(`/api/carros`, {...data,_id});
        }else{
            //Crear
            await axios.post(`/api/carros`, data);
        }
        setGoToCarros(true);
    }
    if (goToCarros) {
        router.push(`/carros`);
    }

    const handleAñoChange = (ev) => {
        const añoValue = ev.target.value;
        if (/^\d{4}$/.test(añoValue)) {
          setAño(añoValue);
        }
      };

      async function uploadFotos(ev){
        const files = ev.target?.files;
        if (files?.length > 0) {
          setIsUploading(true);
          const data = new FormData();
          for(const file of files){
            data.append('file', file)
          }
          const res = await axios.post('/api/upload', data);
          setImages(oldImages =>{
            return [...oldImages, ...res.data.links];
          });
          setIsUploading(false);
        }
      }
      function uploadFotosOrder(images){
        setImages(images);
      }
    return (
      
        <form onSubmit={crearCarro}>
          

          <label>Marca del auto</label>
          <input
            type="text"
            placeholder="Marca del auto"
            value={marca}
            onChange={(ev) => setMarca(ev.target.value)}
          />

          <label>Modelo del auto</label>
          <input
            type="text"
            placeholder="Modelo del auto"
            value={modelo}
            onChange={(ev) => setModelo(ev.target.value)}
          />

          <label>Año del auto</label>
          <input
            type="text"
            placeholder="Año del auto"
            value={año}
            onChange={(ev) => setAño(ev.target.value)}
        />

          <label>Descripción del auto</label>
          <textarea
            placeholder="Descripción del auto"
            value={descripcion}
            onChange={(ev) => setDescripcion(ev.target.value)}
          />

          <label>Precio del auto (en USD)</label>
          <input
            type="number"
            placeholder="Precio del auto"
            value={precio}
            onChange={(ev) => setPrecio(ev.target.value)}
          />

        <label>
            Imagen 
        </label>
        {isUploading && (
          <div>
            <Spinner />
          </div>
        )}
        <div className="mb-2 flex flex-wrap gap-3">
         <ReactSortable className="flex flex-wrap gap-2" list={images} setList={uploadFotosOrder}>
         {!!images?.length && images.map(link => (
           <div key={link} className="h-24">
            <img src={link} alt="" className="rounded-lg"/>
           </div>
         ))}
         </ReactSortable> 
         

          <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-gray-500 rounded-lg bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
          </svg>
          <div>
            Subir imagen
          </div>
            <input type="file" onChange={uploadFotos} className="hidden"/>
          </label>
          
        </div>

          <button type="submit" className="btn-primary m-40 p-40">
            Guardar
          </button>
        </form>
      
    );
}
import { mongooseConnect } from "@/lib/moongose";
import { Carro } from "@/models/Carros";

export default async function handle(req, res) {
    const { method } = req;
    await mongooseConnect();

    if (method === `GET`) {
        if (req.query?.id) {
            res.json(await Carro.findOne({_id:req.query.id}));
        }else{
            res.json(await Carro.find());
        }
    }

    if (method === 'POST') {
        const { marca, modelo, año, descripcion, precio, images,  } = req.body;
        const carroDoc = await Carro.create({
            marca, modelo, año, descripcion, precio, images, 
        });
        res.json(carroDoc);
    }

    if (method === 'PUT') {
        const { marca, modelo, año, descripcion, precio, images, _id } = req.body;
        await Carro.updateOne({_id}, {marca, modelo, año, descripcion, precio, images, });
        res.json(true);
    }

    if (method === `DELETE`) {
        if (req.query?.id) {
           await Carro.deleteOne({_id:req.query?.id});
           res.json(true); 
        }
    }
}
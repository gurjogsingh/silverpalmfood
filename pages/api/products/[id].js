import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";


export default async function handler(req, res) {
    
    const {method, query: {id}, cookies} = req;


    const token = cookies.token;

    dbConnect();

    if (method === "GET"){
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);

        } catch(error) {
            res.status(500).json(error);
        }

    }

    if (method === "PUT"){
        if(!token || token !== process.env.token){
            return res.status(401).json("Not authorized!");
        }

        try {
            const product = await Product.findByIdAndUpdate(id, req.body, {new: true,});
            res.status(201).json(product);

        } catch(error){
            res.status(500).json(error);
        }

    }

    if (method === "DELETE"){
        if(!token || token !== process.env.token){
            return res.status(401).json("Not authorized!");
        }
        try {
            await Product.findByIdAndDelete(id);
            res.status(204).json("Deleted!");

        } catch(error){
            res.status(500).json(error);
        }

    }




  }
  
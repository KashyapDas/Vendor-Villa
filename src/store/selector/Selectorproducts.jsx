import axios from "axios";
import { selectorFamily } from "recoil";

export const SelectorProducts = selectorFamily({
    key : "SelectorProducts",
    get : ()=>async()=>{
        try{
            const response = await axios.get("https://fakestoreapi.com/products");
            return response.data;
        }catch(err){
            console.log(err)
            throw err;
        }
    }
})
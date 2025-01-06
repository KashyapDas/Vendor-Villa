import axios from "axios";
import { selectorFamily } from "recoil";

export const SelectorProducts = selectorFamily({
    key : "SelectorProducts",
    get : (currPath)=>async()=>{
        try{
            if(currPath.pathname == '/')
            {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                return response.data;
            }
            else if(currPath.pathname === '/categories')
            {
                const response = await axios.get(`https://fakestoreapi.com/products${currPath.pathname}`);
                return response.data;
            }
            
        }catch(err){
            console.log(err)
            throw err;
        }
    }
})
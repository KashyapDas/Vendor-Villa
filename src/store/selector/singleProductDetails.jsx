import axios from "axios";
import { selectorFamily } from "recoil";

export const singleProductDetails = selectorFamily({
    default : "singleProductDetails",
    get : (id) => async ()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    }
})
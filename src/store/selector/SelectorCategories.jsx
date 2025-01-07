import axios from "axios";
import { selectorFamily } from "recoil";

export const selectorCategories = selectorFamily({
    key : "selectorCategories",
    get : (categoryName)=>async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
        return response.data;
    }
})
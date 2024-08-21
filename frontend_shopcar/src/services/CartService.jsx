import * as http from "../common/http-common";

const URLAPI = `http://localhost:8080/cart`;

export const addToCart = async(CarId, quantity) =>{
    try {
        const res = await http.get(`${URLAPI}/${CarId}/${quantity}`);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
} 
export const updateQuantity = async(cartId, type) => {
    try {
        const res = await http.put(`${URLAPI}/${cartId}/${type}`);
        return [res,null];
    } catch (error) {
        return[null, error];
    }
}

export const findAllData = async() => {
    try{
        const res = await http.get(`${URLAPI}`);
        return [res , null];
    } catch(error){
        return[null, error];
    }
}

export const remove = async (id) => {
    try{
      const res = await http.remove(`${URLAPI}/${id}`);
      return [res, null];
    }catch (error){
      return [null, error];
    }
  }
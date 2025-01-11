import axios from "axios";

const getDetailProduct = (callback, id) => {
    axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            console.log("API Response:", res.data);
            callback(res.data);
        })
        .catch((err) => {
            console.error("API Error:", err);
        });
  };
  
  export default getDetailProduct;
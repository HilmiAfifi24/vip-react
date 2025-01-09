import axios from "axios";

const getProduct = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log("API Response:", res.data); // Debugging untuk memastikan data diterima
      callback(res.data);
    })
    .catch((err) => {
      console.error("API Error:", err);
    });
};

export default getProduct;

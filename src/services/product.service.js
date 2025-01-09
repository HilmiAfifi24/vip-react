import axios from "axios";

const getProduct = (callback, data) => {
  axios
    .get("https://fakestoreapi.com/products", data)
    .then((res) => {
      console.log("API Response:", res.data); // Debugging untuk memastikan data diterima
      callback(res.data);
    })
    .catch((err) => {
      console.error("API Error:", err);
    });
};

export default getProduct;

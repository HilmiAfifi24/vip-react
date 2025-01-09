import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token); // Kirim status sukses dan token
    })
    .catch((err) => {
      callback(false, err); // Kirim status gagal dan responsenya
    });
};


export const getUsername = (token) => {
    const decodedToken = jwtDecode(token);
    return decodedToken.user; 
}
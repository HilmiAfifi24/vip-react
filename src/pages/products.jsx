import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useState } from "react";
import getProduct from "../services/product.service";
import { useLogin } from "../hooks/useLogin";


const ProductPage = () => {
  const navigate = useNavigate();

  // State untuk keranjang dan produk
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();


  // Menghitung total harga keranjang
  useEffect(() => {
    setTotalPrice(
      cart.reduce((total, item) => total + item.price * item.qty, 0)
    );
  }, [cart]);

  // Fetch data produk dari API
  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  const handleAddToCart = (id) => {
    setCart((prevCart) => {
      const product = products.find((prod) => prod.id === id); // Ambil produk lengkap
      const itemExist = prevCart.find((item) => item.id === id);
      if (itemExist) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }]; // Menyimpan produk lengkap
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-between items-center bg-blue-600 text-white px-10 py-4 shadow-md">
        <div>{username}</div>
        <Button
          classname="bg-black text-white ml-5 px-6 font-semibold rounded-md h-10"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <div className="flex flex-row justify-center py-5 px-3">
        {/* Bagian CardProduct */}
        <div className="grid grid-cols-2 flex-row w-4/6">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  handleAddToCart={() => handleAddToCart(product.id)}
                />
              </CardProduct>
            ))}
        </div>

        {/* Bagian Cart */}
        <div className="w-2/6 mt-1">
          <h1 className="text-2xl font-bold">Cart</h1>
          <table className="text-left table-auto border-separate">
            <thead>
              <tr>
                <th>Product</th>
                <th className="px-4">Price</th>
                <th className="px-4">Quantity</th>
                <th className="px-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-1 py-2">{item.title}</td>
                  <td className="px-4 p y-2">
                    {item.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td className="px-4 py-2">{item.qty}</td>
                  <td className="px-4 py-2">
                    {(item.qty * item.price).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-xl font-semibold">
            Total:{" "}
            {totalPrice.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
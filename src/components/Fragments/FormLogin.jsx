import { useState } from "react";
import { login } from "../../services/auth.service";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value.trim();
    const password = e.target.password.value.trim();

    // Validasi input
    if (!username || !password) {
      setLoginFailed("Username and password are required.");
      return;
    }

    const data = { username, password };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res); 
        navigate("/products");
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      {loginFailed && (
        <p className="text-red-500 bg-red-100 p-2 rounded">
          {loginFailed}
        </p>
      )}
      <div className="mt-4">
        <InputForm
          label="Username"
          name="username"
          placeholder="Please enter your username"
          type="text" // Ubah ke type "text"
        />
      </div>
      <div className="mt-4">
        <InputForm
          label="Password"
          name="password"
          placeholder="Please enter your password"
          type="password"
        />
      </div>
      <div className="mt-6">
        <Button
          classname="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500"
          type="submit"
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;

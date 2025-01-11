import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, type }) => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-blue-700 font-bold text-2xl mb-2">{title}</h1>
        <p className="text-sm">Welcome Back! Please enter your details</p>
        {children}
        {type === "login" ? (
          <>
            <p className="text-sm mt-2 text-center">
              Dont have an account?
              <Link to="/registrasi" className="mx-2 font-bold text-blue-600">
                Sign Up
              </Link>
            </p>
          </>
        ) : (
          <>
            <p className="text-sm mt-2 text-center">
              Already have an account?
              <Link to="/login" className="mx-2 font-bold text-blue-600">
                Login
              </Link>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default AuthLayout;

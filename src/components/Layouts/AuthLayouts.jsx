const AuthLayout = ({ children, title }) => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-blue-700 font-bold text-2xl mb-2">{title}</h1>
        <p className="text-sm">Welcome Back! Please enter your details</p>
        {children}
      </div>
    </>
  );
};

export default AuthLayout;

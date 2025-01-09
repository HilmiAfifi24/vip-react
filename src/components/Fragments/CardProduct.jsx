import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-lg mx-auto sm:mx-5 my-2 flex flex-col justify-between hover:scale-105 transition-all duration-300">
        {children}
      </div>
    </>
  );
};

const Header = ({ image }) => {
  return (
    <>
      <a href="">
        <img
          className="p-8 rounded-t-lg w-full h-72 object-cover"
          src={image}
          alt="yaya"
        />
      </a>
    </>
  );
};

const Body = ({ name, children }) => {
  return (
    <>
      <div className="px-8 pb-5 w-full h-full">
        <a href="">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {name}
          </h5>
          <p className="text-sm text-white">{children}</p>
        </a>
      </div>
    </>
  );
};

const Footer = ({price, handleAddToCart, id}) => {
  return (
    <>
      <div className="flex items-center justify-between px-8 pb-5">
        <span className="text-xl font-bold text-white">
          {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
        </span>
        <Button
          classname="bg-blue-700 px-3 h-10 rounded-md font-semibold text-white text-md"
          onClick={() => handleAddToCart(id)}
        >
          Add To Cart
        </Button>
      </div>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

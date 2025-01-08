const Input = ({ type, placeholder, name }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        className="block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm: text-sm mb-4"
      />
    </>
  );
};

export default Input;

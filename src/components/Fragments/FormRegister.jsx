import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <>
      <form action="">
        <div className="mt-4">
          <InputForm
            name="username"
            label="Username"
            placeholder="Enter your username"
            type="text"
          />
        </div>

        <div className="mt-4">
          <InputForm
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </div>

        <div className="mt-4">
          <InputForm
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
          />
        </div>
        <Button
          type="submit"
          classname="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500"
        >
          Register
        </Button>
      </form>
    </>
  );
};

export default FormRegister;

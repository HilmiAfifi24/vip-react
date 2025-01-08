import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <>
      <form action="">
        <div className="mt-4">
            <InputForm label="Username" name="username" placeholder="please enter your username" type="username"/>
        </div>
        <div className="mt-4">
            <InputForm label="Password" name="password" placeholder="please enter your password" type="password"/>
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
    </>
  );
};

export default FormLogin;

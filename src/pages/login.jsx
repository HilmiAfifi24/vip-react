import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";


const LoginPage = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <AuthLayout title="Login">
                    <FormLogin/>
                </AuthLayout>
            </div>
        </>
    )
}

export default LoginPage;
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <AuthLayout title="Register">
                    <FormRegister/>
                </AuthLayout>
            </div>
        </>
    )
}

export default RegisterPage;
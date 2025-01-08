import Input from "./Input";
import Label from "./Label";

const InputForm = ({name, label, placeholder, type}) => {
    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} placeholder={placeholder} type={type}/>
        </>
    )
}

export default InputForm;
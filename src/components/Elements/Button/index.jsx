const Button = ({children, classname, type}) => {
    return (
        <>
            <button type={type} className={classname}>{children}</button>
        </>
    )
}

export default Button;
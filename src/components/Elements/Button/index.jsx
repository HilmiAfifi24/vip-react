const Button = ({children, classname, type, onClick}) => {
    return (
        <>
            <button type={type} className={classname} onClick={onClick}>{children}</button>
        </>
    )
}

export default Button;
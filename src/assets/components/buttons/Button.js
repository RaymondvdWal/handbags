

function Button({ children,clickHandler,type,disabled }) {
    return(
    <button type={type} onClick={clickHandler} disabled={disabled}>
        {children}
    </button>
)
}

export default Button;
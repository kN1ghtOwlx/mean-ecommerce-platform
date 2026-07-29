function Button({
    type = "button",
    children,
    onClick,
}) {
    return (
        <button
            type={type}
            className="btn"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
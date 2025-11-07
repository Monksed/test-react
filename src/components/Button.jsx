import './Button.scss';

function Button({ children, color, textColor, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color, color: textColor }}
            className="btn-outline"
        >
            {children}
        </button>
    );
}

export default Button;
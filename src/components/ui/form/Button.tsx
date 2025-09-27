import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={`${styles.button} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

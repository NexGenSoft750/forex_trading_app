import styles from "./Input.module.scss";

type InputProps = {
    label?: string;
    id?: string;
    type?: string;
    className?: string;
}

const Input = ({
    label,
    id,
    type = "text",
    className = "",
}: InputProps) => {
    return (
        <div className={styles.inputWrapper}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                className={`${styles.input} ${className}`}
            />
        </div>
    );
};

export default Input;

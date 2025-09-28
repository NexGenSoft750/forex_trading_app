import styles from "./Textarea.module.scss";

interface TextareaProps {
    label?: string;
    placeholder?: string;
    rows?: number;
    className?: string;
}

const Textarea = ({ label, placeholder, rows = 4, className = "" }: TextareaProps) => {
    return (
        <div className={`${styles.inputWrapper} ${className}`}>
            {label && <label className={styles.label}>{label}</label>}
            <textarea
                className={styles.input}
                placeholder={placeholder}
                rows={rows}
            />
        </div>
    );
};

export default Textarea;

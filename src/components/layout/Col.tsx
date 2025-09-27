import styles from "./Col.module.scss";

type RowProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export default function Col({ children, style }: RowProps) {
    return (
        <div className={styles.col} style={style}>
            {children}
        </div>
    );
}
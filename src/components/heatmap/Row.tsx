import styles from "./Row.module.scss";

type RowProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export default function Row({ children, style }: RowProps) {
    return (
        <div className={styles.row} style={style}>
            {children}
        </div>
    );
}
import styles from './Table.module.scss';

export default function Table({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) {
    return (
        <>
            <table
                className={styles.table}
                style={style}
            >
                {children}
            </table>
        </>
    );
}
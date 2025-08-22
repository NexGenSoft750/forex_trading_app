import styles from './Th.module.scss';

export default function Th({
    children,
    color = "#ffffff",
    colSpan = 1,
}: { children: React.ReactNode, color?: string, colSpan?: number }) {
    return (
        <>
            <th
                colSpan={colSpan}
                className={styles.th}
                style={{ color: color }}
            >
                {children}
            </th>
        </>
    );
}
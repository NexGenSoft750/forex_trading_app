import styles from './Td.module.scss';

export default function Td({
    children,
    color = "#000000",
    bgColor = "#EAEAEA",
    light = false,
    bold = false
}: { children: React.ReactNode, color?: string, bgColor?: string, light?: boolean, bold?: boolean }) {
    return (
        <>
            <td
                className={`${styles.td} ${light ? styles.light : ''} ${bold ? styles.bold : ''}`}
                style={{
                    color: color,
                    backgroundColor: bgColor
                }}
            >
                {children}
            </td>
        </>
    );
}
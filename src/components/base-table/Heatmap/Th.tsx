import styles from './Th.module.scss';

export default function Th({
    children,
    color = '#000000',
    bgColor = "#ffffff",
    borderColor,
    colSpan = 1,
    rowSpan = 1,
    textDecoration = 'default',
}: {
    children?: React.ReactNode;
    color?: string;
    colSpan?: number;
    rowSpan?: number;
    textDecoration?: 'default' | 'underline';
    bgColor?: string;
    borderColor?: string;
}) {
    return (
        <th
            colSpan={colSpan}
            rowSpan={rowSpan}
            className={`${styles.th} ${textDecoration === 'underline' ? styles['th--underline'] : ''}`}
            style={{
                color,
                border: `3px solid ${borderColor}`,
                ...(bgColor ? { backgroundColor: bgColor, ['--border-top-color' as any]: bgColor } : {}),
            }}
        >
            {children}
        </th>
    );
}

import styles from './Th.module.scss';

export default function Th({
    children,
    color = '#000000',
    bgColor,
    colSpan = 1,
    textDecoration = 'default',
}: { 
    children?: React.ReactNode; 
    color?: string; 
    colSpan?: number; 
    textDecoration?: 'default' | 'underline'; 
    bgColor?: string 
}) {
    return (
        <th
            colSpan={colSpan}
            className={`${styles.th} ${textDecoration === 'underline' ? styles['th--underline'] : ''}`}
            style={{
                color,              
                ...(bgColor ? { backgroundColor: bgColor } : {}),
            }}
        >
            {children}
        </th>
    );
}

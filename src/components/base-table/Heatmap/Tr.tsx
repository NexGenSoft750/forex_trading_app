import styles from './Tr.module.scss';

export default function Tr({
    children,
    style,
    equalWidth = false,
}: { children: React.ReactNode, style?: React.CSSProperties, equalWidth?: boolean }) {
    return (
        <>
            <tr className={`${equalWidth ? styles.equalWidth : ''}`} style={style}>
                {children}
            </tr>
        </>
    );
}
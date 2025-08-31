import styles from './Tbody.module.scss';

export default function Tbody({
    children,
    fullBorders = false,
}: { children: React.ReactNode, fullBorders?: boolean; }) {
    return (
        <>
            <tbody className={`${styles.tbody} ${fullBorders ? styles['tbody-full-borders'] : ''}`}>
                {children}
            </tbody>
        </>
    );
}
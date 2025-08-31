import styles from './Tbody.module.scss';

export default function Tbody({
    children,
}: { children: React.ReactNode }) {
    return (
        <>
            <tbody className={styles.tbody}>
                {children}
            </tbody>
        </>
    );
}
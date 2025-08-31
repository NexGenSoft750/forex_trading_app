import styles from './Thead.module.scss';

export default function Thead({
    children,
    bgColor = '#fffffff',
}: {
    children: React.ReactNode,
    bgColor?: string,
}) {
    return (
        <>
            <thead className={styles.thead} style={{ backgroundColor: bgColor }}>
                {children}
            </thead>
        </>
    );
}
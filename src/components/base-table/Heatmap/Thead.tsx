import styles from './Thead.module.scss';

export default function Thead({
    children,
    borderColor,
}: {
    children: React.ReactNode;
    bgColor?: string | null;
    borderColor?: string | null;
}) {
    return (
        <thead
            className={styles.thead}
        >
            {children}
        </thead>
    );
}
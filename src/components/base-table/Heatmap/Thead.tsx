import styles from './Thead.module.scss';

export default function Thead({
    children,
    bgColor,
}: {
    children: React.ReactNode;
    bgColor?: string | null;
}) {
    return (
        <thead
            className={styles.thead}
            style={{
                ...(bgColor
                    ? {
                        backgroundColor: bgColor,
                        ['--border-color' as any]: bgColor,
                    }
                    : {}),
            }}
        >
            {children}
        </thead>
    );
}
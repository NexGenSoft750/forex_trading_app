import styles from './IconWithText.module.scss';

type IconWithTextProps = {
    children: React.ReactNode;
}

export default function IconWithText({ children }: IconWithTextProps) {
    return (
        <div className={styles.iconWithText}>
            {children}
        </div>
    );
}
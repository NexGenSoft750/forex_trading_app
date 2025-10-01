import styles from './Tab.module.scss';

type TabProps = {
    text: string;
    smallText?: string;
    border: "curve" | "rounded";
    isActive?: boolean;
    onClick: (tabName: string) => void;
};

export default function Tab({ text, smallText, border, isActive = false, onClick }: TabProps) {
    return (
        <div
            className={`
                ${styles.tab} 
                ${styles[`tab--${border}`]} 
                ${isActive ? styles['tab--active'] : ''}
            `}
            onClick={() => onClick(text)}
        >
            <span className={styles.tab__title}>
                {text}
                {smallText ?
                    <span className={styles.tab__smallText}> {smallText}</span>
                    : ''
                }
            </span>
        </div>
    );
}
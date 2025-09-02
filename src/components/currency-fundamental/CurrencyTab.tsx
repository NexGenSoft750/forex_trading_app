import { TabName } from '@/types/TabName';
import styles from './CurrencyTab.module.scss';

type CurrencyFundamentalTabProps = {
    text: TabName;
    smallText?: string;
    border: "curve" | "rounded";
    isActive?: boolean;
    onClick: (tabName: TabName) => void;
};

export default function CurrencyTab({ text, smallText, border, isActive = false, onClick }: CurrencyFundamentalTabProps) {
    return (
        <div
            className={`
                ${styles.currencyTab} 
                ${styles[`currencyTab--${border}`]} 
                ${isActive ? styles['currencyTab--active'] : ''}
            `}
            onClick={() => onClick(text)}
        >
            <span className={styles.currencyTab__title}>
                {text}
                {smallText ?
                    <span className={styles.currencyTab__smallText}> {smallText}</span>
                    : ''
                }
            </span>
        </div>
    );
}
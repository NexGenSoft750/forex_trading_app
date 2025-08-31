import styles from './CurrencyPanelContent.module.scss';

type CurrencyPanelContentProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export default function CurrencyPanelContent({ children, style }: CurrencyPanelContentProps) {
    return (
        <>
            <div
                className={styles.currencyPanelContent}
                style={style}
            >
                {children}
            </div>
        </>
    );
}
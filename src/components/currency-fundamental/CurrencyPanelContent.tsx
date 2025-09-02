import styles from './CurrencyPanelContent.module.scss';

type CurrencyPanelContentProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    light?: boolean
}

export default function CurrencyPanelContent({ children, style, light = false }: CurrencyPanelContentProps) {
    return (
        <>
            <div
                className={`${styles.currencyPanelContent} ${light ? styles.lightVersion : ''}`}
                style={style}
            >
                {children}
            </div>
        </>
    );
}
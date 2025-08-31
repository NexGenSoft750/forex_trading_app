import styles from './CurrencyPanelSection.module.scss';

type Rounded =  'top' | 'full';

type CurrencyPanelSectionProps = {
    children: React.ReactNode;
    panelHeading: string;
    rounded?: Rounded;
}

export default function CurrencyPanelSection({ children, panelHeading, rounded = 'full' }: CurrencyPanelSectionProps) {
    const getRoundedClass = (rounded: Rounded): string =>
        styles[`panelSection__header--rounded-${rounded}`] || "";
    
     
    return (
        <>
            <div className={styles.panelSection}>
                <div
                    className={
                        `${styles.panelSection__header} 
                        ${getRoundedClass(rounded)}`
                    }
                >
                    {panelHeading}
                </div>
                <div className={styles.panelSection__body}>
                    {children}
                </div>
            </div>
        </>
    );
}
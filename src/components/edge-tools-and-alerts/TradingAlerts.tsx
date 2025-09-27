import styles from './TradingAlerts.module.scss';

type TradingAlertsProps = {
    children: React.ReactNode;
};

const TradingAlerts = ({ children }: TradingAlertsProps) => {
    return (
        <>
            <div className={styles.tradingAlerts}>
                {children}
            </div>
        </>
    );
}

export default TradingAlerts;
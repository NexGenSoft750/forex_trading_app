import styles from './MetricCard.module.scss';
import DashboardOverviewCardIcon from './DashboardOverviewCardIcon';
import IconWithText from './IconWithText';

interface MetricCardProps {
    icon: string;
    heading: string;
    totalText: string;
    newText: string;
    totalCount: number;
    newCount: number;
}

const MetricCard = ({ icon, heading, totalText, newText, totalCount, newCount }: MetricCardProps) => {
    return (
        <>
            <div className={styles.metricCard}>
                <h4 className={styles.metricCard__totalText}>{totalText} =
                    <span className={styles.metricCard__totalCount}> {totalCount}</span>
                </h4>
                <IconWithText>
                    <DashboardOverviewCardIcon
                        icon={icon}
                        alt={heading}
                    />
                    <h1 className={styles.metricCard__heading}>{heading}</h1>
                </IconWithText>
                <h4 className={styles.metricCard__newText}>{newText} =
                    <span className={styles.metricCard__newCount}> {newCount}</span>
                </h4>
            </div>
        </>
    );
};

export default MetricCard; 
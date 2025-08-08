import styles from './NavigationCard.module.scss';
import IconWithText from './IconWithText';
import DashboardOverviewCardIcon from './DashboardOverviewCardIcon';

interface NavigationCardProps {
    icon: string;
    heading: string;
    className?: string;
}

const NavigationCard = ({ icon, heading, className = '' }: NavigationCardProps) => {
    return (
        <div className={`${styles.navigationCard} ${className && ''}`}>
            <IconWithText>
                <DashboardOverviewCardIcon
                    icon={icon}
                    alt={heading}
                />
                <h1 className={styles.navigationCard__heading}>{heading}</h1>
            </IconWithText>
        </div>
    );
};

export default NavigationCard; 
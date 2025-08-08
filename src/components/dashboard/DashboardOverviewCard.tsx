import styles from './DashboardOverviewCard.module.scss';

type DashboardOverviewCardProps = {
    className?: string;
    children: React.ReactNode;
    backgroundColor?: string;
}

const DashboardOverviewCard = ({ className, children, backgroundColor }: DashboardOverviewCardProps) => {
    return (
        <div className={`${styles["dashboard-overview-card"]} ${className}`} style={{ backgroundColor: `#${backgroundColor}` }}>
            {children}
        </div>
    );
};

export default DashboardOverviewCard; 
import Link from 'next/link';
import styles from './DashboardOverviewCard.module.scss';

type DashboardOverviewCardProps = {
    className?: string;
    children: React.ReactNode;
    backgroundColor?: string;
    href: string;
}

const DashboardOverviewCard = ({ className, children, backgroundColor, href }: DashboardOverviewCardProps) => {
    return (
        <Link
            href={href}
            className={`${styles["dashboard-overview-card"]} ${className}`}
            style={{ backgroundColor: `#${backgroundColor}` }}
        >
            {children}
        </Link>
    );
};

export default DashboardOverviewCard; 
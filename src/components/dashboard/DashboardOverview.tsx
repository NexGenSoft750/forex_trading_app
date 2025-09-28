import styles from './DashboardOverview.module.scss';
import Section from '@/components/layout/Section';
import DashboardOverviewCard from '@/components/dashboard/DashboardOverviewCard';
import MetricCard from '@/components/dashboard/MetricCard';
import NavigationCard from '@/components/dashboard/NavigationCard';
import { getFullPath } from '@/helper/path';

const DashboardOverview = () => {
    return (
        <>
            <Section className={styles["dashboard-overview"]}>
                <DashboardOverviewCard
                    backgroundColor='ffe2e5'
                    href={getFullPath('users')}
                >
                    <MetricCard
                        icon="/images/dashboard/icons/users.svg"
                        heading="Users"
                        totalText="Total Users"
                        newText="New Users"
                        totalCount={658}
                        newCount={12}
                    />
                </DashboardOverviewCard>

                <DashboardOverviewCard
                    backgroundColor='fff4de'
                    href={getFullPath('users')}
                >
                    <MetricCard
                        icon="/images/dashboard/icons/packages.svg"
                        heading="Packages"
                        totalText="Total Packages"
                        newText="New Packages"
                        totalCount={14}
                        newCount={3}
                    />
                </DashboardOverviewCard>

                <DashboardOverviewCard
                    className={styles["dashboard-overview--center"]}
                    backgroundColor='dcfce7'
                    href={getFullPath('users')}
                >
                    <NavigationCard
                        icon="/images/dashboard/icons/analytics.svg"
                        heading="Analytics Graph"
                    />
                </DashboardOverviewCard>

                <DashboardOverviewCard
                    className={styles["dashboard-overview--center"]}
                    backgroundColor='f3e8ff'
                    href={getFullPath('users')}
                >
                    <NavigationCard
                        icon="/images/dashboard/icons/payment.svg"
                        heading="Payment Method"
                    />
                </DashboardOverviewCard>

                <DashboardOverviewCard
                    className={styles["dashboard-overview--center"]}
                    backgroundColor='fad0fb'
                    href={getFullPath('users')}
                >
                    <NavigationCard
                        icon="/images/dashboard/icons/forum.svg"
                        heading="Forum"
                    />
                </DashboardOverviewCard>

                <DashboardOverviewCard
                    className={styles["dashboard-overview--center"]}
                    backgroundColor='baccff'
                    href={getFullPath('users')}
                >
                    <NavigationCard
                        icon="/images/dashboard/icons/about-us.svg"
                        heading="About us"
                    />
                </DashboardOverviewCard>
            </Section>
        </>
    );
};

export default DashboardOverview;
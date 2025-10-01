import styles from "./PortfolioTracker.module.scss";
import PortfolioLineChart from "@/components/portfolio-tracker/PortfolioLineChart";
import PortfolioPieChart from "@/components/portfolio-tracker/PortfilioPieChart";
import PortfolioBarChart from "@/components/portfolio-tracker/PortfolioBarChart";
import BalanceGraph from "@/components/portfolio-tracker/BalanceGraph";
import PortfolioTrackerSummaryTable from "@/components/portfolio-tracker/tables/PortfolioTrackerSummaryTable";
import PortfolioTrackerDateSummaryTable from "@/components/portfolio-tracker/tables/PortfolioTrackerDateSummaryTable";

export default function PortfolioTrackerPage() {
  return (
    <>
      <div>
        <PortfolioTrackerSummaryTable />
      </div>
      <div className={styles['portfolio-tracker']}>
        <PortfolioLineChart />
        <PortfolioPieChart />
        <PortfolioBarChart />
      </div>
      <BalanceGraph />
      <PortfolioTrackerDateSummaryTable />
    </>
  );
}
import styles from "./page.module.scss";
import PortfolioLineChart from "@/components/portfolio-tracker/PortfolioLineChart";
import PortfolioPieChart from "@/components/portfolio-tracker/PortfilioPieChart";

export default function PortfolioTrackerPage() {
  return (
    <div className={styles['portfolio-tracker']}>
      <PortfolioLineChart />
      <PortfolioPieChart />
    </div>
  );
}
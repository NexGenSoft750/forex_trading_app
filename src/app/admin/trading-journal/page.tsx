import styles from "./TradingJournal.module.scss";
import PortfolioTrackerSummaryTable from "@/components/trading-journal/tables/PortfolioTrackerSummaryTable";
import PortfolioTrackerDateSummaryTable from "@/components/trading-journal/tables/PortfolioTrackerDateSummaryTable";
import PortfolioPieChart from "@/components/trading-journal/charts/PortfolioPieChart";
import PortfolioBarChart from "@/components/trading-journal/charts/PortfolioBarChart";
import PortfolioLineChart from "@/components/trading-journal/charts/PortfolioLineChart";
import Section from "@/components/layout/Section";
import BalanceGraph from "@/components/trading-journal/charts/BalanceGraph";

export default function TradingJournalPage() {
  return (
    <>
      <Section ariaLabel="Portfolio Summary Table Section">
        <PortfolioTrackerSummaryTable />
      </Section>
      <Section
        className={styles['portfolio-tracker']}
        ariaLabel="Portfolio Charts Section"
      >
        <PortfolioLineChart />
        <PortfolioPieChart />
        <PortfolioBarChart />
      </Section>
      <Section ariaLabel="Portfolio Balance Chart Section">
        <BalanceGraph chartHeading="Balance Graph" />
      </Section>
      <Section ariaLabel="Portfolio Date Summary Table Section">
        <PortfolioTrackerDateSummaryTable />
      </Section>
    </>
  );
}
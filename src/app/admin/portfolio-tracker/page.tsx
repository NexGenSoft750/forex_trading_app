import PortfolioLineChart from "@/components/portfolio-tracker/PortfolioLineChart";
import PortfolioPieChart from "@/components/portfolio-tracker/PortfilioPieChart";

export default function PortfolioTrackerPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4" style={{display: "flex"}}>
      <PortfolioLineChart />
      <PortfolioPieChart />
    </div>
  );
}
import Link from "next/link";
import styles from './DashboardNav.module.scss';
import RightArrow from "./RightArrow";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
    const pathName = usePathname();

    const navItems = [
        { href: "/admin/fundamental-heatmap", label: "Fundamental Heatmap", key: "fundamental-heatmap" },
        { href: "/admin/currency-fundamentals", label: "Currency Fundamentals", key: "currency-fundamentals" },
        { href: "/", label: "Score Board", key: "source-board" },
        { href: "/", label: "Cot Report", key: "cot-report" },
        { href: "/", label: "Seasonality", key: "seasonality" },
        { href: "/", label: "Events Calender", key: "events-calender" },
        { href: "/", label: "Retail Sentiment", key: "retail-sentiment" },
        { href: "/", label: "Calculator", key: "calculator" },
        { href: "/", label: "Trading Alerts", key: "trading-alerts" },
        { href: "/", label: "Education", key: "education" },
        { href: "/admin/portfolio-tracker", label: "Trading Journal", key: "portfolio-tracker" },
        { href: "/", label: "Risk Mode", key: "risk-mode" },
    ];

    return (
        <>
            <nav className={styles["dashboard-nav"]}>
            <ul className={styles["dashboard-nav__container"]}>
                {navItems.map(({ href, label, key }) => {
                    const isActive = pathName.includes(key);
                    return (
                    <div
                        key={key}
                        className={`${styles["dashboard-nav__wrapper"]} ${
                        isActive ? styles["dashboard-nav__wrapper--active"] : ""
                        }`}
                    >
                        <li
                        className={`${styles["dashboard-nav__item"]} ${
                            isActive ? styles["dashboard-nav__item--active"] : ""
                        }`}
                        >
                        <Link className={styles["dashboard-nav__link"]} href={href}>
                            {label}
                        </Link>
                        <RightArrow className={styles["dashboard-nav__icon"]} />
                        </li>
                    </div>
                    );
                })}
                </ul>
            </nav>
        </>
    );
}
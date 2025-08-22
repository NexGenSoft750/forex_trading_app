import Link from "next/link";
import styles from './DashboardNav.module.scss';
import RightArrow from "./RightArrow";

export default function DashboardNav() {
    return (
        <>
            <nav className={styles["dashboard-nav"]}>
                <ul className={styles["dashboard-nav__container"]}>
                    <li className={styles["dashboard-nav__item"]}>
                        <Link className={styles["dashboard-nav__link"]} href="/admin/fundamental-heatmap">Fundamental Heatmap</Link>
                        <RightArrow />
                    </li>
                    <li className={styles["dashboard-nav__item"]}>
                        <Link className={styles["dashboard-nav__link"]} href="/admin/currency-fundamentals">Currency Fundamentals</Link>
                        <RightArrow />
                    </li>
                    <li className={styles["dashboard-nav__item"]}>
                        <Link className={styles["dashboard-nav__link"]} href="/">Score Board</Link>
                        <RightArrow />
                    </li>
                    <li className={styles["dashboard-nav__item"]}>
                        <Link className={styles["dashboard-nav__link"]} href="/">Cot Report</Link>
                        <RightArrow />
                    </li>
                    <li className={styles["dashboard-nav__item"]}>
                        <Link className={styles["dashboard-nav__link"]} href="/">Seasonality</Link>
                        <RightArrow />
                    </li>
                    <li className={styles["dashboard-nav__item"]}>
                        <Link className={styles["dashboard-nav__link"]} href="/">Events Calender</Link>
                        <RightArrow />
                    </li>
                    <li className={styles["dashboard-nav__item"]}>
                        <Link className={styles["dashboard-nav__link"]} href="/">Retail Sentiment</Link>
                        <RightArrow />
                    </li>
                    <li className={styles["dashboard-nav__item"]}>
                        <Link className={styles["dashboard-nav__link"]} href="/">Calculator</Link>
                        <RightArrow />
                    </li>
                    <li className={styles["dashboard-nav__item"]}>
                        <Link className={styles["dashboard-nav__link"]} href="/">Trading Alerts</Link>
                        <RightArrow />
                    </li>
                    <li className={styles["dashboard-nav__item"]}>
                        <Link className={styles["dashboard-nav__link"]} href="/">Education</Link>
                        <RightArrow />
                    </li>
                    <li className={styles["dashboard-nav__item"]}>
                        <Link className={styles["dashboard-nav__link"]} href="/admin/portfolio-tracker">Trading Journal</Link>
                        <RightArrow />
                    </li>
                    <li className={styles["dashboard-nav__item"]}>
                        <Link className={styles["dashboard-nav__link"]} href="/">Risk Mode</Link>
                        <RightArrow />
                    </li>
                </ul>
            </nav>
        </>
    );
}
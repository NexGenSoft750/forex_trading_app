"use client";

import Link from "next/link";
import styles from "./DashboardNav.module.scss";
import RightArrow from "./RightArrow";
import { usePathname } from "next/navigation";
import NAV_ITEMS from "@/lib/navItems";

export default function DashboardNav() {
  const currentPath = usePathname();

  const getActiveLinkClass = (linkPath: string): string =>
    currentPath === linkPath
      ? [
        styles["dashboard-nav__wrapper--active"],
        styles["dashboard-nav__item--active"]
      ].join(" ")
      : "";

  return (
    <nav className={styles["dashboard-nav"]}>
      <ul className={styles["dashboard-nav__container"]}>
        {NAV_ITEMS.map(({ key, label, href }) => (
          <div key={key} className={`${styles["dashboard-nav__wrapper"]} ${getActiveLinkClass(href)}`}>
            <li className={`${styles["dashboard-nav__item"]} ${getActiveLinkClass(href)}`}>
              <Link
                className={`${styles["dashboard-nav__link"]}`}
                href={href}
              >
                {label}
              </Link>
              <RightArrow />
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
}
"use client";

import Link from "next/link";
import styles from "./DashboardNav.module.scss";
import RightArrow from "./RightArrow";
import { usePathname } from "next/navigation";
import SORTED_NAV_ITEMS from "@/lib/navItems";

const URL_PREFIX = process.env.NEXT_PUBLIC_URL_PREFIX || "/admin";

export default function DashboardNav() {
  const currentPath = usePathname();

  const getActiveLinkClass = (fullPath: string): string =>
    currentPath === fullPath
      ? [
        styles["dashboard-nav__wrapper--active"],
        styles["dashboard-nav__item--active"]
      ].join(" ")
      : "";

  return (
    <nav className={styles["dashboard-nav"]}>
      <ul className={styles["dashboard-nav__container"]}>
        {SORTED_NAV_ITEMS.map(({ key, label, href }) => {
          const fullPath = `${URL_PREFIX}/${href}`;

          return (
            <div key={key} className={`${styles["dashboard-nav__wrapper"]} ${getActiveLinkClass(fullPath)}`}>
              <li className={`${styles["dashboard-nav__item"]} ${getActiveLinkClass(fullPath)}`}>
                <Link
                  className={styles["dashboard-nav__link"]}
                  href={fullPath}
                >
                  {label}
                </Link>
                <RightArrow />
              </li>
            </div>
          );
        })}
      </ul>
    </nav>
  );
}
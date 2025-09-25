"use client";

import { usePathname } from "next/navigation";

const URL_PREFIX = process.env.NEXT_PUBLIC_URL_PREFIX || "/admin";

const RAW_ROUTE_TITLES: Record<string, string> = {
    "/": "Dashboard",
    "forex-heatmap": "Forex Heatmap",
    "currency-fundamentals": "Currency Fundamentals",
    "score-dashboard": "Score Dashboard",
    "cot-data-analysis": "COT Data & Analysis",
    "portfolio-tracker": "Portfolio Tracker",
    "retail-sentiment": "Retail Sentiment",
    "risk-mode": "Risk On Off",
    "users": "Users",
};

// Apply URL_PREFIX to all routes.
const ROUTE_TITLES: Record<string, string> = Object.fromEntries(
    Object.entries(RAW_ROUTE_TITLES).map(([key, value]) => {
        if (key === "/") {
            return [URL_PREFIX, value];
        }
        return [`${URL_PREFIX}/${key}`, value];
    })
);

export function usePageTitle(): string {
    const pathname = usePathname();
    return ROUTE_TITLES[pathname] || "Dashboard";
}
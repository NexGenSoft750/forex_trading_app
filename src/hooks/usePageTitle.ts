"use client";

import { usePathname } from "next/navigation";

const PATH_PREFIX = process.env.NEXT_PUBLIC_PATH_PREFIX || "/admin";

const RAW_ROUTE_TITLES: Record<string, string> = {
    "/": "Dashboard",
    "users": "Users",
    "forex-heatmap": "Forex Heatmap",
    "fx-analyzer-pro": "Fx Analyzer Pro",
    "score-dashboard": "Score Dashboard",
    "edge-tools-and-alerts": "Edge Tools & Alerts",
    "currency-fundamentals": "Currency Fundamentals",
    "cot-data-analysis": "COT Data & Analysis",
    "seasonal-trends": "Seasonal Trends",
    "trading-journal": "Trading Journal",
    "retail-sentiment": "Retail Sentiment",
    "risk-mode": "Risk On Off",
    "education": "Education",
};

// Apply PATH_PREFIX to all routes.
const ROUTE_TITLES: Record<string, string> = Object.fromEntries(
    Object.entries(RAW_ROUTE_TITLES).map(([key, value]) => {
        if (key === "/") {
            return [PATH_PREFIX, value];
        }
        return [`${PATH_PREFIX}/${key}`, value];
    })

);

export function usePageTitle(): string {
    const pathname = usePathname();
    return ROUTE_TITLES[pathname] || "Dashboard";
}
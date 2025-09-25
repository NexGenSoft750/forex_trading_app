import { NavItem } from "@/types/NavItem";

const NAV_ITEMS: NavItem[] = [
    {
        key: "forex-heatmap",
        label: "Forex Heatmap",
        href: "forex-heatmap",
        order: 1
    },
    {
        key: "fx-analyzer-pro",
        label: "FX Analyzer Pro",
        href: "fx-analyzer-pro",
        order: 2
    },
    {
        key: "score-dashboard",
        label: "Score Dashboard",
        href: "score-dashboard",
        order: 3
    },
    {
        key: "edge-tools-alerts",
        label: "Edge Tools & Alerts",
        href: "edge-tools-alerts",
        order: 4
    },
    {
        key: "currency-fundamentals",
        label: "Currency Fundamentals",
        href: "currency-fundamentals",
        order: 5
    },
    {
        key: "cot-data-analysis",
        label: "COT Data & Analysis",
        href: "cot-data-analysis",
        order: 6
    },
    {
        key: "seasonal-trends",
        label: "Seasonal Trends",
        href: "seasonal-trends",
        order: 7
    },
    {
        key: "retail-sentiment",
        label: "Retail Sentiment",
        href: "retail-sentiment",
        order: 8
    },
    {
        key: "risk-mode",
        label: "Risk Mode",
        href: "risk-mode",
        order: 9
    },
    {
        key: "calendar-news",
        label: "Calendar & News",
        href: "calendar-news",
        order: 10
    },
    {
        key: "portfolio-tracker",
        label: "Trading Journal",
        href: "portfolio-tracker",
        order: 11
    },
    {
        key: "education",
        label: "Education",
        href: "education",
        order: 12,
    },
];

const SORTED_NAV_ITEMS = NAV_ITEMS.sort((a, b) => a.order - b.order);

export default SORTED_NAV_ITEMS;

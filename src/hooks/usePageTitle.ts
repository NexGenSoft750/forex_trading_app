"use client";

import { usePathname } from 'next/navigation';

const ROUTE_TITLES: Record<string, string> = {
    '/admin': 'Dashboard',
    '/admin/forex-heatmap': 'Forex Heatmap',
    '/admin/currency-fundamentals': 'Currency Fundamentals',
    '/admin/score-dashboard': 'Score Dashboard',
    '/admin/cot-data-analysis': 'COT Data & Analysist',
    '/admin/portfolio-tracker': 'Portfolio Tracker',
    '/admin/retail-sentiment': 'Retail Sentiment',
    '/admin/risk-mode': 'Risk On Off',
};

export function usePageTitle(): string {
    const pathname = usePathname();
    return ROUTE_TITLES[pathname] || 'Dashboard';
}
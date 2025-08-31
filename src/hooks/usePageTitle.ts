"use client";

import { usePathname } from 'next/navigation';

const ROUTE_TITLES: Record<string, string> = {
    '/admin': 'Dashboard',
    '/admin/currency-fundamentals': 'Currency Fundamentals',
    '/admin/fundamental-heatmap': 'Fundamental Heatmap',
    '/admin/portfolio-tracker': 'Portfolio Tracker',
    '/admin/score-board': 'Score Board',
};

export function usePageTitle(): string {
    const pathname = usePathname();
    return ROUTE_TITLES[pathname] || 'Dashboard';
}

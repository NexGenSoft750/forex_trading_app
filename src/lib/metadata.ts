import type { Metadata } from "next";

interface MetadataConfig {
    title: string;
    description: string;
    keywords?: string[];
    path?: string;
    image?: string;
    noIndex?: boolean;
}

export function generateMetadata({
    title,
    description,
    keywords = [],
    path = "",
    image,
    noIndex = false,
}: MetadataConfig): Metadata {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://forex-admin.com";
    const fullUrl = `${baseUrl}${path}`;

    const defaultKeywords = ["forex", "trading", "admin", "dashboard", "analytics"];
    const allKeywords = [...defaultKeywords, ...keywords];

    return {
        title,
        description,
        keywords: allKeywords,
        openGraph: {
            title: `${title} | Forex Admin`,
            description,
            url: fullUrl,
            siteName: "Forex Admin Dashboard",
            type: "website",
            locale: "en_US",
            ...(image && {
                images: [
                    {
                        url: image,
                        width: 1200,
                        height: 630,
                        alt: title,
                    },
                ],
            }),
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | Forex Admin`,
            description,
            creator: "@forexadmin",
            ...(image && {
                images: [image],
            }),
        },
        alternates: {
            canonical: fullUrl,
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
            },
        },
    };
}

// Pre-defined metadata for common pages
export const commonMetadata = {
    dashboard: generateMetadata({
        title: "Dashboard Overview",
        description: "Comprehensive overview of forex trading metrics, analytics, and key performance indicators for administrative management",
        keywords: ["dashboard", "overview", "analytics", "metrics", "KPIs"],
        path: "/admin",
    }),

    fundamentalHeatmap: generateMetadata({
        title: "Fundamental Heatmap",
        description: "Advanced fundamental analysis heatmap displaying real-time market sentiment, economic indicators, and trading opportunities",
        keywords: ["fundamental analysis", "heatmap", "market sentiment", "economic indicators", "currency pairs"],
        path: "/admin/fundamental-heatmap",
    }),

    currencyFundamental: generateMetadata({
        title: "Currency Fundamental",
        description: "Currency fundamental analysis heatmap displaying real-time market sentiment, economic indicators, and trading opportunities",
        keywords: ["currency fundamental", "heatmap", "market sentiment", "economic indicators", "currency pairs"],
        path: "/admin/currency-fundamental",
    }),

    // Add more common pages as needed
    analytics: generateMetadata({
        title: "Trading Analytics",
        description: "Detailed trading analytics and performance metrics for forex market operations",
        keywords: ["analytics", "performance", "metrics", "trading statistics"],
        path: "/admin/analytics",
    }),

    reports: generateMetadata({
        title: "Reports & Insights",
        description: "Comprehensive reports and market insights for informed trading decisions",
        keywords: ["reports", "insights", "market analysis", "trading reports"],
        path: "/admin/reports",
    }),

    portfolioTracker: generateMetadata({
        title: "Portfolio Tracker",
        description: "Track, manage, and analyze your investment portfolio with real-time insights and performance metrics.",
        keywords: ["portfolio tracker", "investment tracking", "portfolio management", "real-time performance", "investment insights"],
        path: "/admin/portfolio-tracker",
    }),

    cotReport: generateMetadata({
        title: "COT Report",
        description: "Analyze Commitments of Traders (COT) reports to gain insights into market sentiment, trader positions, and market trends.",
        keywords: [
            "COT report",
            "commitments of traders",
            "market sentiment",
            "trader positions",
            "futures market analysis",
            "forex cot report",
            "commodity trading insights"
        ],
        path: "/admin/cot-report",
    }),
};

// Dynamic metadata generator for pages with parameters
export function generateDynamicMetadata(
    baseTitle: string,
    baseDescription: string,
    params?: Record<string, string>
): Metadata {
    let title = baseTitle;
    let description = baseDescription;

    // Replace placeholders with actual values
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            const placeholder = `{${key}}`;
            title = title.replace(placeholder, value);
            description = description.replace(placeholder, value);
        });
    }

    return generateMetadata({
        title,
        description,
        keywords: Object.values(params || {}),
    });
}

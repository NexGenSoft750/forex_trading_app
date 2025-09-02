import RetailSentimentLayout from "@/app/admin/retail-sentiment/layout";
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

    scoreBoard: generateMetadata({
        title: "Scoreboard",
        description: "Comprehensive trading scoreboard displaying performance metrics, currency scores, market sentiment, and key economic insights in real time",
        keywords: ["scoreboard", "trading performance", "currency strength", "market sentiment", "economic insights"],
        path: "/admin/score-board",
    }),

    cotReport: generateMetadata({
        title: "COT Report",
        description: "Detailed Commitment of Traders (COT) report providing insights into trader positions, market trends, and institutional sentiment across major asset classes",
        keywords: [
            "COT report",
            "Commitment of Traders",
            "market trends",
            "institutional sentiment",
            "trader positions",
            "futures data"
        ],
        path: "/admin/cot-report",
    }),

    retailSentiment: generateMetadata({
        title: "Retail Sentiment",
        description: "Comprehensive retail sentiment data showing the behavior, positioning, and confidence levels of retail traders across major markets and asset classes.",
        keywords: [
            "retail sentiment",
            "trader sentiment",
            "market psychology",
            "retail positioning",
            "trading behavior",
            "investor confidence"
        ],
        path: "/admin/retail-sentiment",
    }),

    portfolioTracker: generateMetadata({
        title: "Portfolio Tracker",
        description: "Track, manage, and analyze your investment portfolio with real-time insights and performance metrics.",
        keywords: ["portfolio tracker", "investment tracking", "portfolio management", "real-time performance", "investment insights"],
        path: "/admin/portfolio-tracker",
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

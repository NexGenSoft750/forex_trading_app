import { commonMetadata } from "@/lib/metadata";

export const metadata = commonMetadata.seasonalTrends;

export default function SeasonalTrendsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
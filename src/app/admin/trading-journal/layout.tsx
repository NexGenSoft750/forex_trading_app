import { commonMetadata } from "@/lib/metadata";

export const metadata = commonMetadata.tradingJournal;

export default function TradingJournalPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

import { commonMetadata } from "@/lib/metadata";

export const metadata = commonMetadata.retailSentiment;

export default function RetailSentimentLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
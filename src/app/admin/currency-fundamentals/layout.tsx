import { commonMetadata } from "@/lib/metadata";

export const metadata = commonMetadata.currencyFundamental;

export default function CurrencyFundamentalsLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
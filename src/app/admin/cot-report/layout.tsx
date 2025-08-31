import { commonMetadata } from "@/lib/metadata";

export const metadata = commonMetadata.cotReport;

export default function COTReportLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
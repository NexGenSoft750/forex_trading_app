import { commonMetadata } from "@/lib/metadata";

export const metadata = commonMetadata.edgeToolsAndAlerts;

export default function EdgeToolsAndAlertsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
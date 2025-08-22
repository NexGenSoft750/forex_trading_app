import { commonMetadata } from "@/lib/metadata";

export const metadata = commonMetadata.portfolioTracker;

export default function portfolioTrackerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

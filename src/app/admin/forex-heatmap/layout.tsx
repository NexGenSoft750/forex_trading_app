import { commonMetadata } from "@/lib/metadata";

export const metadata = commonMetadata.forexHeatmap;

export default function ForexHeatmapLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

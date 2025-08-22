import { commonMetadata } from "@/lib/metadata";

export const metadata = commonMetadata.fundamentalHeatmap;

export default function FundamentalHeatmapLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

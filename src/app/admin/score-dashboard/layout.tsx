import { commonMetadata } from "@/lib/metadata";

export const metadata = commonMetadata.scoreBoard;

export default function ScoreBoardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
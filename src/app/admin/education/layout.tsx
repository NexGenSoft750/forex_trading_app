import { commonMetadata } from "@/lib/metadata";

export const metadata = commonMetadata.education;

export default function EducationLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
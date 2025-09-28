import { commonMetadata } from "@/lib/metadata";

export const metadata = commonMetadata.users;

export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
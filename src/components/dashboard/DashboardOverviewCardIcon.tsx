import Image from "next/image";

type DashboardOverviewCardIconProps = {
    icon: string;
    alt: string;
}

export default function DashboardOverviewCardIcon({ icon, alt }: DashboardOverviewCardIconProps) {
    return (
        <>
            <Image
                src={icon}
                alt={alt}
                width={55}
                height={50}
            />
        </>
    );
}
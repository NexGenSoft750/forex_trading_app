import SectionHeader from "./SectionHeader";

const SectionHeaders = ({ headers }: { headers: string[] }) => {
    return (
        <>
            {
                headers?.map(header => <SectionHeader key={header}>{header}</SectionHeader>)
            }
        </>
    );
}

export default SectionHeaders;
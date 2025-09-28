import { Table, Thead, Th, Tr, Tbody, Td } from '@/components/base-table';

export default function COTDateReportTable() {
    const rows = Array(12).fill({
        date: "2024-08-06",
        commercial: { long: "7,502", changeLong: "0", short: "23,329", changeShort: "0" },
        nonCommercial: { long: "30,996", changeLong: "0", short: "14,860", changeShort: "0" },
        smallTraders: { long: "0", changeLong: "0", short: "0", changeShort: "0" },
        openInterest: { value: "42,026", change: "0", changePercent: "0" },
        netCommercials: { positions: "-15,827" },
        changePercent: "1",
        cotIndex: "10.2525019",
        netNonCommercial: { value: "16,136", percentChange: "0" },
    });

    return (
        <Table>
            <Thead borderColor='#C0B7B7'>
                <Tr>
                    <Th borderColor="#000000"></Th>
                    <Th bgColor='#FF0000' colSpan={4}>COMMERCIAL</Th>
                    <Th bgColor='#8BC34A' colSpan={4}>NON COMMERCIAL</Th>
                    <Th bgColor='#FFFF00' colSpan={4}>SMALL TRADERS</Th>
                    <Th bgColor='#CCCCCC' colSpan={3}>OPEN INTEREST</Th>
                    <Th borderColor="#000000" bgColor='#A4C1F4' colSpan={1}>NET COMMERCIALS</Th>
                    <Th borderColor="#000000" bgColor='#ffffff' colSpan={1}>Change%</Th>
                    <Th borderColor="#000000" bgColor='#FABB04' colSpan={1}>COT INDEX</Th>
                    <Th borderColor="#000000" bgColor='#ffffff' colSpan={1}>NET NON COMMERCIAL</Th>
                    <Th borderColor="#000000" bgColor='#ffffff' colSpan={1}></Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td borderColor="#000000" bold>DATE</Td>
                    <Td bold bgColor='#F4CCCC'>LONG</Td>
                    <Td bold bgColor='#F4CCCC'>CHANGE</Td>
                    <Td bold bgColor='#F4CCCC'>SHORT</Td>
                    <Td bold bgColor='#F4CCCC'>CHANGE</Td>
                    <Td bold bgColor='#D9EAD3'>LONG</Td>
                    <Td bold bgColor='#D9EAD3'>CHANGE</Td>
                    <Td bold bgColor='#D9EAD3'>SHORT</Td>
                    <Td bold bgColor='#D9EAD3'>CHANGE</Td>
                    <Td bold bgColor='#FFF1CC'>LONG</Td>
                    <Td bold bgColor='#FFF1CC'>CHANGE</Td>
                    <Td bold bgColor='#FFF1CC'>SHORT</Td>
                    <Td bold bgColor='#FFF1CC'>CHANGE</Td>
                    <Td bold bgColor='#EEEEEE'>Value</Td>
                    <Td bold bgColor='#EEEEEE'>Change</Td>
                    <Td bold bgColor='#EEEEEE'>Change %</Td>
                    <Td borderColor="#000000" bold bgColor='#FFFFFF'>Positions</Td>
                    <Td borderColor="#000000" bold bgColor='#FFFFFF'>Change%</Td>
                    <Td borderColor="#000000" bold bgColor='#FABB04'>Index</Td>
                    <Td borderColor="#000000" bold bgColor='#FFFFFF'></Td>
                    <Td borderColor="#000000" bold bgColor='#FFFFFF'>%Change</Td>
                </Tr>

                {rows.map((row, i) => (
                    <Tr key={i}>
                        <Td borderColor="#000000">{row.date}</Td>
                        <Td bgColor='#F4CCCC'>{row.commercial.long}</Td>
                        <Td bgColor='#F4CCCC'>{row.commercial.changeLong}</Td>
                        <Td bgColor='#F4CCCC'>{row.commercial.short}</Td>
                        <Td bgColor='#F4CCCC'>{row.commercial.changeShort}</Td>

                        <Td bgColor='#D9EAD3'>{row.nonCommercial.long}</Td>
                        <Td bgColor='#D9EAD3'>{row.nonCommercial.changeLong}</Td>
                        <Td bgColor='#D9EAD3'>{row.nonCommercial.short}</Td>
                        <Td bgColor='#D9EAD3'>{row.nonCommercial.changeShort}</Td>

                        <Td bgColor='#FFF1CC'>{row.smallTraders.long}</Td>
                        <Td bgColor='#FFF1CC'>{row.smallTraders.changeLong}</Td>
                        <Td bgColor='#FFF1CC'>{row.smallTraders.short}</Td>
                        <Td bgColor='#FFF1CC'>{row.smallTraders.changeShort}</Td>

                        <Td bgColor='#EEEEEE'>{row.openInterest.value}</Td>
                        <Td bgColor='#EEEEEE'>{row.openInterest.change}</Td>
                        <Td bgColor='#EEEEEE'>{row.openInterest.changePercent}</Td>

                        <Td borderColor="#000000" bgColor='#FFFFFF'>{row.netCommercials.positions}</Td>
                        <Td borderColor="#000000" bgColor='#FFFFFF'>{row.changePercent}</Td>
                        <Td borderColor="#000000" bgColor='#FABB04'>{row.cotIndex}</Td>
                        <Td borderColor="#000000" bgColor='#FFFFFF'>{row.netNonCommercial.value}</Td>
                        <Td borderColor="#000000" bgColor='#FFFFFF'>{row.netNonCommercial.percentChange}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}
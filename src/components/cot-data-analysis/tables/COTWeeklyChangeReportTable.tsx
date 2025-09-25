import { Table, Thead, Th, Tr, Tbody, Td } from '@/components/base-table';

export default function COTWeeklyChangeReportTable() {
    const rows = [
        { weeklyChange: "-2.72", nonCommLong: "72", nonCommShort: "28", netPositionScore: "0.5", weeklyChangeScore: "-1", netScore: "-0.5", currency: "USD", changeInNCommPositions: "-1,036" },
        { weeklyChange: "-2.72", nonCommLong: "72", nonCommShort: "28", netPositionScore: "0.5", weeklyChangeScore: "-1", netScore: "-0.5", currency: "USD", changeInNCommPositions: "25,995" },
        { weeklyChange: "-2.72", nonCommLong: "72", nonCommShort: "28", netPositionScore: "0.5", weeklyChangeScore: "-1", netScore: "-0.5", currency: "USD", changeInNCommPositions: "-1,036" },
        { weeklyChange: "-2.72", nonCommLong: "72", nonCommShort: "28", netPositionScore: "0.5", weeklyChangeScore: "-1", netScore: "-0.5", currency: "USD", changeInNCommPositions: "25,995" },
        { weeklyChange: "-2.72", nonCommLong: "72", nonCommShort: "28", netPositionScore: "0.5", weeklyChangeScore: "-1", netScore: "-0.5", currency: "USD", changeInNCommPositions: "-1,036" },
        { weeklyChange: "-2.72", nonCommLong: "72", nonCommShort: "28", netPositionScore: "0.5", weeklyChangeScore: "-1", netScore: "-0.5", currency: "USD", changeInNCommPositions: "25,995" },
        { weeklyChange: "-2.72", nonCommLong: "72", nonCommShort: "28", netPositionScore: "0.5", weeklyChangeScore: "-1", netScore: "-0.5", currency: "USD", changeInNCommPositions: "-1,036" },
        { weeklyChange: "-2.72", nonCommLong: "72", nonCommShort: "28", netPositionScore: "0.5", weeklyChangeScore: "-1", netScore: "-0.5", currency: "USD", changeInNCommPositions: "25,995" },
        { weeklyChange: "-2.72", nonCommLong: "72", nonCommShort: "28", netPositionScore: "0.5", weeklyChangeScore: "-1", netScore: "-0.5", currency: "USD", changeInNCommPositions: "-1,036" },
        { weeklyChange: "-2.72", nonCommLong: "72", nonCommShort: "28", netPositionScore: "0.5", weeklyChangeScore: "-1", netScore: "-0.5", currency: "USD", changeInNCommPositions: "25,995" },
        { weeklyChange: "-2.72", nonCommLong: "72", nonCommShort: "28", netPositionScore: "0.5", weeklyChangeScore: "-1", netScore: "-0.5", currency: "USD", changeInNCommPositions: "-1,036" },
        { weeklyChange: "-2.72", nonCommLong: "72", nonCommShort: "28", netPositionScore: "0.5", weeklyChangeScore: "-1", netScore: "-0.5", currency: "USD", changeInNCommPositions: "25,995" },
    ];

    return (
        <Table bordered borderSpacing>
            <Thead>
                <Tr>
                    <Th colSpan={1}>WEEKLY CHANGE</Th>
                    <Th colSpan={1}>% NON COMM LONG</Th>
                    <Th colSpan={1}>% NON COMM SHORT</Th>
                    <Th bgColor='#FF8484' colSpan={1}>NET POSITION SCORE</Th>
                    <Th bgColor='#FF8484' colSpan={1}>WEEKLY CHANGE SCORE</Th>
                    <Th colSpan={1}>NET SCORE</Th>
                    <Th colSpan={1}>CURRENCY</Th>
                    <Th colSpan={1}>CHANGE IN N.C. POSITIONS</Th>
                </Tr>
            </Thead>
            <Tbody>
                {rows.map((row, i) => (
                    <Tr key={i}>
                        <Td>{row.weeklyChange}</Td>
                        <Td>{row.nonCommLong}</Td>
                        <Td>{row.nonCommShort}</Td>
                        <Td bgColor='#FF8484'>{row.netPositionScore}</Td>
                        <Td bgColor='#FF8484'>{row.weeklyChangeScore}</Td>
                        <Td bgColor='#B7B7B7'>{row.netScore}</Td>
                        <Td bgColor='#8BC34A'>{row.currency}</Td>
                        <Td bgColor='#FF8484'>{row.changeInNCommPositions}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}
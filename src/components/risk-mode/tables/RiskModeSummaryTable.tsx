import { Table, Tr, Tbody, Td } from '@/components/base-table';

export default function RiskModeSummaryTable() {
    return (
        <Table bordered cellPadding='large'>
            <Tbody>
                <Tr>
                    <Td bgColor="#6C9EEB" colSpan={2}>RISK ON / OFF</Td>
                </Tr>

                <Tr><Td colSpan={2}>CADJPY</Td></Tr>
                <Tr><Td colSpan={2}>BTC</Td></Tr>
                <Tr><Td colSpan={2}>CRUDE OIL</Td></Tr>
                <Tr><Td colSpan={2}>COPPER</Td></Tr>
                <Tr><Td colSpan={2}>JPN225</Td></Tr>
                <Tr><Td colSpan={2}>NAS100</Td></Tr>
                <Tr><Td colSpan={2}>SPX500</Td></Tr>
                <Tr><Td colSpan={2}>USDCHF</Td></Tr>
                <Tr><Td colSpan={2}>VOLATILITY INDEX</Td></Tr>
                <Tr><Td colSpan={2}>EURUSD</Td></Tr>
                <Tr><Td colSpan={2}>GOLD</Td></Tr>

                <Tr style={{ display: 'flex', gap: '.2rem' }}>
                    <Td>RISK OFF/ON SCORE</Td>
                    <Td>45</Td>
                </Tr>
            </Tbody>
        </Table>
    );
}

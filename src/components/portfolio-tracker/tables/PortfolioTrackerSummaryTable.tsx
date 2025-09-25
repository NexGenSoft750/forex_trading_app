import { Table, Tbody, Td, Tr } from "@/components/base-table";
import TableHeader from '@/components/base-table/TableHeader';

export default function PortfolioTrackerSummaryTable() {
    return (
        <>
            <TableHeader heading='PORTFOLIO TRACKER' />
            <Table bordered cellPadding='large' borderSpacing>
                <Tbody>
                    <Tr>
                        <Td bgColor='#FFFF00'>Start Date</Td>
                        <Td bgColor='#FFFF00'></Td>
                        <Td bgColor='#FFFF00'>Total Trades</Td>
                        <Td bgColor='#FFFF00'>72.73%</Td>
                        <Td bgColor='#FFFF00'>Average RR ratio</Td>
                        <Td bgColor='#FFFF00'>#DIV/0!</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#FFFF00'>Current Date</Td>
                        <Td bgColor='#FFFF00'>2024-12-28</Td>
                        <Td bgColor='#FFFF00'>Win Trades</Td>
                        <Td bgColor='#FFFF00'>3</Td>
                        <Td bgColor='#FFFF00'>Max Loss</Td>
                        <Td bgColor='#FFFF00'>0.00%</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#FFFF00'>Current Date</Td>
                        <Td bgColor='#FFFF00'>2024-12-28</Td>
                        <Td bgColor='#FF0000'>Loss Trades</Td>
                        <Td bgColor='#FF0000'>3</Td>
                        <Td bgColor='#FF0000'>Max Loss</Td>
                        <Td bgColor='#FF0000'>0.00%</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#6CB56A'>Total Profit/Loss (P/L)</Td>
                        <Td bgColor='#6CB56A'>$2,875.00</Td>
                        <Td bgColor='#6CB56A'>Win %</Td>
                        <Td bgColor='#6CB56A'>3</Td>
                        <Td bgColor='#6CB56A'>Max Profit</Td>
                        <Td bgColor='#6CB56A'>0.00%</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#FFFF00'>Current Date</Td>
                        <Td bgColor='#FFFF00'>2024-12-28</Td>
                        <Td bgColor='#FFFF00'>Win Trades</Td>
                        <Td bgColor='#FFFF00'>3</Td>
                        <Td bgColor='#FFFF00'>Max Loss</Td>
                        <Td bgColor='#FFFF00'></Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#FFFF00'>Current Date</Td>
                        <Td bgColor='#FFFF00'>2024-12-28</Td>
                        <Td bgColor='#FFFF00'>Win Trades</Td>
                        <Td bgColor='#FFFF00'>3</Td>
                        <Td bgColor='#FFFF00'></Td>
                        <Td bgColor='#FFFF00'></Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}
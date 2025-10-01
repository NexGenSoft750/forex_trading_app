import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/base-table";
import TableHeader from '@/components/base-table/TableHeader';

export default function PortfolioTrackerSummaryTable() {
    return (
        <>
            <TableHeader heading='PORTFOLIO SUMMARY' />
            <Table cellPadding='large'>
                <Thead borderColor="#E5E7EB">
                    <Tr>
                        <Th borderColor="#E5E7EB" bgColor="#A4C2F4">Starting Account Balance</Th>
                        <Th borderColor="#E5E7EB" bgColor="#A4C2F4">1000</Th>
                        <Th borderColor="#E5E7EB" bgColor="#8BC34A">Win Percentage</Th>
                        <Th borderColor="#E5E7EB" bgColor="#8BC34A">72.73%</Th>
                        <Th borderColor="#E5E7EB" bgColor="#8BC34A">Percentage Growth in Portfolio</Th>
                        <Th borderColor="#E5E7EB" bgColor="#8BC34A">28.75%</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Start Date</Td>
                        <Td></Td>
                        <Td>Number of Losing Trades</Td>
                        <Td>3</Td>
                        <Td>Maximum Drawdown</Td>
                        <Td>0.00%</Td>
                    </Tr>
                    <Tr>
                        <Td>Current Date</Td>
                        <Td>2024-12-28</Td>
                        <Td>Win Trades</Td>
                        <Td>3</Td>
                        <Td>Max Loss</Td>
                        <Td>0.00%</Td>
                    </Tr>
                    <Tr>
                        <Td>Current Date</Td>
                        <Td>2024-12-28</Td>
                        <Td>Loss Trades</Td>
                        <Td>3</Td>
                        <Td>Max Loss</Td>
                        <Td>0.00%</Td>
                    </Tr>
                    <Tr>
                        <Td>Total Profit/Loss (P/L)</Td>
                        <Td>$2,875.00</Td>
                        <Td>Win %</Td>
                        <Td>3</Td>
                        <Td>Max Profit</Td>
                        <Td>0.00%</Td>
                    </Tr>
                    <Tr>
                        <Td>Current Date</Td>
                        <Td>2024-12-28</Td>
                        <Td>Win Trades</Td>
                        <Td>3</Td>
                        <Td>Max Loss</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>Current Date</Td>
                        <Td>2024-12-28</Td>
                        <Td>Win Trades</Td>
                        <Td>3</Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}
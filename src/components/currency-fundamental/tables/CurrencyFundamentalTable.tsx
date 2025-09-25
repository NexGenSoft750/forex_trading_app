import { Table, Thead, Th, Tr, Tbody, Td } from '@/components/base-table';

export default function CurrencyFundamentalTable() {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th bgColor='#01C519' rowSpan={2}></Th>
                    <Th bgColor='#01C519' rowSpan={2}>Latest</Th>
                    <Th bgColor='#01C519' rowSpan={2}>Previous</Th>
                    <Th bgColor='#01C519' rowSpan={2}>Change</Th>
                    <Th bgColor='#01C519' rowSpan={2}>Highest</Th>
                    <Th bgColor='#01C519' rowSpan={2}>Lowest</Th>
                    <Th bgColor='#01C519' rowSpan={2}></Th>
                    <Th bgColor='#01C519' rowSpan={2}></Th>
                    <Th bgColor='#01C519' colSpan={4}>Forecast</Th>
                    <Th bgColor='#01C519' colSpan={1}>Threshold Value</Th>
                    <Th bgColor='#01C519' colSpan={1}>Score</Th>
                </Tr>
                <Tr>
                    <Th bgColor='#01C519' borderColor='#ffffff'>Q1/25</Th>
                    <Th bgColor='#01C519' borderColor='#ffffff'>Q2/25</Th>
                    <Th bgColor='#01C519' borderColor='#ffffff'>Q3/25</Th>
                    <Th bgColor='#01C519' borderColor='#ffffff'>Q4/25</Th>
                    <Th bgColor='#01C519' borderColor='#ffffff'></Th>
                    <Th bgColor='#01C519' borderColor='#ffffff'></Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>GDP Growth Rate</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>GDP Annual Growth Rate</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>Unemployment Rate</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>Non Farm Payrolls</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>GDP Growth Rate</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>GDP Annual Growth Rate</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>Unemployment Rate</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>Non Farm Payrolls</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>GDP Growth Rate</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>GDP Annual Growth Rate</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>Unemployment Rate</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>Non Farm Payrolls</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>GDP Growth Rate</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>GDP Annual Growth Rate</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>Unemployment Rate</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>Non Farm Payrolls</Td>
                    <Td>2.3</Td>
                    <Td>3.1</Td>
                    <Td>-0.8</Td>
                    <Td>35.2</Td>
                    <Td>-28.1</Td>
                    <Td>Percent</Td>
                    <Td>Dec / 24</Td>
                    <Td>2.3</Td>
                    <Td>1.9</Td>
                    <Td>1.5</Td>
                    <Td>2.1</Td>
                    <Td>0.50%</Td>
                    <Td></Td>
                </Tr>
            </Tbody>
        </Table>
    );
}

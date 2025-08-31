import styles from './scoreBoard.module.scss';
import Table from "@/components/tables/Heatmap/Table";
import Tbody from "@/components/tables/Heatmap/Tbody";
import Td from "@/components/tables/Heatmap/Td";
import Th from "@/components/tables/Heatmap/Th";
import Thead from "@/components/tables/Heatmap/Thead";
import Tr from "@/components/tables/Heatmap/Tr";

export default function ScoreBoardMainTable() {
    return (
        <>
            <Table
                style={{ width: "150rem" }}
                bordered
            >
                <Thead>
                    <Tr>
                        <Th>Pair</Th>
                        <Th>Key Fundamental Score</Th>
                        <Th>Bias</Th>
                        <Th>Cot Score</Th>
                        <Th>Cot Bias</Th>
                        <Th>Seasonality</Th>
                        <Th>Seasonality Bias</Th>
                        <Th>Technical Score</Th>
                        <Th>Sentiment Score</Th>
                        <Th>Momentum Score</Th>
                        <Th>Net Score</Th>
                        <Th>Net Bias</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#8BC34A'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>01</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#ffffff'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>01</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#8BC34A'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>03</Td>
                        <Td bgColor='#FFFF00'>Bullish</Td>
                        <Td bgColor='#8BC34A'>01</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#ffffff'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>01</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#8BC34A'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>01</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#ffffff'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FF8484'>01</Td>
                        <Td bgColor='#FF8484'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#8BC34A'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>01</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#ffffff'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>01</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#FF8484'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FF8484'>01</Td>
                        <Td bgColor='#FF8484'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#8BC34A'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>01</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#FF8484'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>01</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#8BC34A'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>01</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#FF8484'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>01</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                    <Tr>
                        <Td bgColor='#D9D9D9'>USDCAD</Td>
                        <Td bgColor='#8BC34A'>17</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>03</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#8BC34A'>01</Td>
                        <Td bgColor='#8BC34A'>Bullish</Td>
                        <Td bgColor='#FFFF00'>0</Td>
                        <Td bgColor='#FF8484'>-3</Td>
                        <Td bgColor='#EDEDED'>0</Td>
                        <Td bgColor='#8BC34A'>18</Td>
                        <Td bgColor='#FFFF00'>Neutral</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}
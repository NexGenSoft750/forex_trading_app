import styles from './scoreBoard.module.scss';
import ScoreBoardFundamentalDataTable from '@/components/score-board/tables/ScoreBoardFundamentalDataTable';
import ScoreBoardMainTable from "@/components/score-board/tables/ScoreBoardMainTable";
import ScoreBoardMajorFundamentalTable from '@/components/score-board/tables/ScoreBoardMajorFundamentalTable';
import ScoreBoardMinorFundamentalTable from '@/components/score-board/tables/ScoreBoardMinorFundamentalTable';

export default function ScoreBoardPage() {
    return (
        <>
            <div>
                <ScoreBoardMainTable />
                <div className={styles.tableContainer}>
                    <div>
                        <ScoreBoardFundamentalDataTable />
                    </div>
                    <div>
                        <ScoreBoardMajorFundamentalTable />
                    </div>
                    <div>
                        <ScoreBoardMinorFundamentalTable/>
                    </div>
                </div>
            </div>
        </>
    );
}
import styles from './scoreBoard.module.scss';
import ScoreBoardFundamentalDataTable from '@/components/score-dashboard/tables/ScoreBoardFundamentalDataTable';
import ScoreBoardMainTable from "@/components/score-dashboard/tables/ScoreBoardMainTable";
import ScoreBoardMajorFundamentalTable from '@/components/score-dashboard/tables/ScoreBoardMajorFundamentalTable';
import ScoreBoardMinorFundamentalTable from '@/components/score-dashboard/tables/ScoreBoardMinorFundamentalTable';

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
                        <ScoreBoardMinorFundamentalTable />
                    </div>
                </div>
            </div>
        </>
    );
}
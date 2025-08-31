import styles from './COTPositions.module.scss';

export default function COTPositions() {
    return (
        <>
            <div className={styles.cotPositionsContainer}>
                <div className={styles.cotPositionsItem}>
                    <div className={styles.cotPositionsLabelsContainer}>
                        <span className={styles.cotPositionsLabel}>Long</span>
                        <span className={styles.cotPositionsLabel}>Short</span>
                    </div>
                    <div className={styles.cotPositionsWrapper}>
                        <div className={`${styles.cotPosition} ${styles.cotLongPosition}`}>12455</div>
                        <div className={`${styles.cotPosition} ${styles.cotShortPosition}`}>12455</div>
                    </div>
                    <span className={styles.cotPositionCaption}>Cot Non Commerical Positions</span>
                </div>
                <div className={styles.cotPositionsItem}>
                    <div className={styles.cotPositionsLabelsContainer}>
                        <span className={styles.cotPositionsLabel}>Long</span>
                        <span className={styles.cotPositionsLabel}>Short</span>
                    </div>
                    <div className={styles.cotPositionsWrapper}>
                        <div className={`${styles.cotPosition} ${styles.cotLongPosition}`}>12455</div>
                        <div className={`${styles.cotPosition} ${styles.cotShortPosition}`}>12455</div>
                    </div>
                    <span className={styles.cotPositionCaption}>Cot Commerical Positions</span>
                </div>
            </div>
        </>
    );
}
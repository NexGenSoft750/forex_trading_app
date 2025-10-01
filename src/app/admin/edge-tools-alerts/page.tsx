import styles from './EdgeToolsAlerts.module.scss';
import SentimentDriveIndex from '@/components/sentiment/SentimentDriveIndex';

export default function EdgeToolsAlertsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.sentimentSection}>
                <SentimentDriveIndex />
            </div>
        </div>
    );
}
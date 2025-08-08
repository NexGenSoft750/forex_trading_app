import styles from './WebsiteTrafficStats.module.scss';

export default function WebsiteTrafficStats() {
    return (
        <>
            <div className={styles.websiteTrafficStats}>
                <div className={styles.websiteTrafficStats__header}>
                    <h1 className={styles.websiteTrafficStats__heading}>Traffic by Website</h1>
                </div>
                <div className={styles.websiteTrafficStats__content}>
                    <ul className={styles.websiteTrafficStats__list}>
                        <li className={styles.websiteTrafficStats__item}>
                            <span className={styles.websiteTrafficStats__plaformName}>Google</span>
                            <span className={styles.websiteTrafficStats__trafficCount}>12.3k</span>
                        </li>
                        <li className={styles.websiteTrafficStats__item}>
                            <span className={styles.websiteTrafficStats__plaformName}>Instagram</span>
                            <span className={styles.websiteTrafficStats__trafficCount}>600</span>
                        </li>
                        <li className={styles.websiteTrafficStats__item}>
                            <span className={styles.websiteTrafficStats__plaformName}>Pintrest</span>
                            <span className={styles.websiteTrafficStats__trafficCount}>100</span>
                        </li>
                        <li className={styles.websiteTrafficStats__item}>
                            <span className={styles.websiteTrafficStats__plaformName}>Facebook</span>
                            <span className={styles.websiteTrafficStats__trafficCount}>1k</span>
                        </li>
                        <li className={styles.websiteTrafficStats__item}>
                            <span className={styles.websiteTrafficStats__plaformName}>Twitter</span>
                            <span className={styles.websiteTrafficStats__trafficCount}>10.3k</span>
                        </li>
                        <li className={styles.websiteTrafficStats__item}>
                            <span className={styles.websiteTrafficStats__plaformName}>Youtube</span>
                            <span className={styles.websiteTrafficStats__trafficCount}>5k</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
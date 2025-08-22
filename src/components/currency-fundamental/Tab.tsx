import styles from './Tab.module.scss';

export default function Tab() {
    return (
        <>
            <div className={styles.tab}>
                <span className={styles.tab__title}>USD &</span>
            </div>
        </>
    );
}
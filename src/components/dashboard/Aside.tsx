"use client";

import { FiX } from 'react-icons/fi';
import styles from './Aside.module.scss';
import DashboardNav from './DashboardNav';

interface AsideProps {
    onClose?: () => void;
}

export default function Aside({ onClose }: AsideProps) {
    return (
        <>
            <aside className={`${styles["sidebar"]} ${styles["sidebar-bg-dark"]}`}>
                {/* Mobile Close Button */}
                <button
                    className={styles["sidebar__close-btn"]}
                    onClick={onClose}
                    aria-label="Close sidebar"
                >
                    <FiX size={24} />
                </button>

                <div className={styles["sidebar__logo-wrapper"]}>
                    {/* <Image
                            src="/images/dashboard/profile.svg"
                            alt="Notification Icon"
                            className={styles["sidebar__logo-img"]}
                            fill
                        /> */}
                    Logo
                </div>
                <DashboardNav />
            </aside>
        </>
    );
}
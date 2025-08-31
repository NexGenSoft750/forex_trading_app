import Image from 'next/image';
import { ReactNode } from 'react';
import SearchBar from './SearchBar';
import styles from './Header.module.scss';

type HeaderProps = {
    className?: string;
    text?: string,
    children?: ReactNode;
};

export default function Header({
    className = '',
    text,
    children
}: HeaderProps = {}) {
    return (
        <>
            <header className={`${styles.header} ${className}`}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {children}
                    <h1 className={styles.header__heading}>
                        {text}!
                    </h1>
                </div>
                <div className={styles.header__actions}>
                    <SearchBar />
                    <div className={styles.header__user_info}>
                        <div className={styles.header__notification}>
                            <Image
                                src="/images/dashboard/notification.svg"
                                alt="Notification Icon"
                                className={styles.header__notification_img}
                                width={100}
                                height={100}
                            />
                            <div className={styles.header__notification__indicator}></div>
                        </div>
                        <div className={styles.header__profile_navigation}>
                            <div className={styles.header__profile_img_wrapper}>
                                <Image
                                    src="/images/dashboard/profile.svg"
                                    alt='Profile Img'
                                    className={styles.header__profile_img}
                                    fill
                                />
                            </div>
                            <div className={styles.header__profile_info}>
                                <span className={styles.header__user_name}>Musfiq</span>
                                <span className={styles.header__user_role}>Admin</span>
                            </div>

                            <svg
                                className={styles.down_arrow}
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
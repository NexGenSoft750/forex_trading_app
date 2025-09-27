import styles from './EducationNavItem.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

type EducationNavItemProps = {
    label: string;
    isActive: boolean;
    onClick: () => void;
};

const EducationNavItem = ({ label, isActive, onClick }: EducationNavItemProps) => {
    return (
        <>
            <li
                className={
                    clsx(
                        styles.educationNavItem,
                        { [styles["educationNavItem--active"]]: isActive, }
                    )
                }
                onClick={onClick}
            >
                <div className={styles.educationNavItem__labelWrapper}>
                    <Image
                        src="/images/education/video-player-icon.svg"
                        alt="video player icon"
                        width={25}
                        height={25}
                    />
                    <span className={styles.educationNavItem__label}>{label}</span>
                </div>
                <svg
                    className={styles.educationNavItem__rightArrow}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M9 6L15 12L9 18"
                        stroke="#64748B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </li >
        </>
    );
}

export default EducationNavItem;
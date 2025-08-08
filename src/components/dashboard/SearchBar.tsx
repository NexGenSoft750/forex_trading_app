import Image from 'next/image';
import styles from './SearchBar.module.scss';
import { useRef } from 'react';

const SearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearchFocusOnClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div className={styles["search-bar"]}>
            <div className={styles["search-bar__input-container"]}>
                <Image
                    className={styles["search-bar__icon"]}
                    onClick={handleSearchFocusOnClick}
                    src="/images/dashboard/magnifier.svg"
                    alt='search icon'
                    width={22.5}
                    height={22.5}
                />
                <input
                    ref={inputRef}
                    className={styles["search-bar__field"]}
                    placeholder='Search here...'
                    type="search"
                />
            </div>
        </div>
    );
};

export default SearchBar;
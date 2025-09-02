import styles from './Tr.module.scss';

type TrProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    equalWidth?: boolean;
};

export default function Tr({
    children,
    style,
    equalWidth = false,
}: TrProps) {
    return (
        <>
            <tr
                className={`${equalWidth ? styles.equalWidth : ''}`}
                style={style}
            >
                {children}
            </tr>
        </>
    );
}
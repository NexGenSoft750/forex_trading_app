import styles from './TextPanel.module.scss';
import clsx from 'clsx';

type TextPanelProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    light?: boolean
}

export default function TextPanel({ children, style, light = false }: TextPanelProps) {
    return (
        <>
            <div
                className={
                    clsx(
                        styles.textPanel,
                        { [styles.lightVersion]: light }
                    )
                }
                style={style}
            >
                {children}
            </div >
        </>
    );
}
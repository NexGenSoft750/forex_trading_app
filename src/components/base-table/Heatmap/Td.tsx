import React from 'react';
import styles from './Td.module.scss';

type TdProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    bold?: boolean;
    color?: string;
    bgColor?: string;
    borderColor?: string;
    colSpan?: number;
    rowSpan?: number;
    fontSize?: 'small' | 'large';
    textDecoration?: 'default' | 'underline';
};

export default function Td({
    children,
    style,
    bold = false,
    rowSpan = 1,
    colSpan = 1,
    fontSize = 'large',
    color = "#000000",
    bgColor = "#ffffff",
    borderColor,
    textDecoration = 'default',
}: TdProps) {
    const getTdClasses = (): string => [
        bold ? styles['td--bold'] : '',
        textDecoration === 'underline' ? styles['td--underline'] : '',
        fontSize === 'small' ? styles['td--small-text'] : '',
    ].join("");

    return (
        <>
            <td
                className={`${styles.td} ${getTdClasses()}`}
                style={{
                    ...style,
                    color: color,
                    backgroundColor: bgColor,
                    border: `3px solid ${borderColor}`,
                }}
                colSpan={colSpan}
                rowSpan={rowSpan}
            >
                {children}
            </td>
        </>
    );
}
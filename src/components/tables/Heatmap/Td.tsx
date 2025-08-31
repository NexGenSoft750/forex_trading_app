import React from 'react';
import styles from './Td.module.scss';

type TdProps = { 
    children?: React.ReactNode; 
    style?: React.CSSProperties;
    fontSize?: 'small' | 'large';
    color?: string; 
    bgColor?: string; 
    light?: boolean; 
    bold?: boolean; 
    textDecoration?: 'default' | 'underline';
    colSpan?: number;
    rowSpan?: number;
};

export default function Td({
    children,
    style,
    fontSize = 'large',
    color = "#000000",
    bgColor = "#ffffff",
    bold = false,
    textDecoration = 'default',
    rowSpan = 1,
    colSpan = 1,
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
                }}
                colSpan={colSpan}
                rowSpan={rowSpan}
            >
                {children}
            </td>
        </>
    );
}
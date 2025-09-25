"use client";

import React, { useRef } from 'react';
import styles from './BaseTable.module.scss';

export type TableProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    cellPadding?: 'normal' | 'large';
    bordered?: boolean;
    borderSpacing?: boolean;
    smallBorderSpacing?: boolean;
    rounded?: 'default' | 'top';
    enableDragScroll?: boolean;
    scrollSpeedMultiplier?: number;
    ariaLabel?: string;
};

export function Table({
    children,
    style,
    className,
    cellPadding = 'normal',
    bordered = false,
    borderSpacing = false,
    smallBorderSpacing = false,
    rounded = 'default',
    enableDragScroll = true,
    scrollSpeedMultiplier = 1,
    ariaLabel,
}: TableProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const getTableClasses = () => [
        rounded === 'top' ? styles['table--rounded-top'] : "",
        cellPadding === 'large' ? styles['table--cellPaddingLarge'] : "",
        bordered ? styles['table--bordered'] : "",
        borderSpacing ? styles['table--border-spacing'] : "",
        smallBorderSpacing ? styles['table--border-small-spacing'] : "",
    ].join(" ");

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!containerRef.current) return;

        isDragging.current = true;
        startX.current = e.pageX - containerRef.current.offsetLeft;
        scrollLeft.current = containerRef.current.scrollLeft;
        containerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !containerRef.current) return;

        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX.current) * scrollSpeedMultiplier;
        containerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        if (containerRef.current) {
            containerRef.current.style.cursor = 'pointer';
        }
    };

    const handleMouseLeave = () => {
        if (isDragging.current) {
            isDragging.current = false;
            if (containerRef.current) {
                containerRef.current.style.cursor = 'pointer';
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={styles.tableContainer}
            {...(enableDragScroll ? {
                onMouseDown: handleMouseDown,
                onMouseMove: handleMouseMove,
                onMouseUp: handleMouseUp,
                onMouseLeave: handleMouseLeave,
            } : {})}
        >
            <table
                className={`${styles.table} ${getTableClasses()} ${className || ''}`}
                style={{
                    ...style,
                }}
                aria-label={ariaLabel}
            >
                {children}
            </table>
        </div>
    );
}

export type TheadProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    bgColor?: string | null;
    borderColor?: string | null;
};

export function Thead({
    children,
    className,
    style,
    bgColor,
    borderColor,
}: TheadProps) {
    const headStyle: React.CSSProperties & { [key: string]: string | number | undefined } = {
        ...style,
        ...(bgColor ? { backgroundColor: bgColor } : {}),
        ...(borderColor ? { ['--border-color']: borderColor } : {}),
    };
    return (
        <thead
            className={`${styles.thead} ${className || ''}`}
            style={headStyle}
        >
            {children}
        </thead>
    );
}

export type TbodyProps = { children: React.ReactNode; fullBorders?: boolean; className?: string; style?: React.CSSProperties; };

export function Tbody({
    children,
    fullBorders = false,
    className,
    style,
}: TbodyProps) {
    return (
        <tbody className={`${styles.tbody} ${fullBorders ? styles['tbody-full-borders'] : ''} ${className || ''}`} style={style}>
            {children}
        </tbody>
    );
}

export type TrProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    equalWidth?: boolean;
};

export function Tr({
    children,
    style,
    className,
    equalWidth = false,
}: TrProps) {
    return (
        <tr
            className={`${equalWidth ? styles.equalWidth : ''} ${className || ''}`}
            style={style}
        >
            {children}
        </tr>
    );
}

export type ThProps = {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    color?: React.CSSProperties['color'];
    bgColor?: string;
    borderColor?: string;
    colSpan?: number;
    rowSpan?: number;
    textDecoration?: 'default' | 'underline';
};

export function Th({
    children,
    className,
    style,
    color = '#000000',
    bgColor = "#ffffff",
    borderColor,
    colSpan = 1,
    rowSpan = 1,
    textDecoration = 'default',
}: ThProps) {
    const thStyle: React.CSSProperties & { [key: string]: string | number | undefined } = {
        ...style,
        color,
        border: `3px solid ${borderColor}`,
        ...(bgColor ? { backgroundColor: bgColor, ['--border-top-color']: bgColor } : {}),
    };
    return (
        <th
            colSpan={colSpan}
            rowSpan={rowSpan}
            className={`${styles.th} ${textDecoration === 'underline' ? styles['th--underline'] : ''} ${className || ''}`}
            style={thStyle}
        >
            {children}
        </th>
    );
}

export type TdProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    bold?: boolean;
    color?: React.CSSProperties['color'];
    bgColor?: string;
    borderColor?: string;
    colSpan?: number;
    rowSpan?: number;
    fontSize?: 'small' | 'large';
    textDecoration?: 'default' | 'underline';
};

export function Td({
    children,
    style,
    className,
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
        <td
            className={`${styles.td} ${getTdClasses()} ${className || ''}`}
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
    );
}



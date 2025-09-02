"use client";

import React, { useRef } from 'react';
import styles from './Table.module.scss';

type TableProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  cellPadding?: 'normal' | 'large';
  bordered?: boolean;
  borderSpacing?: boolean;
  smallBorderSpacing?: boolean;
  rounded?: 'default' | 'top';
};

const SCROLL_SPEED_MULTIPLIER = 1;

export default function Table({
  children,
  style,
  cellPadding = 'normal',
  bordered = false,
  borderSpacing = false,
  smallBorderSpacing = false,
  rounded = 'default',
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
    const walk = (x - startX.current) * SCROLL_SPEED_MULTIPLIER; // Scroll speed multiplier
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
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <table
        className={`${styles.table} ${getTableClasses()}`}
        style={
          {
            ...style,
          }
        }
      >
        {children}
      </table>
    </div >
  );
}

"use client";

import { ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export default function Section({
    children,
    className = ''
}: SectionProps) {
    return (
        <section className={`${styles.section} ${className}`}>
            {children}
        </section>
    );
} 
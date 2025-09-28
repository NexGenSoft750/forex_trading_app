"use client";

import { SelectHTMLAttributes } from "react";
import styles from "./Select.module.scss";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
}

export default function Select({ label, ...props }: SelectProps) {
    return (
        <div className={styles.inputWrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <select className={styles.select} {...props} />
        </div>
    );
}
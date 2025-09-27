"use client";

import React, { useState } from 'react';
import styles from './UsersManagementTable.module.scss';

interface User {
    id: string;
    userId: string;
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
    subscribedPackage: string;
    packagePrice: number;
    expiredAt: string;
    paidAmount: string;
}

const UsersManagementTable: React.FC = () => {
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const users: User[] = [
        {
            id: '1',
            userId: 'ABC0001',
            name: 'Ali',
            surname: 'Ahmad',
            email: 'abc@gmail.com',
            phoneNumber: '0300-0000000',
            subscribedPackage: 'Basic Plan (25$)',
            packagePrice: 25,
            expiredAt: '02 / 03 / 2025',
            paidAmount: '25 $'
        },
        {
            id: '2',
            userId: 'ABC0001',
            name: 'Ali',
            surname: 'Ahmad',
            email: 'abc@gmail.com',
            phoneNumber: '0300-0000000',
            subscribedPackage: 'Basic Plan (25$)',
            packagePrice: 25,
            expiredAt: '02 / 03 / 2025',
            paidAmount: '25 $'
        },
        {
            id: '3',
            userId: 'ABC0001',
            name: 'Ali',
            surname: 'Ahmad',
            email: 'abc@gmail.com',
            phoneNumber: '0300-0000000',
            subscribedPackage: 'Basic Plan (25$)',
            packagePrice: 25,
            expiredAt: '02 / 03 / 2025',
            paidAmount: '25 $'
        },
        {
            id: '4',
            userId: 'ABC0001',
            name: 'Ali',
            surname: 'Ahmad',
            email: 'abc@gmail.com',
            phoneNumber: '0300-0000000',
            subscribedPackage: 'Basic Plan (25$)',
            packagePrice: 25,
            expiredAt: '02 / 03 / 2025',
            paidAmount: '25 $'
        },
        {
            id: '5',
            userId: 'ABC0001',
            name: 'Ali',
            surname: 'Ahmad',
            email: 'abc@gmail.com',
            phoneNumber: '0300-0000000',
            subscribedPackage: 'Basic Plan (25$)',
            packagePrice: 25,
            expiredAt: '02 / 03 / 2025',
            paidAmount: '25 $'
        },
        {
            id: '6',
            userId: 'ABC0001',
            name: 'Ali',
            surname: 'Ahmad',
            email: 'abc@gmail.com',
            phoneNumber: '0300-0000000',
            subscribedPackage: 'Basic Plan (25$)',
            packagePrice: 25,
            expiredAt: '02 / 03 / 2025',
            paidAmount: '25 $'
        },
        {
            id: '7',
            userId: 'ABC0001',
            name: 'Ali',
            surname: 'Ahmad',
            email: 'abc@gmail.com',
            phoneNumber: '0300-0000000',
            subscribedPackage: 'Basic Plan (25$)',
            packagePrice: 25,
            expiredAt: '02 / 03 / 2025',
            paidAmount: '25 $'
        },
        {
            id: '8',
            userId: 'ABC0001',
            name: 'Ali',
            surname: 'Ahmad',
            email: 'abc@gmail.com',
            phoneNumber: '0300-0000000',
            subscribedPackage: 'Basic Plan (25$)',
            packagePrice: 25,
            expiredAt: '02 / 03 / 2025',
            paidAmount: '25 $'
        },
        {
            id: '9',
            userId: 'ABC0001',
            name: 'Ali',
            surname: 'Ahmad',
            email: 'abc@gmail.com',
            phoneNumber: '0300-0000000',
            subscribedPackage: 'Basic Plan (25$)',
            packagePrice: 25,
            expiredAt: '02 / 03 / 2025',
            paidAmount: '25 $'
        },
        {
            id: '10',
            userId: 'ABC0001',
            name: 'Ali',
            surname: 'Ahmad',
            email: 'abc@gmail.com',
            phoneNumber: '0300-0000000',
            subscribedPackage: 'Basic Plan (25$)',
            packagePrice: 25,
            expiredAt: '02 / 03 / 2025',
            paidAmount: '25 $'
        }
    ];

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(users.map(user => user.id));
        }
        setSelectAll(!selectAll);
    };

    const handleSelectUser = (userId: string) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter(id => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    const handleView = (userId: string) => {
        console.log('View user:', userId);
    };

    const handleEdit = (userId: string) => {
        console.log('Edit user:', userId);
    };

    const handleDelete = (userId: string) => {
        console.log('Delete user:', userId);
    };

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.headerRow}>
                        <th className={styles.headerCell}>
                            <div className={styles.selectHeader}>
                                <div className={styles.checkboxWrapper}>
                                    <input
                                        type="checkbox"
                                        checked={selectAll}
                                        onChange={handleSelectAll}
                                        className={styles.checkbox}
                                        aria-label="Select all users"
                                    />
                                </div>
                                <span>Select</span>
                            </div>
                        </th>

                        <th className={styles.headerCell}>User ID</th>
                        <th className={styles.headerCell}>Name / Surname</th>
                        <th className={styles.headerCell}>E-mail</th>
                        <th className={styles.headerCell}>Phone number</th>
                        <th className={styles.headerCell}>Subscribed package</th>
                        <th className={styles.headerCell}>Expired at</th>
                        <th className={styles.headerCell}>Paid Amount</th>
                        <th className={styles.headerCell}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className={styles.dataRow}>
                            <td className={`${styles.dataCell} ${styles.checkboxDataCell}`}>
                                <div className={styles.checkboxWrapper}>
                                    <input
                                        type="checkbox"
                                        checked={selectedUsers.includes(user.id)}
                                        onChange={() => handleSelectUser(user.id)}
                                        className={styles.checkbox}
                                        aria-label={`Select user ${user.name}`}
                                    />
                                </div>
                            </td>

                            <td className={styles.dataCell}>
                                {user.userId}
                            </td>
                            <td className={styles.dataCell}>
                                {user.name} / {user.surname}
                            </td>
                            <td className={styles.dataCell}>
                                {user.email}
                            </td>
                            <td className={styles.dataCell}>
                                {user.phoneNumber}
                            </td>
                            <td className={styles.dataCell}>
                                {user.subscribedPackage}
                            </td>
                            <td className={styles.dataCell}>
                                {user.expiredAt}
                            </td>
                            <td className={styles.dataCell}>
                                {user.paidAmount}
                            </td>
                            <td className={styles.dataCell}>
                                <div className={styles.actionsContainer}>
                                    <button
                                        className={`${styles.actionButton} ${styles.viewButton}`}
                                        onClick={() => handleView(user.id)}
                                        title="View"
                                    >
                                        {/* Eye Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 5c-7.633 0-11 7-11 7s3.367 7 11 7 11-7 11-7-3.367-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                                        </svg>
                                    </button>

                                    <button
                                        className={`${styles.actionButton} ${styles.editButton}`}
                                        onClick={() => handleEdit(user.id)}
                                        title="Edit"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                        </svg>
                                    </button>
                                    <button
                                        className={`${styles.actionButton} ${styles.deleteButton}`}
                                        onClick={() => handleDelete(user.id)}
                                        title="Delete"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersManagementTable;
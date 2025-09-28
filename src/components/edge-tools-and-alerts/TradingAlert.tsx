import { Input, Select, Textarea, Dropzone } from '@/components/ui/form';
import styles from './TradingAlert.module.scss';
import Button from '../ui/form/Button';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { BiBold } from 'react-icons/bi';
import Link from 'next/link';
import { useId } from "react";

const TradingAlert = () => {
    const pairId = useId();
    const directionId = useId();
    const entryId = useId();
    const stopLossId = useId();
    const tp1Id = useId();
    const tp2Id = useId();

    return (
        <div className={styles.tradingAlert} role="region" aria-label="Trading Alert">
            <header className={styles.tradingAlert__header}>
                <div className={styles.tradingAlert__tradeIdLabel}>Trade ID</div>
                <div className={styles.tradingAlert__tradeIdNo}>920251</div>
            </header>

            <div className={styles.tradingAlert__body}>
                <form aria-label="Trading Alert Form">
                    <Input label="Pair" id={pairId} />
                    <Select label="Direction" defaultValue="buy" id={directionId}>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                    </Select>

                    <div className={styles.tradingAlert__formGroup}>
                        <Input label="Entry Level" id={entryId} />
                        <Input label="Stop Loss" id={stopLossId} />
                    </div>

                    <div className={styles.tradingAlert__formGroup}>
                        <Input label="TP1" id={tp1Id} />
                        <Input label="TP2" id={tp2Id} />
                    </div>

                    <div className={styles.tradingAlert__dropZoneWrapper}>
                        <Dropzone aria-label="Upload trade Charts or file" />
                    </div>

                    <Textarea label="Trade Follow-up" rows={2} />

                    <div className={styles.tradingAlert__btnWrapper}>
                        <Button aria-label="Save Trading Alert">Save to Portfolio Tracker</Button>
                    </div>
                </form>
            </div>

            <footer className={styles.tradingAlert__footer}>
                <div className={styles.tradingAlert__socialLinks}>
                    <Link
                        href="#"
                        aria-label="Share on WhatsApp"
                        className={`${styles.tradingAlert__socialIcon} ${styles.whatsapp}`}
                    >
                        <FaWhatsapp aria-hidden="true" />
                    </Link>
                    <Link
                        href="#"
                        aria-label="Share on Telegram"
                        className={`${styles.tradingAlert__socialIcon} ${styles.telegram}`}
                    >
                        <FaTelegramPlane aria-hidden="true" />
                    </Link>
                    <Link
                        href="#"
                        aria-label="Share on Brand B"
                        className={`${styles.tradingAlert__socialIcon} ${styles.brandB}`}
                    >
                        <BiBold aria-hidden="true" />
                    </Link>
                </div>

                <div className={styles.tradingAlert__actions}>
                    <button
                        aria-label="Edit this Trade Alert"
                        className={styles.tradingAlert__editBtn}
                    >
                        Edit
                    </button>
                    <button
                        aria-label="Delete this Trade Alert"
                        className={styles.tradingAlert__deleteBtn}
                    >
                        Delete
                    </button>
                </div>

                <div className={styles.tradingAlert__infoText}>
                    Save Trade to Trade Alerts History
                </div>
            </footer>
        </div>
    );
};

export default TradingAlert;
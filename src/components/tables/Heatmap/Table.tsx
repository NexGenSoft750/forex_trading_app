import styles from './Table.module.scss';

type TableProps = { 
  children: React.ReactNode; 
  style?: React.CSSProperties;
  cellPadding?: 'normal' | 'large';
  bordered?: boolean;
  rounded?: 'default' | 'top';
};

export default function Table({ 
  children, 
  style, 
  cellPadding = 'normal', 
  bordered = false, 
  rounded = 'default'
}: TableProps) {

  const getTableClasses = () => [
    rounded === 'top' ? styles['table--rounded-top'] : "",
    cellPadding === 'large' ? styles['table--cellPaddingLarge'] : "",
    bordered ? styles['table--bordered'] : "",
  ].join(" ");

  return (
    <div className={styles.tableContainer}>
      <table
        className={`${styles.table} ${getTableClasses()}`}
        style={style}
      >
        {children}
      </table>
    </div>
  );
}

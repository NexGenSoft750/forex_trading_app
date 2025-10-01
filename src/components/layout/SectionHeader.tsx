import styles from './SectionHeader.module.scss';
import { Row, Col } from '@/components/layout';

const SectionHeader = ({ children, className = '' }: { children: React.ReactNode, className?: string; }) => (
    <Row className={`${styles.sectionHeader} ${className}`}>
        <Col>{children}</Col>
    </Row>
);

export default SectionHeader;
import styles from './SectionHeader.module.scss';
import { Row, Col } from '@/components/layout';

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
    <Row className={styles.sectionHeader}>
        <Col>{children}</Col>
    </Row>
);

export default SectionHeader;
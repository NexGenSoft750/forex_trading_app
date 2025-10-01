import { Textarea } from './form';
import styles from './TextHere.module.scss';

const TextHere = () => {
    return (
        <>
            <Textarea
                placeholder='Text Here'
                rows={6}
                className={styles.centerPlaceholder}
            />
        </>
    );
};

export default TextHere;
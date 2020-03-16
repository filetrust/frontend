import React from 'react';

import styles from './TitleButton.module.scss';

const TitleButton = () => {
    return (
        <a href="https://github.com/filetrust/frontend"
            className={styles.button}
            target="_blank"
            rel="noreferrer noopener">Github</a>
    );
}

export default TitleButton;
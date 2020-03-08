import React from "react";

import styles from "./TitleButton.module.scss";

function TitleButton() {
    return (
        <a href="https://github.com/filetrust/frontend"
            className={styles.button}
            target="_blank"
            rel="noreferrer noopener">Github</a>
    );
}

export default TitleButton;
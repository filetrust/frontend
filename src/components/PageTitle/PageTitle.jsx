import React from "react";

import styles from "./PageTitle.module.scss";

function PageTitle(props) {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.heading}>{props.heading}</h1>
            <h2 className={styles.subHeading}>{props.subHeading}</h2>
            <div className={styles.childContainer}>
                {props.children}
            </div>
        </div>
    );
}

export default PageTitle;
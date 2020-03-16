import React from 'react';

import styles from './PageTitle.module.scss';

const PageTitle = ({heading, subHeading, children}) => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.heading}>{heading}</h1>
            <h2 className={styles.subHeading}>{subHeading}</h2>
            <div className={styles.childContainer}>
                {children}
            </div>
        </div>
    );
};

export default PageTitle;
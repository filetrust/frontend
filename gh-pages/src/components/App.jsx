import React from 'react';

import styles from './App.module.scss';

import GlasswallLoginLogo from './GlasswallLoginLogo/GlasswallLoginLogo';
import PageTitle from './PageTitle/PageTitle';
import TitleButton from '../components/TitleButton/TitleButton';
import ReactStyleGuide from './ReactStyleGuide/ReactStyleGuide';


const App = () => {

    return (
        <div className={styles.app}>
            <div className={styles.titleContainer}>
                <GlasswallLoginLogo />
                <PageTitle
                    heading="Glasswall's Frontend Style Guide"
                    subHeading="A frontend coding standards guideline, hopefully to enforce a consistent and maintainable frontend codebase.">

                    <TitleButton />

                </PageTitle>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.main}>
                    <div className={styles.content}>
                        <ReactStyleGuide />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
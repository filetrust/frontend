import React from "react";

import styles from "./App.module.scss";

import PageTitle from "./PageTitle/PageTitle";
import TitleButton from "../components/TitleButton/TitleButton";
import GlasswallLoginLogo from "./GlasswallLoginLogo/GlasswallLoginLogo";

function App() {

    return (
        <div className={styles.app}>
            <div className={styles.titleContainer}>
                <GlasswallLoginLogo />
                <PageTitle
                    heading="Glasswall's Frontend Coding Style-Guide"
                    subHeading="A frontend coding standards guideline, hopefully to enforce a consistent and maintainable frontend codebase." >

                    <TitleButton />

                </PageTitle>
            </div>
            <div className={styles.mainContainer}>
                Content
                <h1> </h1>
                <h1> </h1>
            </div>
        </div>
    );
}

export default App;
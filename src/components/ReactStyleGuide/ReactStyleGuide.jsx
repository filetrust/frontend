import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';

import { HeadingRenderer } from '../common/HeadingRenderer';

import styles from '../common/StyleGuide.module.scss';

const ReactStyleGuide = () => {
    const [markdownContent, setMarkdownContent] = useState('#Content Loading...');

    const reactStyleGuideGithubPath = 'https://raw.githubusercontent.com/filetrust/frontend/master/react/README.md?token=AOFXUCZAZYQW7OUGNIODGDC6ONPHQ';

    const fetchMdContent = useCallback(async (filePath) => {
        await fetch(filePath)
            .then((response) => {
                return response.text();
            }).then((text) => {
                setMarkdownContent(text);
            });
    }, [setMarkdownContent]);

    useEffect(() => {
        fetchMdContent(reactStyleGuideGithubPath);
    }, []);

    return (
        <div className={styles.innerContent}>
            <ReactMarkdown source={markdownContent} renderers={{heading: HeadingRenderer}}/>
        </div>
    );
};

export default ReactStyleGuide;
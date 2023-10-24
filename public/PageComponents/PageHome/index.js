"use client";

import React, { useCallback } from 'react'
import Intro from './Intro'
import styles from './styles.module.css'
import Description from './Description/indes';


function PageLanding() {

    return (
        <div className={styles.landing_page}>
            <div className={styles.landing_page_content}>
                <div className={styles.intro_section_container}>
                    <Intro />
                </div>
                <div className={styles.right_content}>
                    <Description />
                    <Description />
                    <Description />
                    <Description />
                </div>
            </div>
        </div>
    )
}

export default PageLanding
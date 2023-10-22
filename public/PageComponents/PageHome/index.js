"use client";

import React, { useCallback } from 'react'
import Intro from './Intro'
import styles from './styles.module.css'


function PageLanding() {

    return (
        <div className={styles.landing_page}>
            <div className={styles.landing_page_content}>
                <Intro />
            </div>
        </div>
    )
}

export default PageLanding
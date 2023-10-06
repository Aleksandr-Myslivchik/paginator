import {Outlet} from "react-router-dom";
import React from "react";
import styles from './styles.module.css'

export const Layout = () => {
    return (
        <div className={styles.app}>
            <header id='header'>Header</header>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <footer id='footer'>Footer</footer>
        </div>
    )
        ;
}
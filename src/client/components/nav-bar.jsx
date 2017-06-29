import React from "react";
import styles from "../styles/nav-bar.css";
import { Link } from "react-router";

function NavBar() {
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.linkWrapper }>
                <Link className={ styles.link } href="/">Home</Link>
                <Link className={ styles.link } href="/gallery">Photos</Link>
                <Link className={ styles.link } href="/materials">Materials</Link>
            </div>
        </div>
    );
}

export default NavBar;

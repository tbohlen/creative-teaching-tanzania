import React from "react";
import styles from "../styles/home.css";

function Home(props) {
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.titleWrapper }>
                <h1>Exploding Dots</h1>
                <h1>Science Leadership</h1>
                <h1>Tanzania 2017</h1>
            </div>
        </div>
    );
}

export default Home;

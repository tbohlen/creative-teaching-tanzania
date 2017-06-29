import React from "react";
import styles from "../styles/footer.css";

function Footer() {
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.logos }>
                <a href="http://www.healinternational.org">
                    <img src="/images/heal.png" className={ styles.logo } />
                </a>
                <a href="http://www.theglobalmathproject.org/gmw">
                    <img src="/images/exploding-dots.png" className={ styles.explodingDotsLogo } />
                </a>
                <a href="http://www.beaglelearning.com">
                    <img src="/images/beagle.png" className={ styles.beagleLogo } />
                </a>
            </div>
        </div>
    );
}

export default Footer;

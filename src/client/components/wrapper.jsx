import React from "react";
import PropTypes from "prop-types";
import NavBar from "./nav-bar";
import Footer from "./footer";
import styles from "../styles/wrapper.css";

function Wrapper(props) {
    return (
        <div className={ styles.wrapper }>
            <NavBar />
            { props.children }
            <Footer />
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ])
};

export default Wrapper;

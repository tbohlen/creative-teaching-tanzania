import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/gallery-image.css";

function GalleryImage(props) {
    return (
        <img src={ props.url } className={ styles.image } />
    );
}

GalleryImage.propTypes = {
    url: PropTypes.string.isRequired,
};

export default GalleryImage;

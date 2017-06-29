import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/gallery-image.css";

function GalleryImage(props) {
    return (
        <a href={ props.url } className={ styles.imageLink }>
            <img src={ props.url } className={ styles.image } />
        </a>
    );
}

GalleryImage.propTypes = {
    url: PropTypes.string.isRequired,
};

export default GalleryImage;

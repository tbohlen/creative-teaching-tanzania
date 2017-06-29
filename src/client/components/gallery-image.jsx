import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/gallery-image.css";

function GalleryImage(props) {
    return (
        <a href={ `/images/${props.fileName}` } className={ styles.imageLink }>
            <img src={ `/images/small/${props.fileName}` } className={ styles.image } />
        </a>
    );
}

GalleryImage.propTypes = {
    fileName: PropTypes.string.isRequired,
};

export default GalleryImage;

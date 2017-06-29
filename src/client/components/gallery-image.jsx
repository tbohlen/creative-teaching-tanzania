import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/gallery-image.css";

function GalleryImage(props) {
    return (
        <div className={ styles.imageWrapper }>
            <a href={ `/images/${props.fileName}` } className={ styles.imageLink }>
                <img src={ `/images/small/${props.fileName}` } className={ styles.image } />
            </a>
        </div>
    );
}

GalleryImage.propTypes = {
    fileName: PropTypes.string.isRequired,
};

export default GalleryImage;

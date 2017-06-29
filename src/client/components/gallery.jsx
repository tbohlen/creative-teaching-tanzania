import React, { Component } from "react";
import styles from "../styles/gallery.css";

const IMAGES = [];
class Gallery extends Component {
    render() {
        return (
            <div className={ styles.wrapper }>
                { IMAGES.map((url, id) => {
                    return <GalleryImage url={ url } id={ id } />;
                })}
            </div>
        );
    }
}

export default Gallery;

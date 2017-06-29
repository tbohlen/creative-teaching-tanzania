import React, { Component } from "react";
import GalleryImage from "./gallery-image";
import styles from "../styles/gallery.css";

const IMAGES = ["/images/workshop-1.png", "/images/workshop-2.png", "/images/workshop-3.png", "/images/workshop-4.png", "/images/workshop-5.png", "/images/workshop-6.png", "/images/workshop-7.png", "/images/workshop-8.png", "/images/workshop-9.png", "/images/workshop-10.png", "/images/workshop-11.png", "/images/workshop-12.png", "/images/workshop-13.png"];
class Gallery extends Component {
    render() {
        return (
            <div className={ styles.wrapper }>
                <div className={ styles.innerWrapper }>
                    { IMAGES.map((url, id) => {
                        return <GalleryImage url={ url } key={ id } />;
                    })}
                </div>
            </div>
        );
    }
}

export default Gallery;

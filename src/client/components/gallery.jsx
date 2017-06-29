import React, { Component } from "react";
import GalleryImage from "./gallery-image";
import styles from "../styles/gallery.css";

const IMAGES = ["workshop-1.png", "workshop-2.png", "workshop-3.png", "workshop-4.png", "workshop-5.png", "workshop-6.png", "workshop-7.png", "workshop-8.png", "workshop-9.png", "workshop-10.png", "workshop-11.png", "workshop-12.png", "workshop-13.png", "workshop-14.png"];
class Gallery extends Component {
    render() {
        return (
            <div className={ styles.wrapper }>
                <div className={ styles.innerWrapper }>
                    <h1 className={ styles.title }>Photos</h1>
                    { IMAGES.map((fileName, id) => {
                        return <GalleryImage fileName={ fileName } key={ id } />;
                    })}
                </div>
            </div>
        );
    }
}

export default Gallery;

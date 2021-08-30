import './ImageList.css';
import React from 'react';
import ImageCard from '../ImageCard/ImageCard';

const ImageList = (props) => {
    const images = props.returnImageResults.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;

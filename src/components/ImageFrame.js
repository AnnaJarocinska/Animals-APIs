import React from 'react';
import '../style/ImageFrame.css';

const ImageFrame = (props) => {
    return (
        <div className="imageFrame">
            {props.children}
        </div>
    );
}

export default ImageFrame;
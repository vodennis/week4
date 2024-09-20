"use client";  // Mark this component as a Client Component

import React, { useState } from 'react';

interface GalleryProps {
images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
const [currentImage, setCurrentImage] = useState(0);

const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
};

const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
};

return (
    <div>
    <button onClick={prevImage}>Previous</button>
    <img src={images[currentImage]} alt={`Image ${currentImage}`} />
    <button onClick={nextImage}>Next</button>
    </div>
);
};

export default Gallery;

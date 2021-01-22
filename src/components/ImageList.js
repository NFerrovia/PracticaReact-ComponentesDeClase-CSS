import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

// componente que contiene todas las imagenes dadas por el resultado de la busqueda.
// hace uso de el subcomponente "ImageCard" donde toda la funcionalidad del display
// de las imagenes.

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

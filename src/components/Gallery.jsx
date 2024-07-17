import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa os estilos CSS do carrossel
import { Carousel } from 'react-responsive-carousel';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Galeria</h2>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={600}
        showStatus={false}
      >
        <div>
          <img src="https://via.placeholder.com/300" alt="Galeria 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/300" alt="Galeria 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/300" alt="Galeria 3" />
        </div>
      </Carousel>
    </section>
  );
}

export default Gallery;

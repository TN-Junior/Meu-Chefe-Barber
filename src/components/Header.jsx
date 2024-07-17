import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="/LogoBarber.jpg" alt="Meu Cheff Barberaria" className="logo" />
      <h1>Meu Cheff Barberaria</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#gallery">Galeria</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

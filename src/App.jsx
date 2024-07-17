import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <h2>Bem-vindo à Meu Cheff Barberaria</h2>
          <p>Sua satisfação é nossa prioridade. Venha nos visitar!</p>
        </section>
        <section id="services">
          <h2>Serviços</h2>
          <ul>
            <li>Corte de cabelo</li>
            <li>Barba</li>
            <li>Tratamentos capilares</li>
            <li>Coloração</li>
          </ul>
        </section>
        <Gallery />
        <section id="about">
          <h2>Sobre</h2>
          <p>Somos uma barbearia dedicada a oferecer o melhor serviço para nossos clientes.</p>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

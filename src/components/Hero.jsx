import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-wrapper">
                <div className="hero-bg" style={{ backgroundImage: 'url("hero-image.png")' }}></div>
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-pretitle">Ingeniería Ecuatoriana</span>
                    <h1 className="hero-title">
                        Cuidado <br />
                        <span className="accent">Profesional</span> <br />
                        para tu Bicicleta.
                    </h1>
                    <p className="hero-description">
                        Línea premium de mantenimiento desarrollada para ciclistas que no aceptan menos que la perfección.
                        Biodegradable, potente y fabricada en Ecuador.
                    </p>

                    <div className="hero-actions">
                        <button
                            className="btn btn-hero-primary"
                            onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Ver Catálogo
                        </button>
                        <button
                            className="btn btn-hero-secondary"
                            onClick={() => window.open('https://www.instagram.com/liquide_ec/', '_blank')}
                        >
                            Explorar Comunidad
                        </button>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

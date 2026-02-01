import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-wrapper">
                <div
                    className="hero-bg"
                    style={{ backgroundImage: 'url("hero-image.png")' }}
                ></div>
                <div className="hero-overlay"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <span className="hero-pretitle">Ingeniería que Protege</span>
                    <h1 className="hero-title">
                        MANTENIMIENTO <br />
                        <span style={{ color: 'var(--color-accent)' }}>CIENTÍFICO</span> <br />
                        PARA TU BICI.
                    </h1>
                    <p className="hero-description">
                        Línea premium de cuidado desarrollada para ciclistas que exigen el máximo rendimiento.
                        Tecnología biodegradable fabricada bajo estándares internacionales en Ecuador.
                    </p>

                    <div className="hero-actions">
                        <button
                            className="btn-hero-primary"
                            onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Ver Catálogo
                        </button>
                        <button
                            className="btn-hero-secondary"
                            onClick={() => window.open('https://www.instagram.com/liquide_ec/', '_blank')}
                        >
                            Comunidad Liquide
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                opacity: 0.6
            }}>
                <div style={{
                    width: '1px',
                    height: '60px',
                    background: 'linear-gradient(to bottom, var(--color-primary), transparent)',
                    animation: 'scrollLine 2s infinite ease-in-out'
                }} />
            </div>

            <style>{`
                @keyframes scrollLine {
                    0% { transform: scaleY(0); transform-origin: top; }
                    50% { transform: scaleY(1); transform-origin: top; }
                    50.1% { transform: scaleY(1); transform-origin: bottom; }
                    100% { transform: scaleY(0); transform-origin: bottom; }
                }
            `}</style>
        </section>
    );
}

export default Hero;

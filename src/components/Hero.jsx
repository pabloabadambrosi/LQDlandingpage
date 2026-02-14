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
                    <span className="hero-pretitle" style={{ fontStyle: 'italic', background: 'var(--color-accent)', color: 'black' }}>Performance Ecuatoriano</span>
                    <h1 className="hero-title" style={{ fontStyle: 'italic', textShadow: '3px 3px 0px rgba(0,0,0,0.5)' }}>
                        EL RITUAL DEL <br />
                        <span style={{ color: 'var(--color-accent)' }}>ALTO RENDIMIENTO</span>
                    </h1>
                    <p className="hero-description" style={{ fontSize: '1.2rem', maxWidth: '550px' }}>
                        Diseñamos fórmulas profesionales para ciclistas que no aceptan compromisos.
                        Limpieza radical y lubricación de grado competición, nacida en Ecuador.
                    </p>

                    <div className="hero-actions">
                        <button
                            className="btn-hero-primary"
                            onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Catálogo
                        </button>
                        <button
                            className="btn-hero-secondary"
                            onClick={() => document.getElementById('ritual')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            El Ritual
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div style={{
                position: 'absolute',
                bottom: '2.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                opacity: 0.8
            }}>
                <span style={{ color: 'white', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', fontStyle: 'italic' }}>Scroll</span>
                <div style={{
                    width: '2px',
                    height: '50px',
                    background: 'linear-gradient(to bottom, var(--color-accent), transparent)',
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

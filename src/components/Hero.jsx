import React from 'react';

export default function Hero() {
    return (
        <section style={{
            position: 'relative',
            height: '70vh',
            width: '100%',
            overflow: 'hidden',
            marginBottom: '4rem',
            backgroundColor: '#121212'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("hero-image.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.6
            }} />

            {/* Content Container */}
            <div className="container" style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                zIndex: 2,
                color: 'white'
            }}>
                <div style={{ maxWidth: '700px', animation: 'fadeInUp 1s ease-out' }}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: 300,
                        lineHeight: 1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.04em'
                    }}>
                        Cuidado <span style={{ fontWeight: 600 }}>Profesional</span> para tu Bicicleta.
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        fontWeight: 300,
                        marginBottom: '3rem',
                        opacity: 0.9,
                        lineHeight: 1.6,
                        maxWidth: '600px'
                    }}>
                        Descubre la línea más completa de limpieza y mantenimiento premium fabricada con pasión en Ecuador.
                        Calidad de competición para ciclistas exigentes.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <button
                            className="btn btn-primary"
                            style={{
                                padding: '1.25rem 2.5rem',
                                backgroundColor: 'white',
                                color: 'black',
                                border: 'none'
                            }}
                            onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                        >
                            Ver Colección
                        </button>
                        <button
                            className="btn"
                            style={{
                                padding: '1.25rem 2.5rem',
                                border: '1px solid rgba(255,255,255,0.3)',
                                color: 'white',
                                backgroundColor: 'transparent'
                            }}
                            onClick={() => window.open('https://www.instagram.com/liquide_ec/', '_blank')}
                        >
                            Seguir en Instagram
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Overlay */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '30%',
                background: 'linear-gradient(to top, var(--color-bg), transparent)',
                zIndex: 1
            }} />

            <style>{`
                @keyframes fadeInUp {
                    from { transform: translateY(40px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </section>
    );
}

const RitualSection = () => {
    return (
        <section className="ritual-section" id="ritual">
            <div className="container ritual-container">
                <div className="ritual-image-wrapper">
                    <img
                        src="brand-trio.png"
                        alt="Liquide Essentials"
                        className="ritual-image"
                    />
                    <div className="ritual-badge">El Ritual</div>
                </div>

                <div className="ritual-content">
                    <span className="ritual-label" style={{ fontStyle: 'italic' }}>Eficiencia Absoluta</span>
                    <h2 className="ritual-title" style={{ fontStyle: 'italic' }}>
                        LIMPIA. <br />
                        DESENGRASA. <br />
                        <span className="accent">LUBRICA.</span>
                    </h2>
                    <p className="ritual-description" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                        Nuestra tríada esencial está diseñada para trabajar en armonía.
                        Fórmulas biodegradables de alto rendimiento que no solo cuidan tu bicicleta,
                        sino que elevan tu experiencia en cada ruta.
                    </p>

                    <div className="ritual-features">
                        <div className="ritual-feature" style={{ borderLeft: '2px solid var(--color-accent)', paddingLeft: '1.5rem', background: 'transparent' }}>
                            <h4 style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Efecto Inmediato</h4>
                            <p style={{ color: 'white', opacity: 0.8 }}>Resultados profesionales desde la primera aplicación.</p>
                        </div>
                        <div className="ritual-feature" style={{ borderLeft: '2px solid var(--color-accent)', paddingLeft: '1.5rem', background: 'transparent' }}>
                            <h4 style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>Orgullo Local</h4>
                            <p style={{ color: 'white', opacity: 0.8 }}>Desarrollado y fabricado con pasión en Ecuador.</p>
                        </div>
                    </div>

                    <div className="ritual-cta-wrapper">
                        <button className="btn btn-primary" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
                            Explorar Kit Ritual
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RitualSection

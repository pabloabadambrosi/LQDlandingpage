const RitualSection = () => {
    return (
        <section className="ritual-section">
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
                    <span className="ritual-label">Eficiencia Absoluta</span>
                    <h2 className="ritual-title">
                        Limpia. <br />
                        Desengrasa. <br />
                        <span className="accent">Lubrica.</span>
                    </h2>
                    <p className="ritual-description">
                        Nuestra tríada esencial está diseñada para trabajar en armonía.
                        Fórmulas biodegradables de alto rendimiento que no solo cuidan tu bicicleta,
                        sino que elevan tu experiencia en cada ruta.
                    </p>

                    <div className="ritual-features">
                        <div className="ritual-feature">
                            <h4>Efecto Inmediato</h4>
                            <p>Resultados profesionales desde la primera aplicación.</p>
                        </div>
                        <div className="ritual-feature">
                            <h4>Orgullo Local</h4>
                            <p>Desarrollado y fabricado con pasión en Ecuador.</p>
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

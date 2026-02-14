const B2BSection = ({ onContactClick }) => {
    return (
        <section className="b2b-section">
            <div className="container b2b-container">
                <div className="b2b-card" style={{ background: 'var(--color-dark-section)', border: '1px solid rgba(255, 49, 220, 0.2)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--color-accent)' }} />
                    <h2 className="b2b-title" style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>DISTRIBUCIÓN PROFESIONAL</h2>
                    <p className="b2b-description" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Únete a nuestra red de distribución y lleva la excelencia de Liquide a tus clientes.
                        Condiciones exclusivas para tiendas y talleres.
                    </p>
                    <div className="b2b-actions">
                        <button
                            className="btn-hero-primary"
                            onClick={onContactClick}
                            style={{ padding: '1.25rem 4rem' }}
                        >
                            Quiero ser Distribuidor
                        </button>
                    </div>
                    <p className="b2b-footer-text" style={{ fontStyle: 'italic', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', opacity: 0.6 }}>
                        VENTAS AL POR MAYOR & PROYECTOS
                    </p>
                </div>
            </div>
        </section>
    )
}

export default B2BSection

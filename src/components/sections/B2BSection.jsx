const B2BSection = ({ onContactClick }) => {
    return (
        <section className="b2b-section">
            <div className="container b2b-container">
                <div className="b2b-card">
                    <h2 className="b2b-title">¿Tienes un negocio?</h2>
                    <p className="b2b-description">
                        Únete a nuestra red de distribución y lleva la excelencia de Liquide a tus clientes.
                        Ofrecemos condiciones exclusivas para tiendas, talleres y distribuidores autorizados.
                    </p>
                    <div className="b2b-actions">
                        <button
                            className="btn btn-primary b2b-btn"
                            onClick={onContactClick}
                        >
                            Quiero ser Distribuidor
                        </button>
                    </div>
                    <p className="b2b-footer-text">
                        O escríbenos directamente para ventas al por mayor.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default B2BSection

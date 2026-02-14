import { Instagram } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <img
                        src="liquide-logo.png"
                        alt="Liquide"
                    />
                </div>

                <p className="footer-tagline" style={{ fontStyle: 'italic', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '1.2rem', color: 'white' }}>
                    ALTO RENDIMIENTO. <br />
                    NACIDO EN <span style={{ color: 'var(--color-accent)' }}>ECUADOR.</span>
                </p>

                <div className="social-links">
                    <a
                        href="https://www.instagram.com/liquide_ec/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <Instagram size={24} />
                    </a>
                </div>

                <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2.5rem', opacity: 0.5, fontWeight: 700, fontSize: '0.7rem' }}>
                    &copy; {new Date().getFullYear()} LIQUIDE PERFORMANCE. TODOS LOS DERECHOS RESERVADOS.
                </div>
            </div>
        </footer>
    )
}

export default Footer

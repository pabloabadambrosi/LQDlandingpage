import { Instagram } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <img
                    src="liquide-vertical-logo.png"
                    alt="Liquide Vertical"
                    className="footer-logo"
                />

                <div className="footer-social">
                    <a
                        href="https://www.instagram.com/liquide_ec/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                    >
                        <Instagram size={20} />
                        <span>@liquide_ec</span>
                    </a>
                </div>

                <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} Liquide. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer

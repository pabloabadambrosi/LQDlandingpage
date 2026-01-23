import { MessageCircle, ShoppingCart } from 'lucide-react'

const Header = ({ onOpenContact, onOpenCart, cartCount, animateCart }) => {
    return (
        <header className="header">
            <div className="container header-content">
                <a href="/" className="header-logo">
                    <img
                        src="liquide-logo.png"
                        alt="Liquide"
                    />
                </a>

                <div className="header-actions">
                    <button
                        className="btn-header-contact"
                        onClick={onOpenContact}
                    >
                        <MessageCircle size={18} />
                        <span>Contáctanos</span>
                    </button>

                    <button
                        className={`btn-header-cart ${animateCart ? 'animate-cart' : ''}`}
                        onClick={onOpenCart}
                    >
                        <ShoppingCart size={22} strokeWidth={1.5} />
                        {cartCount > 0 && (
                            <span className="cart-badge">{cartCount}</span>
                        )}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header

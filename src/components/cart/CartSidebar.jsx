import { X, ShoppingCart, Minus, Plus } from 'lucide-react'

const CartSidebar = ({
    isOpen,
    onClose,
    items,
    onUpdateQuantity,
    onRemove,
    total,
    count,
    onCheckout
}) => {
    if (!isOpen) return null;

    return (
        <div className="cart-overlay" onClick={onClose}>
            <div className="cart-sidebar" onClick={e => e.stopPropagation()}>
                <div className="cart-header">
                    <h2 className="cart-title">Tu Carrito ({count})</h2>
                    <button onClick={onClose} className="cart-close">
                        <X size={24} strokeWidth={1} />
                    </button>
                </div>

                <div className="cart-items">
                    {items.length === 0 ? (
                        <div className="cart-empty">
                            <ShoppingCart size={40} className="cart-empty-icon" />
                            <p>Tu carrito está vacío.</p>
                            <button className="btn btn-primary" onClick={onClose}>
                                Empezar a Comprar
                            </button>
                        </div>
                    ) : (
                        <ul className="cart-list">
                            {items.map(item => (
                                <li key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="cart-item-info">
                                        <div className="cart-item-header">
                                            <h4 className="cart-item-name">{item.name}</h4>
                                            <span className="cart-item-total">
                                                ${(item.priceRetail * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                        <p className="cart-item-price">
                                            ${item.priceRetail.toFixed(2)} / un
                                        </p>

                                        <div className="cart-item-actions">
                                            <div className="quantity-selector">
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, -1)}
                                                    className="qty-btn"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus size={12} />
                                                </button>
                                                <span className="qty-value">{item.quantity}</span>
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, 1)}
                                                    className="qty-btn"
                                                >
                                                    <Plus size={12} />
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => onRemove(item.id)}
                                                className="cart-remove-btn"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-subtotal">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <p className="cart-note">
                            Impuestos y envío calculados al finalizar.
                        </p>
                        <button
                            className="btn btn-primary cart-checkout-btn"
                            onClick={onCheckout}
                        >
                            Finalizar Compra
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartSidebar

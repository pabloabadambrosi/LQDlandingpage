import React from 'react';
import { Plus, Eye } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onClick }) => {
    const price = product.priceRetail;

    return (
        <div className="product-card" onClick={onClick}>
            <div className="product-image-container">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                />

                {product.priceOriginal && (
                    <div className="product-badge">
                        OFERTA
                    </div>
                )}

                <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%) translateY(20px)',
                    opacity: 0,
                    transition: 'var(--transition-smooth)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'white',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '999px',
                    boxShadow: 'var(--shadow-lg)',
                    pointerEvents: 'none',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    color: 'var(--color-primary)',
                    whiteSpace: 'nowrap'
                }} className="product-quick-view">
                    <Eye size={14} /> Vista Rápida
                </div>
            </div>

            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>

                <div className="product-footer">
                    <div className="product-pricing">
                        <span className="product-price">${price.toFixed(2)}</span>
                        {product.priceOriginal && (
                            <span style={{
                                marginLeft: '0.75rem',
                                textDecoration: 'line-through',
                                color: 'var(--color-text-muted)',
                                fontSize: '0.9rem'
                            }}>
                                ${product.priceOriginal.toFixed(2)}
                            </span>
                        )}
                    </div>

                    <button
                        className="btn-add-cart"
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                        }}
                        aria-label="Añadir al carrito"
                    >
                        <Plus size={20} strokeWidth={2.5} />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .product-card:hover .product-quick-view {
                    transform: translateX(-50%) translateY(0);
                    opacity: 1;
                }
            `}</style>
        </div>
    );
}

export default ProductCard;

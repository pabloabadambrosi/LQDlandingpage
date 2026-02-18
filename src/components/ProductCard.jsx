import React, { useState } from 'react';
import { Plus, Eye } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const price = product.priceRetail;

    const hasHoverImage = product.images && product.images.length > 1;
    const currentImage = (isHovered && hasHoverImage) ? product.images[1] : product.image;

    return (
        <div
            className="product-card"
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="product-image-container">
                <img
                    src={currentImage}
                    alt={product.name}
                    loading="lazy"
                    className={isHovered && hasHoverImage ? 'hover-zoom' : ''}
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
                    background: 'var(--color-primary)',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '2px',
                    boxShadow: 'var(--shadow-lg)',
                    pointerEvents: 'none',
                    fontWeight: 900,
                    fontSize: '0.7rem',
                    color: 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontStyle: 'italic',
                    whiteSpace: 'nowrap',
                    border: '2px solid var(--color-accent)'
                }} className="product-quick-view">
                    <Eye size={14} /> Vista Rápida
                </div>
            </div>

            <div className="product-info">
                <span className="product-category" style={{ fontStyle: 'italic' }}>{product.category}</span>
                <h3 className="product-name" style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>{product.name}</h3>

                <div className="product-footer">
                    <div className="product-pricing">
                        <span className="product-price" style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>${price.toFixed(2)}</span>
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
        </div>
    );
}

export default ProductCard;

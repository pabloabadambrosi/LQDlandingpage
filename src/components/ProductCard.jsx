import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, isWholesale, onClick }) {
    const getBestWholesalePrice = () => {
        if (!product.wholesaleTiers || product.wholesaleTiers.length === 0) return null;
        // Find the lowest price in tiers
        const minPrice = Math.min(...product.wholesaleTiers.map(t => t.price));
        return minPrice;
    };

    const bestWholesalePrice = getBestWholesalePrice();
    const price = isWholesale ? product.priceWholesale : product.priceRetail;

    return (
        <div className="card product-card"
            onClick={onClick}
            style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer'
            }}>
            <div style={{
                position: 'relative',
                paddingTop: '110%',
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)'
            }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '20px',
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    className="product-image-hover"
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {isWholesale && (
                    <div style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '999px',
                        fontSize: '0.65rem',
                        fontWeight: '700',
                        letterSpacing: '0.05em',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        MAYORISTA
                    </div>
                )}
            </div>
            <div style={{ padding: '1.25rem 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', opacity: 0.6 }}>
                    {product.category}
                </span>
                <h3 style={{ fontSize: '1rem', fontWeight: 500, margin: '0 0 0.5rem', letterSpacing: '-0.01em', color: 'var(--color-text-main)' }}>
                    {product.name}
                </h3>

                {isWholesale && bestWholesalePrice && (
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-primary)', marginBottom: '0.75rem', fontWeight: 500 }}>
                        Desde ${bestWholesalePrice.toFixed(2)} comprando volumen
                    </p>
                )}

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                            ${price.toFixed(2)}
                        </span>
                        {isWholesale && (
                            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textDecoration: 'line-through' }}>
                                PVP: ${product.priceRetail.toFixed(2)}
                            </span>
                        )}
                    </div>
                    <button
                        className="btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                        }}
                        style={{
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            padding: 0,
                            border: '1px solid var(--color-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            transition: 'all 0.2s ease',
                            boxShadow: 'var(--shadow-sm)'
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.color = 'inherit';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                        aria-label="Add to cart"
                    >
                        <Plus size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}

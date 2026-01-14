import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onClick }) {
    const price = product.priceRetail;

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
                />

                {/* Quick View Overlay (Desktop only-ish, using opacity) */}
                <div
                    className="quick-view-overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: 2
                    }}
                >
                    <button
                        className="btn"
                        style={{
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '0.6rem 1.25rem',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                    >
                        Vista Rápida
                    </button>
                </div>

                {product.priceOriginal && (
                    <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: '#ef4444',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '999px',
                        fontSize: '0.65rem',
                        fontWeight: '700',
                        letterSpacing: '0.05em',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        zIndex: 3
                    }}>
                        OFERTA
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

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                            ${price.toFixed(2)}
                        </span>
                        {product.priceOriginal && (
                            <span style={{ fontSize: '0.75rem', color: '#ef4444', textDecoration: 'line-through', fontWeight: 500 }}>
                                ${product.priceOriginal.toFixed(2)}
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

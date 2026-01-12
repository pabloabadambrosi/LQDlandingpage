import React from 'react';
import { X, ShoppingCart, CheckCircle, Truck, Shield } from 'lucide-react';

export default function ProductDetailModal({ product, isOpen, onClose, onAddToCart, isWholesale }) {
    if (!isOpen || !product) return null;

    const price = isWholesale ? product.priceWholesale : product.priceRetail;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            zIndex: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease-out'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                width: '100%',
                maxWidth: '900px',
                maxHeight: '90vh',
                borderRadius: '2rem',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }} onClick={e => e.stopPropagation()}>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        zIndex: 10,
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        borderRadius: '50%',
                        padding: '0.5rem',
                        display: 'flex'
                    }}
                >
                    <X size={24} />
                </button>

                {/* Left: Image Container */}
                <div style={{
                    flex: '1',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3rem',
                    position: 'relative'
                }}>
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain'
                        }}
                    />
                    {isWholesale && (
                        <div style={{
                            position: 'absolute',
                            top: '2rem',
                            left: '2rem',
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '999px',
                            fontSize: '0.75rem',
                            fontWeight: 700
                        }}>
                            PRECIO MAYORISTA
                        </div>
                    )}
                </div>

                {/* Right: Info Container */}
                <div style={{
                    flex: '1',
                    padding: '4rem 3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto'
                }}>
                    <span style={{
                        fontSize: '0.8rem',
                        color: 'var(--color-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        opacity: 0.6
                    }}>
                        {product.category}
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '1.5rem', lineHeight: 1.1 }}>{product.name}</h2>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '2.5rem', fontWeight: 600 }}>${price.toFixed(2)}</span>
                        {product.priceOriginal && !isWholesale && (
                            <span style={{
                                textDecoration: 'line-through',
                                color: '#ef4444',
                                fontSize: '1.2rem',
                                fontWeight: 500
                            }}>
                                ${product.priceOriginal.toFixed(2)}
                            </span>
                        )}
                        {isWholesale && (
                            <span style={{ textDecoration: 'line-through', color: 'var(--color-text-muted)' }}>
                                PVP: ${product.priceRetail.toFixed(2)}
                            </span>
                        )}
                    </div>

                    {product.priceOriginal && !isWholesale && (
                        <div style={{
                            display: 'inline-block',
                            backgroundColor: '#ef4444',
                            color: 'white',
                            padding: '0.4rem 1rem',
                            borderRadius: '999px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            marginBottom: '2rem',
                            boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)'
                        }}>
                            ¡GRAN OFERTA!
                        </div>
                    )}

                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                        {product.description}
                    </p>

                    {/* Features List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <CheckCircle size={20} color="#10B981" />
                            <span style={{ fontSize: '0.95rem' }}>
                                {product.category === 'Ropa'
                                    ? 'Diseño ergonómico y ajuste de alto rendimiento.'
                                    : 'Fórmula biodegradable, amigable con el ambiente.'}
                            </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Truck size={20} color="var(--color-primary)" />
                            <span style={{ fontSize: '0.95rem' }}>Envíos seguros a todo el país.</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Shield size={20} color="var(--color-primary)" />
                            <span style={{ fontSize: '0.95rem' }}>Garantía de calidad Liquide.</span>
                        </div>
                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            onAddToCart(product);
                            onClose();
                        }}
                        style={{
                            width: '100%',
                            padding: '1.25rem',
                            fontSize: '1.1rem',
                            display: 'flex',
                            gap: '0.75rem'
                        }}
                    >
                        <ShoppingCart size={20} />
                        Agregar al Carrito
                    </button>

                    {isWholesale && product.wholesaleTiers?.length > 0 && (
                        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '1rem' }}>
                            <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Precios por volumen:</p>
                            {product.wholesaleTiers.map(tier => (
                                <div key={tier.minQty} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#666' }}>
                                    <span>Comprando {tier.minQty}+ unidades:</span>
                                    <span style={{ fontWeight: 700 }}>${tier.price.toFixed(2)} c/u</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes modalSlideUp {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @media (max-width: 768px) {
                    div[style*="max-width: 900px"] {
                        flex-direction: column !important;
                        max-height: 95vh;
                    }
                    div[style*="padding: 4rem 3rem"] {
                        padding: 2rem !important;
                    }
                }
            `}</style>
        </div>
    );
}

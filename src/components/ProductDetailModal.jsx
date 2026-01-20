import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, CheckCircle, Truck, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductDetailModal({ product, isOpen, onClose, onAddToCart }) {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // Reset index when product changes or modal opens
    useEffect(() => {
        setCurrentImgIndex(0);
    }, [product, isOpen]);

    if (!isOpen || !product) return null;

    const price = product.priceRetail;
    const images = product.images || [product.image];

    const nextImg = () => setCurrentImgIndex((prev) => (prev + 1) % images.length);
    const prevImg = () => setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);

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
                maxWidth: '950px',
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
                        display: 'flex',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                >
                    <X size={24} />
                </button>

                {/* Left: Image Container & Gallery */}
                <div style={{
                    flex: '1',
                    backgroundColor: '#f8f8f8',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    position: 'relative',
                    borderRight: '1px solid #eee'
                }}>
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        position: 'relative'
                    }}>
                        <img
                            src={images[currentImgIndex]}
                            alt={product.name}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '400px',
                                objectFit: 'contain',
                                transition: 'all 0.3s ease'
                            }}
                        />

                        {images.length > 1 && (
                            <>
                                <button onClick={prevImg} style={{
                                    position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)',
                                    background: 'white', border: 'none', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex'
                                }}>
                                    <ChevronLeft size={20} />
                                </button>
                                <button onClick={nextImg} style={{
                                    position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)',
                                    background: 'white', border: 'none', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', display: 'flex'
                                }}>
                                    <ChevronRight size={20} />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Thumbnails */}
                    {images.length > 1 && (
                        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setCurrentImgIndex(idx)}
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '0.75rem',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        border: `2px solid ${currentImgIndex === idx ? 'var(--color-primary)' : 'transparent'}`,
                                        opacity: currentImgIndex === idx ? 1 : 0.6,
                                        transition: 'all 0.2s ease',
                                        backgroundColor: 'white'
                                    }}
                                >
                                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right: Info Container */}
                <div style={{
                    flex: '1',
                    padding: '4rem 3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                    backgroundColor: 'white'
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
                        {product.priceOriginal && (
                            <span style={{
                                textDecoration: 'line-through',
                                color: '#ef4444',
                                fontSize: '1.2rem',
                                fontWeight: 500
                            }}>
                                ${product.priceOriginal.toFixed(2)}
                            </span>
                        )}
                    </div>

                    {product.priceOriginal && (
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

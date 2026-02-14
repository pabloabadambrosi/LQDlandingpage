import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, CheckCircle, Truck, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductDetailModal({ product, isOpen, onClose, onAddToCart }) {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        setCurrentImgIndex(0);
    }, [product, isOpen]);

    if (!isOpen || !product) return null;

    const price = product.priceRetail;
    const images = product.images || [product.image];

    const nextImg = () => setCurrentImgIndex((prev) => (prev + 1) % images.length);
    const prevImg = () => setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="modal-overlay" onClick={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div className="product-detail-modal" onClick={e => e.stopPropagation()}>
                {/* Close Button */}
                <button className="modal-close-btn" onClick={onClose}>
                    <X size={20} />
                </button>

                {/* Left: Visuals */}
                <div className="modal-visuals">
                    <div className="main-image-wrapper">
                        <img src={images[currentImgIndex]} alt={product.name} />

                        {images.length > 1 && (
                            <div className="gallery-nav">
                                <button onClick={prevImg}><ChevronLeft size={20} /></button>
                                <button onClick={nextImg}><ChevronRight size={20} /></button>
                            </div>
                        )}
                    </div>

                    {images.length > 1 && (
                        <div className="thumbnail-strip">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`thumb ${currentImgIndex === idx ? 'active' : ''}`}
                                    onClick={() => setCurrentImgIndex(idx)}
                                >
                                    <img src={img} alt="" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right: Content */}
                <div className="modal-body">
                    <div className="modal-header">
                        <span className="category-tag" style={{ fontStyle: 'italic' }}>{product.category}</span>
                        <h2 className="modal-product-title" style={{ fontStyle: 'italic' }}>{product.name}</h2>

                        <div className="modal-pricing">
                            <span className="current-price" style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>${price.toFixed(2)}</span>
                            {product.priceOriginal && (
                                <span className="old-price" style={{ textDecoration: 'line-through' }}>${product.priceOriginal.toFixed(2)}</span>
                            )}
                        </div>
                    </div>

                    <div className="modal-product-desc">
                        <p>{product.description}</p>
                    </div>

                    <div className="modal-specs">
                        <div className="spec-item">
                            <CheckCircle size={20} style={{ color: 'var(--color-accent)' }} />
                            <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem' }}>Alto Rendimiento</span>
                        </div>
                        <div className="spec-item">
                            <Truck size={20} style={{ color: 'var(--color-accent)' }} />
                            <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem' }}>Envíos a Ecuador</span>
                        </div>
                        <div className="spec-item">
                            <Shield size={20} style={{ color: 'var(--color-accent)' }} />
                            <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem' }}>Punto de Venta Oficial</span>
                        </div>
                    </div>

                    <div className="modal-actions">
                        <button
                            className="btn-add-full"
                            onClick={() => {
                                onAddToCart(product);
                                onClose();
                            }}
                        >
                            <ShoppingCart size={20} />
                            Añadir al Carrito
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .product-detail-modal {
                    background: white;
                    width: 100%;
                    max-width: 1000px;
                    max-height: 90vh;
                    border-radius: var(--radius-lg);
                    display: flex;
                    overflow: hidden;
                    position: relative;
                    animation: modalScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: var(--shadow-lg);
                }

                .modal-close-btn {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    z-index: 20;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: white;
                    border: 1px solid var(--color-border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: var(--transition-smooth);
                }

                .modal-close-btn:hover {
                    background: var(--color-primary);
                    color: white;
                    transform: rotate(90deg);
                }

                .modal-visuals {
                    flex: 1.2;
                    background: var(--color-ritual-bg);
                    padding: 3rem;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    border-right: 1px solid var(--color-border);
                }

                .main-image-wrapper {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

                .main-image-wrapper img {
                    max-width: 100%;
                    max-height: 450px;
                    object-fit: contain;
                }

                .gallery-nav {
                    position: absolute;
                    top: 50%;
                    left: -1rem;
                    right: -1rem;
                    transform: translateY(-50%);
                    display: flex;
                    justify-content: space-between;
                    pointer-events: none;
                }

                .gallery-nav button {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: white;
                    border: 1px solid var(--color-border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    pointer-events: auto;
                    box-shadow: var(--shadow-sm);
                }

                .thumbnail-strip {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                }

                .thumb {
                    width: 60px;
                    height: 60px;
                    border-radius: 8px;
                    overflow: hidden;
                    border: 2px solid transparent;
                    cursor: pointer;
                    transition: 0.2s;
                    background: white;
                }

                .thumb.active {
                    border-color: var(--color-accent);
                }

                .modal-body {
                    flex: 1;
                    padding: 4rem 3.5rem;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                }

                .category-tag {
                    font-size: 0.75rem;
                    color: var(--color-accent);
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 1rem;
                    display: block;
                }

                .modal-product-title {
                    font-size: 2.5rem;
                    line-height: 1.1;
                    margin-bottom: 2rem;
                    font-family: var(--font-family-heading);
                }

                .modal-pricing {
                    display: flex;
                    align-items: baseline;
                    gap: 1rem;
                    margin-bottom: 2.5rem;
                }

                .current-price {
                    font-size: 2.5rem;
                    font-weight: 900;
                }

                .old-price {
                    font-size: 1.25rem;
                    text-decoration: line-through;
                    color: var(--color-text-muted);
                    font-weight: 600;
                }

                .modal-product-desc {
                    margin-bottom: 3rem;
                    font-size: 1.1rem;
                    color: var(--color-text-muted);
                    line-height: 1.6;
                }

                .modal-specs {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-bottom: 4rem;
                }

                .spec-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-weight: 500;
                    font-size: 0.95rem;
                }

                .spec-item svg {
                    color: var(--color-accent);
                }

                .btn-add-full {
                    width: 100%;
                    padding: 1.25rem;
                    background: var(--color-accent);
                    color: black;
                    border: none;
                    border-radius: var(--radius-sm);
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    cursor: pointer;
                    transition: var(--transition-smooth);
                    margin-top: auto;
                    box-shadow: 0 0 20px var(--color-accent-glow);
                }

                .btn-add-full:hover {
                    transform: translateY(-3px);
                    filter: brightness(1.1);
                    box-shadow: 0 0 30px var(--color-accent-glow);
                }

                @keyframes modalScaleUp {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                @media (max-width: 900px) {
                    .product-detail-modal {
                        flex-direction: column;
                        max-height: 95vh;
                    }
                    .modal-visuals {
                        border-right: none;
                        border-bottom: 1px solid var(--color-border);
                        padding: 2rem;
                    }
                    .modal-body {
                        padding: 2.5rem 2rem;
                    }
                    .modal-product-title {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </div>
    );
}

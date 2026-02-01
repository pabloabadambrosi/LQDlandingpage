import React, { useState } from 'react';
import { X, CreditCard, ShoppingBag, MapPin } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, onConfirm, total, cartCount }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        city: ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm(formData);
    };

    return (
        <div className="modal-overlay" onClick={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div className="checkout-modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <X size={20} />
                </button>

                <div className="checkout-content">
                    {/* Summary Sidebar (Desktop) */}
                    <div className="checkout-info">
                        <div className="checkout-badge">Resumen del Pedido</div>
                        <h2 className="checkout-total">${total.toFixed(2)}</h2>
                        <div className="checkout-stats">
                            <div className="stat">
                                <ShoppingBag size={18} />
                                <span>{cartCount} {cartCount === 1 ? 'producto' : 'productos'}</span>
                            </div>
                            <div className="stat">
                                <CreditCard size={18} />
                                <span>Pago vía WhatsApp</span>
                            </div>
                        </div>
                        <p className="checkout-note">
                            Al confirmar, generaremos tu pedido y te contactaremos para coordinar el pago y envío.
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="checkout-form-container">
                        <form onSubmit={handleSubmit} className="checkout-form">
                            <h3 className="form-section-title">Información de Envío</h3>

                            <div className="form-group">
                                <label>Nombre Completo</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Juan Pérez"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Celular</label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="099-123-4567"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="juan@ejemplo.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Ciudad</label>
                                    <input
                                        required
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="Quito"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Dirección Exacta</label>
                                    <input
                                        required
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Av. Amazonas y Eloy Alfaro"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn-confirm-order">
                                Confirmar y Continuar a WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                .checkout-modal {
                    background: white;
                    width: 100%;
                    max-width: 900px;
                    border-radius: var(--radius-lg);
                    position: relative;
                    overflow: hidden;
                    box-shadow: var(--shadow-lg);
                    animation: modalScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .checkout-content {
                    display: flex;
                }

                .checkout-info {
                    flex: 0.8;
                    background: var(--color-primary);
                    color: white;
                    padding: 4rem 3rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .checkout-badge {
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--color-accent);
                    margin-bottom: 1.5rem;
                }

                .checkout-total {
                    font-size: 4rem;
                    font-weight: 800;
                    margin-bottom: 2rem;
                    font-family: var(--family-heading);
                }

                .checkout-stats {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                    margin-bottom: 3rem;
                }

                .stat {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 1.1rem;
                    font-weight: 500;
                    opacity: 0.9;
                }

                .checkout-note {
                    font-size: 0.9rem;
                    opacity: 0.6;
                    line-height: 1.6;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    padding-top: 2rem;
                }

                .checkout-form-container {
                    flex: 1.2;
                    padding: 4rem 3.5rem;
                }

                .form-section-title {
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin-bottom: 2rem;
                    text-transform: uppercase;
                    letter-spacing: -0.02em;
                }

                .checkout-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .form-group label {
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-text-muted);
                }

                .form-group input {
                    padding: 0.85rem 1rem;
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-sm);
                    font-size: 1rem;
                    background: #f9fafb;
                    transition: var(--transition-smooth);
                }

                .form-group input:focus {
                    outline: none;
                    border-color: var(--color-accent);
                    background: white;
                    box-shadow: 0 0 0 4px var(--color-accent-glow);
                }

                .btn-confirm-order {
                    margin-top: 1rem;
                    padding: 1.25rem;
                    background: var(--color-accent);
                    color: white;
                    border: none;
                    border-radius: var(--radius-sm);
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    transition: var(--transition-smooth);
                }

                .btn-confirm-order:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(255, 0, 85, 0.2);
                    filter: brightness(1.1);
                }

                @media (max-width: 800px) {
                    .checkout-content {
                        flex-direction: column;
                    }
                    .checkout-info {
                        padding: 3rem 2rem;
                        text-align: center;
                        align-items: center;
                    }
                    .checkout-total {
                        font-size: 3rem;
                    }
                    .checkout-form-container {
                        padding: 3rem 2rem;
                    }
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
}

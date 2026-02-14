import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, onConfirm }) {
    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        email: '',
        message: ''
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
            <div className="contact-modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <X size={20} />
                </button>

                <div className="contact-modal-content">
                    <div className="contact-modal-header">
                        <img src="/liquide-logo.png" alt="Liquide" style={{ height: '40px', marginBottom: '1.5rem' }} />
                        <h2 className="modal-title">¿En qué podemos ayudarte?</h2>
                        <p className="modal-subtitle">Escríbenos y un experto Liquide se pondrá en contacto contigo.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label>Nombre Completo</label>
                            <input
                                required
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>WhatsApp / Celular</label>
                                <input
                                    required
                                    type="tel"
                                    name="tel"
                                    value={formData.tel}
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
                                    placeholder="hola@ejemplo.com"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Mensaje o Consulta</label>
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Dinos qué necesitas saber..."
                            />
                        </div>

                        <button type="submit" className="btn-submit-contact">
                            <Send size={18} />
                            Enviar Consulta
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
                .contact-modal {
                    background: #ffffff;
                    width: 100%;
                    max-width: 600px;
                    border-radius: var(--radius-sm);
                    position: relative;
                    overflow: hidden;
                    box-shadow: var(--shadow-lg);
                    animation: modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .contact-modal-content {
                    padding: 4rem 3.5rem;
                }

                .contact-modal-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .modal-title {
                    font-size: 2rem;
                    font-weight: 900;
                    letter-spacing: 0.05em;
                    margin-bottom: 1rem;
                    font-family: var(--font-family-heading);
                    text-transform: uppercase;
                }

                .modal-subtitle {
                    color: var(--color-text-muted);
                    font-size: 1.1rem;
                    font-weight: 500;
                }

                .contact-form {
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
                    font-size: 0.75rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-primary);
                }

                .form-group input, 
                .form-group textarea {
                    padding: 1rem 1.25rem;
                    border: 2px solid var(--color-border);
                    border-radius: var(--radius-sm);
                    font-family: var(--font-family-base);
                    font-size: 1rem;
                    background: #f9fafb;
                    transition: var(--transition-smooth);
                }

                .form-group input:focus, 
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--color-accent);
                    background: white;
                    box-shadow: 0 0 0 4px var(--color-accent-glow);
                }

                .btn-submit-contact {
                    margin-top: 1rem;
                    padding: 1.25rem;
                    background: var(--color-accent);
                    color: black;
                    border: none;
                    border-radius: var(--radius-sm);
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    cursor: pointer;
                    transition: var(--transition-smooth);
                }

                .btn-submit-contact:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 0 30px var(--color-accent-glow);
                    filter: brightness(1.1);
                }

                .modal-close-btn {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    color: var(--color-text-muted);
                    transition: var(--transition-smooth);
                    z-index: 10;
                }

                .modal-close-btn:hover {
                    color: var(--color-accent);
                    transform: rotate(90deg);
                }

                @keyframes modalSlideIn {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @media (max-width: 640px) {
                    .contact-modal-content {
                        padding: 3rem 1.5rem;
                    }
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                    .modal-title {
                        font-size: 1.75rem;
                    }
                }
            `}</style>
        </div>
    );
}

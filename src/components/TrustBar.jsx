import React from 'react';
import { Leaf, Truck, ShieldCheck, Clock } from 'lucide-react';

export default function TrustBar() {
    const benefits = [
        { icon: Leaf, title: 'Biodegradable', desc: 'Fórmula eco-amigable' },
        { icon: Truck, title: 'Envíos Nacionales', desc: 'A todo el Ecuador' },
        { icon: ShieldCheck, title: 'Calidad Premium', desc: 'Grado competición' },
        { icon: Clock, title: 'Soporte Directo', desc: 'Vía WhatsApp' }
    ];

    return (
        <div className="trust-bar">
            <div className="container">
                <div className="trust-content">
                    {benefits.map((b, i) => (
                        <div key={i} className="trust-item">
                            <div className="trust-icon-wrapper">
                                <b.icon size={26} strokeWidth={1.5} />
                            </div>
                            <div className="trust-text">
                                <h4 className="trust-title">{b.title}</h4>
                                <p className="trust-desc">{b.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .trust-bar {
                    background: var(--color-surface);
                    padding: 5rem 0;
                    border-bottom: 1px solid var(--color-border);
                }

                .trust-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 3rem;
                }

                .trust-item {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }

                .trust-icon-wrapper {
                    width: 64px;
                    height: 64px;
                    background: var(--color-bg);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-accent);
                    flex-shrink: 0;
                    border: 1px solid var(--color-border);
                    transition: var(--transition-smooth);
                }

                .trust-item:hover .trust-icon-wrapper {
                    transform: scale(1.1) rotate(5deg);
                    background: var(--color-accent);
                    color: white;
                    border-color: var(--color-accent);
                }

                .trust-title {
                    font-size: 1rem;
                    font-weight: 800;
                    margin-bottom: 0.25rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .trust-desc {
                    font-size: 0.9rem;
                    color: var(--color-text-muted);
                    font-weight: 400;
                }

                @media (max-width: 768px) {
                    .trust-content {
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 2rem;
                    }
                    .trust-bar {
                        padding: 4rem 0;
                    }
                }
            `}</style>
        </div>
    );
}

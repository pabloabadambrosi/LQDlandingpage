import React from 'react';
import { Leaf, Truck, ShieldCheck, Clock } from 'lucide-react';

export default function TrustBar() {
    const benefits = [
        { icon: Leaf, title: 'SOSTENIBILIDAD', desc: 'Biodegradable' },
        { icon: Truck, title: 'LOGÍSTICA', desc: 'A todo el Ecuador' },
        { icon: ShieldCheck, title: 'RENDIMIENTO', desc: 'Grado Competición' },
        { icon: Clock, title: 'SOPORTE', desc: 'Vía WhatsApp' }
    ];

    return (
        <div className="trust-bar">
            <div className="container">
                <div className="trust-content">
                    {benefits.map((b, i) => (
                        <div key={i} className="trust-item" style={{ background: 'var(--color-ritual-bg)', padding: '2rem', borderRadius: 'var(--radius-sm)', width: '100%', border: '1px solid var(--color-border)' }}>
                            <div className="trust-icon-wrapper" style={{ borderRadius: '2px', background: 'var(--color-primary)' }}>
                                <b.icon size={26} strokeWidth={2.5} />
                            </div>
                            <div className="trust-text">
                                <h4 className="trust-title" style={{ fontStyle: 'italic', marginBottom: '0.25rem' }}>{b.title}</h4>
                                <p className="trust-desc" style={{ fontWeight: 700, opacity: 0.7, fontSize: '0.75rem', textTransform: 'uppercase' }}>{b.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .trust-bar {
                    background: var(--color-bg);
                    padding: 5rem 0;
                    border-bottom: 2px solid var(--color-accent);
                }

                .trust-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 3rem;
                }

                .trust-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 1rem;
                }

                .trust-icon-wrapper {
                    width: 60px;
                    height: 60px;
                    background: var(--color-primary);
                    border-radius: var(--radius-sm);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    flex-shrink: 0;
                    transition: var(--transition-smooth);
                    border: none;
                }

                .trust-item:hover .trust-icon-wrapper {
                    transform: translateY(-5px);
                    background: var(--color-accent);
                    color: black;
                }

                .trust-title {
                    font-size: 0.9rem;
                    font-weight: 900;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .trust-desc {
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                    font-weight: 500;
                    max-width: 200px;
                }

                @media (max-width: 768px) {
                    .trust-content {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 2rem;
                    }
                    .trust-bar {
                        padding: 4rem 1rem;
                    }
                }
            `}</style>
        </div>
    );
}

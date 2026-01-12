import React from 'react';
import { Leaf, Truck, ShieldCheck, Clock } from 'lucide-react';

export default function TrustBar() {
    const benefits = [
        { icon: Leaf, title: 'Biodegradable', desc: 'Fórmula eco-amigable' },
        { icon: Truck, title: 'Envío Nacional', desc: 'Seguro y garantizado' },
        { icon: ShieldCheck, title: 'Calidad Premium', desc: 'Grado competición' },
        { icon: Clock, title: 'Soporte 24/7', desc: 'Vía WhatsApp' }
    ];

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '4rem 0',
            borderBottom: '1px solid var(--color-border)',
            marginBottom: '5rem'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '3rem',
                textAlign: 'center'
            }}>
                {benefits.map((b, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#f9fafb',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-primary)',
                            marginBottom: '0.5rem'
                        }}>
                            <b.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>{b.title}</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>{b.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

import React from 'react';
import { Droplets, Sparkles, Wrench, CheckCircle, XCircle, ShieldCheck } from 'lucide-react';

export default function BikeCareGuide() {
    return (
        <section style={{ padding: '6rem 1.5rem', backgroundColor: '#ffffff' }}>
            <div className="container">

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
                    <span style={{
                        color: 'var(--color-primary)',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        Academia de Mantenimiento
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 300,
                        letterSpacing: '-0.03em',
                        marginBottom: '1.5rem',
                        lineHeight: 1.2
                    }}>
                        Tu bicicleta merece <span style={{ fontWeight: 600 }}>ciencia, no suerte.</span>
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-muted)',
                        fontWeight: 300,
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Descubre por qué los profesionales eligen Liquide y cómo aplicar nuestros productos para duplicar la vida útil de tus componentes.
                    </p>
                </div>

                {/* 3-Step Guide Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem',
                    marginBottom: '8rem'
                }}>
                    {/* Step 1 */}
                    <div style={{
                        padding: '2.5rem',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--color-light-gray)',
                        border: '1px solid var(--color-border)',
                        transition: 'transform 0.3s ease',
                        cursor: 'default'
                    }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem',
                            boxShadow: 'var(--shadow-md)',
                            color: 'var(--color-primary)'
                        }}>
                            <Droplets size={28} strokeWidth={1.5} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>1. Limpieza Profunda</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            Aplica <strong>Bike Cleaner</strong> sobre toda la bicicleta. Su fórmula de nanotecnología penetra la suciedad microscópica.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: '#10b981', fontWeight: 700 }}>•</span> Espera 2 minutos
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: '#10b981', fontWeight: 700 }}>•</span> Enjuaga con agua
                            </li>
                        </ul>
                    </div>

                    {/* Step 2 */}
                    <div style={{
                        padding: '2.5rem',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--color-light-gray)',
                        border: '1px solid var(--color-border)',
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem',
                            boxShadow: 'var(--shadow-md)',
                            color: 'var(--color-primary)'
                        }}>
                            <Sparkles size={28} strokeWidth={1.5} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>2. Desengrase Total</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            Usa <strong>Bio Degreaser</strong> en la transmisión. Elimina grasa vieja y contaminantes que desgastan tu cadena.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: '#10b981', fontWeight: 700 }}>•</span> Usa cepillo de cerdas duras
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: '#10b981', fontWeight: 700 }}>•</span> Seca completamente
                            </li>
                        </ul>
                    </div>

                    {/* Step 3 */}
                    <div style={{
                        padding: '2.5rem',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--color-light-gray)',
                        border: '1px solid var(--color-border)',
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem',
                            boxShadow: 'var(--shadow-md)',
                            color: 'var(--color-primary)'
                        }}>
                            <Wrench size={28} strokeWidth={1.5} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>3. Lubricación Precisa</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            Aplica <strong>Biolube</strong> (Dry o Wet) en cada eslabón. La capa protectora reduce la fricción y aumenta la velocidad.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: '#10b981', fontWeight: 700 }}>•</span> Aplica en el interior
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                                <span style={{ color: '#10b981', fontWeight: 700 }}>•</span> Retira el exceso
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Comparison Section (The Authority Builder) */}
                <div style={{
                    backgroundColor: '#121212',
                    borderRadius: '2rem',
                    padding: '4rem 2rem',
                    color: 'white',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '1rem' }}>
                                Liquide vs. <span style={{ opacity: 0.6 }}>Lo Común</span>
                            </h3>
                            <p style={{ opacity: 0.8, fontWeight: 300 }}>Por qué tu inversión merece un cuidado especializado.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '2rem', alignItems: 'center' }}>

                            {/* Liquide Side */}
                            <div style={{ padding: '0 1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <ShieldCheck size={24} color="#4ade80" />
                                    <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Seguro con Carbono</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <CheckCircle size={24} color="#4ade80" />
                                    <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Biodegradable</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <CheckCircle size={24} color="#4ade80" />
                                    <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Fórmula Anti-corrosión</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <CheckCircle size={24} color="#4ade80" />
                                    <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>Lubricación Cerámica</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div style={{ height: '100%', width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>

                            {/* Generic Side */}
                            <div style={{ padding: '0 1rem', opacity: 0.6 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <XCircle size={24} color="#ef4444" />
                                    <span style={{ fontSize: '1.1rem' }}>Daña sellos de goma</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <XCircle size={24} color="#ef4444" />
                                    <span style={{ fontSize: '1.1rem' }}>Tóxico / Contaminante</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <XCircle size={24} color="#ef4444" />
                                    <span style={{ fontSize: '1.1rem' }}>Acelera la oxidación</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <XCircle size={24} color="#ef4444" />
                                    <span style={{ fontSize: '1.1rem' }}>Atrae polvo y suciedad</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

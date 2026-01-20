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
                    position: 'relative',
                    padding: '6rem 2rem',
                    borderRadius: '3rem',
                    overflow: 'hidden',
                    background: '#0a0a0a', // Deep dark base
                    boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)',
                }}>
                    {/* Decorative Background Elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-10%',
                        right: '-5%',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(255,77,141,0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        zIndex: 0
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '-5%',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        zIndex: 0
                    }} />

                    <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h3 style={{
                                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                                fontWeight: 300,
                                marginBottom: '1rem',
                                color: 'white'
                            }}>
                                Liquide vs. <span style={{ opacity: 0.4 }}>Lo Común</span>
                            </h3>
                            <div style={{
                                height: '2px',
                                width: '60px',
                                background: 'var(--color-primary)',
                                margin: '0 auto 1.5rem',
                                borderRadius: '99px'
                            }} />
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300, fontSize: '1.1rem' }}>
                                Diferencias técnicas que protegen tu inversión.
                            </p>
                        </div>

                        {/* Glass Comparison Box */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '1px',
                            backgroundColor: 'rgba(255,255,255,0.1)', // Divider line
                            borderRadius: '2rem',
                            border: '1px solid rgba(255,255,255,0.1)',
                            overflow: 'hidden',
                            backdropFilter: 'blur(10px)',
                            background: 'rgba(255,255,255,0.02)'
                        }}>
                            {/* Liquide Side */}
                            <div style={{
                                padding: '3.5rem 2.5rem',
                                background: 'rgba(255,255,255,0.03)',
                            }}>
                                <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4ade80' }} />
                                    <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: '#4ade80' }}>
                                        Estándar Liquide
                                    </span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {[
                                        { icon: ShieldCheck, text: 'Seguro con Carbono & Pintura' },
                                        { icon: CheckCircle, text: 'Biodegradable (Sin solventes)' },
                                        { icon: CheckCircle, text: 'Fórmula con Inhibidores de Oxido' },
                                        { icon: CheckCircle, text: 'Lubricación de Cerámica de Alta Fluidez' }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                            <item.icon size={22} color="#4ade80" />
                                            <span style={{ fontSize: '1.05rem', fontWeight: 400, color: 'white' }}>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Generic Side */}
                            <div style={{
                                padding: '3.5rem 2.5rem',
                                background: 'transparent'
                            }}>
                                <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                                    <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)' }}>
                                        Productos Genéricos
                                    </span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {[
                                        { text: 'Daña sellos de goma y retenes' },
                                        { text: 'Tóxico / Altamente Contaminante' },
                                        { text: 'Acelera la oxidación galvánica' },
                                        { text: 'Atrae polvo y forma pasta abrasiva' }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', opacity: 0.5 }}>
                                            <XCircle size={22} color="#ef4444" />
                                            <span style={{ fontSize: '1.05rem', fontWeight: 300, color: 'white' }}>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                                * Pruebas realizadas en laboratorios locales bajo estándares internacionales.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

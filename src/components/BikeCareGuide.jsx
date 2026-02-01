import React from 'react';
import { Droplets, Sparkles, Wrench, CheckCircle, XCircle, ShieldCheck } from 'lucide-react';

export default function BikeCareGuide() {
    return (
        <section style={{ padding: '10rem 1.5rem', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '8rem', maxWidth: '800px', margin: '0 auto' }}>
                    <span style={{
                        color: 'var(--color-accent)',
                        fontWeight: 800,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        display: 'block',
                        marginBottom: '1.5rem'
                    }}>
                        Academia de Mantenimiento
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.04em',
                        marginBottom: '2rem',
                        lineHeight: 1,
                        fontFamily: 'var(--font-family-heading)'
                    }}>
                        Tu bicicleta merece <span style={{ color: 'var(--color-accent)' }}>ciencia, no suerte.</span>
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-muted)',
                        fontWeight: 400,
                        maxWidth: '650px',
                        margin: '0 auto'
                    }}>
                        Descubre por qué los expertos eligen Liquide y cómo aplicar nuestros productos para duplicar la vida útil de tus componentes.
                    </p>
                </div>

                {/* 3-Step Guide Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem',
                    marginBottom: '10rem'
                }}>
                    {/* Step 1 */}
                    <div style={{
                        padding: '3.5rem 2.5rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        transition: 'var(--transition-smooth)',
                        boxShadow: 'var(--shadow-md)'
                    }}
                        onMouseOver={e => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                        }}
                    >
                        <div style={{
                            width: '70px',
                            height: '70px',
                            backgroundColor: 'var(--color-bg)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2rem',
                            color: 'var(--color-accent)',
                            border: '1px solid var(--color-border)'
                        }}>
                            <Droplets size={32} strokeWidth={1.5} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-family-heading)' }}>1. Limpieza Profunda</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Aplica <strong>Bike Cleaner</strong> en toda la bici. Su nanotecnología penetra la suciedad microscópica.
                        </p>
                        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={18} color="var(--color-accent)" /> Espera 2 minutos
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={18} color="var(--color-accent)" /> Enjuaga con agua
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div style={{
                        padding: '3.5rem 2.5rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        transition: 'var(--transition-smooth)',
                        boxShadow: 'var(--shadow-md)'
                    }}
                        onMouseOver={e => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                        }}
                    >
                        <div style={{
                            width: '70px',
                            height: '70px',
                            backgroundColor: 'var(--color-bg)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2rem',
                            color: 'var(--color-accent)',
                            border: '1px solid var(--color-border)'
                        }}>
                            <Sparkles size={32} strokeWidth={1.5} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-family-heading)' }}>2. Desengrase Total</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Usa <strong>Bio Degreaser</strong> en la transmisión. Elimina grasa vieja y contaminantes.
                        </p>
                        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={18} color="var(--color-accent)" /> Usa cepillo de cerdas
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={18} color="var(--color-accent)" /> Seca completamente
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div style={{
                        padding: '3.5rem 2.5rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        transition: 'var(--transition-smooth)',
                        boxShadow: 'var(--shadow-md)'
                    }}
                        onMouseOver={e => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                        }}
                    >
                        <div style={{
                            width: '70px',
                            height: '70px',
                            backgroundColor: 'var(--color-bg)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2rem',
                            color: 'var(--color-accent)',
                            border: '1px solid var(--color-border)'
                        }}>
                            <Wrench size={32} strokeWidth={1.5} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-family-heading)' }}>3. Lubricación</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Aplica <strong>Biolube</strong> en cada eslabón. Reduce la fricción y aumenta la velocidad.
                        </p>
                        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={18} color="var(--color-accent)" /> Aplica en el interior
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={18} color="var(--color-accent)" /> Retira el exceso
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Comparison Section (Optimized for Light Theme) */}
                <div style={{
                    position: 'relative',
                    padding: '8rem 2rem',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    background: 'var(--color-primary)', // Keeping one dark element for premium contrast
                    boxShadow: 'var(--shadow-lg)',
                }}>
                    <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                            <h3 style={{
                                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                fontWeight: 800,
                                marginBottom: '1.5rem',
                                color: 'white',
                                fontFamily: 'var(--font-family-heading)'
                            }}>
                                Liquide vs. <span style={{ opacity: 0.3, color: 'white' }}>Lo Común</span>
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400, fontSize: '1.15rem' }}>
                                Por qué los ciclistas profesionales no usan productos genéricos.
                            </p>
                        </div>

                        {/* Comparison Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}>
                            {/* Liquide Side */}
                            <div style={{
                                padding: '3rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <CheckCircle size={20} color="var(--color-accent)" />
                                    <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-accent)' }}>
                                        Estándar Liquide
                                    </span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                                    {[
                                        'Seguro con Carbono & Pintura',
                                        'Biodegradable (Sin solventes)',
                                        'Inhibidores de Oxido Integrados',
                                        'Lubricación de Cerámica Avanzada'
                                    ].map((text, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                            <ShieldCheck size={22} color="white" />
                                            <span style={{ fontSize: '1.05rem', fontWeight: 500, color: 'white' }}>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Generic Side */}
                            <div style={{
                                padding: '3rem',
                                background: 'transparent',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <XCircle size={20} color="rgba(255,255,255,0.3)" />
                                    <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)' }}>
                                        Genéricos
                                    </span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                                    {[
                                        'Daña sellos de goma y retenes',
                                        'Tóxico / Altamente Contaminante',
                                        'Acelera la oxidación galvánica',
                                        'Atrae polvo y forma pasta abrasiva'
                                    ].map((text, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', opacity: 0.4 }}>
                                            <XCircle size={22} color="white" />
                                            <span style={{ fontSize: '1.05rem', fontWeight: 300, color: 'white' }}>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

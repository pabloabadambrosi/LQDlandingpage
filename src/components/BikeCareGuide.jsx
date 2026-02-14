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
                        fontWeight: 900,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        display: 'block',
                        marginBottom: '1.5rem',
                        fontStyle: 'italic'
                    }}>
                        Ingeniería en Mantenimiento
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: 900,
                        letterSpacing: '0.02em',
                        marginBottom: '2rem',
                        lineHeight: 1.1,
                        fontFamily: 'var(--font-family-heading)',
                        textTransform: 'uppercase',
                        fontStyle: 'italic'
                    }}>
                        TU BICICLETA MERECE <span style={{ color: 'var(--color-accent)' }}>CIENCIA, NO SUERTE.</span>
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-main)',
                        fontWeight: 500,
                        maxWidth: '650px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        Descubre por qué los expertos eligen Liquide y cómo aplicar nuestros productos para duplicar la vida útil de tus componentes.
                    </p>
                </div>

                {/* 3-Step Guide Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    marginBottom: '10rem'
                }}>
                    {/* Step 1 */}
                    <div className="ritual-feature" style={{
                        padding: '4rem 3rem',
                        backgroundColor: 'var(--color-dark-section)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(255, 49, 220, 0.1)',
                        transition: 'var(--transition-smooth)',
                        color: 'white'
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: 'black',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2.5rem',
                            color: 'var(--color-accent)',
                            border: '1px solid var(--color-accent)'
                        }}>
                            <Droplets size={36} strokeWidth={2} />
                        </div>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-family-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>1. Limpieza Profunda</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                            Aplica <strong>Bike Cleaner</strong> en toda la bici. Su nanotecnología penetra la suciedad microscópica.
                        </p>
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
                                <li style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                                    <CheckCircle size={20} color="var(--color-accent)" /> ESPERA 2 MINUTOS
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                                    <CheckCircle size={20} color="var(--color-accent)" /> ENJUAGA CON AGUA
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="ritual-feature" style={{
                        padding: '4rem 3rem',
                        backgroundColor: 'var(--color-dark-section)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(255, 49, 220, 0.1)',
                        transition: 'var(--transition-smooth)',
                        color: 'white'
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: 'black',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2.5rem',
                            color: 'var(--color-accent)',
                            border: '1px solid var(--color-accent)'
                        }}>
                            <Sparkles size={36} strokeWidth={2} />
                        </div>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-family-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2. Desengrase Total</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                            Usa <strong>Bio Degreaser</strong> en la transmisión. Elimina grasa vieja y contaminantes.
                        </p>
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
                                <li style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                                    <CheckCircle size={20} color="var(--color-accent)" /> USA CEPILLO DE CERDAS
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                                    <CheckCircle size={20} color="var(--color-accent)" /> SECA COMPLETAMENTE
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="ritual-feature" style={{
                        padding: '4rem 3rem',
                        backgroundColor: 'var(--color-dark-section)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(255, 49, 220, 0.1)',
                        transition: 'var(--transition-smooth)',
                        color: 'white'
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: 'black',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2.5rem',
                            color: 'var(--color-accent)',
                            border: '1px solid var(--color-accent)'
                        }}>
                            <Wrench size={36} strokeWidth={2} />
                        </div>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1.5rem', fontFamily: 'var(--font-family-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>3. Lubricación</h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                            Aplica <strong>Biolube</strong> en cada eslabón. Reduce la fricción y aumenta la velocidad.
                        </p>
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
                                <li style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                                    <CheckCircle size={20} color="var(--color-accent)" /> APLICA EN EL INTERIOR
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}>
                                    <CheckCircle size={20} color="var(--color-accent)" /> RETIRA EL EXCESO
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
                                fontWeight: 900,
                                marginBottom: '1.5rem',
                                color: 'white',
                                fontFamily: 'var(--font-family-heading)',
                                textTransform: 'uppercase',
                                fontStyle: 'italic'
                            }}>
                                LIQUIDE VS. <span style={{ opacity: 0.3, color: 'white' }}>LO COMÚN</span>
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 800, fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                EL RENDIMIENTO NO ES NEGOCIABLE.
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

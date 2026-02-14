import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const ownerPhone = "593987706360";

    return (
        <a
            href={`https://wa.me/${ownerPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                backgroundColor: '#25D366',
                color: 'white',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
                zIndex: 150,
                transition: 'all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
                cursor: 'pointer',
                border: 'none',
                textDecoration: 'none'
            }}
            className="wa-btn"
            onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
            }}
            onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.backgroundColor = '#25D366';
            }}
        >
            <MessageCircle size={32} fill="white" strokeWidth={1.5} />

            {/* Tooltip */}
            <div style={{
                position: 'absolute',
                right: '100%',
                marginRight: '1rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '0.75rem 1.25rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                boxShadow: 'var(--shadow-lg)',
                pointerEvents: 'none',
                opacity: 0,
                transform: 'translateX(10px)',
                transition: 'all 0.3s ease',
                border: '1px solid var(--color-accent)'
            }} className="wa-tooltip">
                ¿Necesitas ayuda? Escríbenos
            </div>

            <style>{`
                .wa-btn:hover .wa-tooltip {
                    opacity: 1 !important;
                    transform: translateX(0) !important;
                }
            `}</style>
        </a>
    );
}

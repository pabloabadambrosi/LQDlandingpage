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
            onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
            }}
            onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
            }}
        >
            <MessageCircle size={32} fill="white" strokeWidth={1.5} />

            {/* Tooltip */}
            <div style={{
                position: 'absolute',
                right: '100%',
                marginRight: '1rem',
                backgroundColor: 'white',
                color: 'black',
                padding: '0.75rem 1.25rem',
                borderRadius: '1rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                boxShadow: 'var(--shadow-lg)',
                pointerEvents: 'none',
                opacity: 0,
                transform: 'translateX(10px)',
                transition: 'all 0.3s ease'
            }} className="wa-tooltip">
                ¿Necesitas ayuda? Escríbenos
            </div>

            <style>{`
                a:hover .wa-tooltip {
                    opacity: 1 !important;
                    transform: translateX(0) !important;
                }
            `}</style>
        </a>
    );
}

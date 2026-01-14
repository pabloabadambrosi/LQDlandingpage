import React from 'react';

export default function ProductSkeleton() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div className="skeleton skeleton-img" />
            <div className="skeleton skeleton-text skeleton-cat" />
            <div className="skeleton skeleton-text skeleton-title" />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <div className="skeleton skeleton-text skeleton-price" />
                <div className="skeleton" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            </div>
        </div>
    );
}

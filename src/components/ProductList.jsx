import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductList({ onAddToCart, isWholesale, searchQuery = '', activeCategory = 'Todos', onProductClick }) {
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    if (filteredProducts.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '4rem 1.5rem', color: 'var(--color-text-muted)' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: 300 }}>No se encontraron productos que coincidan con tu búsqueda.</p>
            </div>
        );
    }

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2.5rem'
        }}>
            {filteredProducts.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    isWholesale={isWholesale}
                    onClick={() => onProductClick(product)}
                />
            ))}
        </div>
    );
}

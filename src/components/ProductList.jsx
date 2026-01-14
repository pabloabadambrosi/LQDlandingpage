import React from 'react';
import { Search } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import ProductSkeleton from './ProductSkeleton';

export default function ProductList({ onAddToCart, searchQuery = '', activeCategory = 'Todos', priceRange = 'all', isLoading, onProductClick }) {
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;

        // Price filtering
        const price = product.priceRetail;
        let matchesPrice = true;
        if (priceRange === 'low') matchesPrice = price < 6;
        else if (priceRange === 'mid') matchesPrice = price >= 6 && price <= 10;
        else if (priceRange === 'high') matchesPrice = price > 10;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    if (isLoading) {
        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2.5rem'
            }}>
                {[1, 2, 3, 4, 5, 6].map(i => <ProductSkeleton key={i} />)}
            </div>
        );
    }

    if (filteredProducts.length === 0) {
        return (
            <div style={{
                textAlign: 'center',
                padding: '6rem 1.5rem',
                color: 'var(--color-text-muted)',
                backgroundColor: 'var(--color-light-gray)',
                borderRadius: 'var(--radius-lg)',
                border: '1px dashed var(--color-border)',
                gridColumn: '1 / -1'
            }}>
                <Search size={40} style={{ marginBottom: '1.5rem', opacity: 0.2 }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>No se hallaron resultados</h3>
                <p style={{ fontSize: '1rem', fontWeight: 300 }}>Intenta con otros términos o busca en una categoría diferente.</p>
            </div>
        );
    }

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2.5rem'
        }}>
            {filteredProducts.map((product, index) => (
                <div
                    key={product.id}
                    className="product-entry"
                    style={{ animationDelay: `${index * 0.05}s` }}
                >
                    <ProductCard
                        product={product}
                        onAddToCart={onAddToCart}
                        onClick={() => onProductClick(product)}
                    />
                </div>
            ))}
        </div>
    );
}

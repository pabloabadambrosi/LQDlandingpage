import React from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onClick }) => {
    const price = product.priceRetail;

    return (
        <div className="product-card" onClick={onClick}>
            <div className="product-card-image-wrapper">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-card-image"
                />

                <div className="product-card-overlay">
                    <button className="btn btn-quick-view">
                        Vista Rápida
                    </button>
                </div>

                {product.priceOriginal && (
                    <div className="product-card-badge">
                        OFERTA
                    </div>
                )}
            </div>

            <div className="product-card-info">
                <span className="product-card-category">{product.category}</span>
                <h3 className="product-card-name">{product.name}</h3>

                <div className="product-card-footer">
                    <div className="product-card-pricing">
                        <span className="product-card-price">${price.toFixed(2)}</span>
                        {product.priceOriginal && (
                            <span className="product-card-old-price">
                                ${product.priceOriginal.toFixed(2)}
                            </span>
                        )}
                    </div>

                    <button
                        className="btn-add-to-cart"
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                        }}
                        aria-label="Añadir al carrito"
                    >
                        <Plus size={24} strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;

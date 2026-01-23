import { useState } from 'react'
import { Search, Check } from 'lucide-react'
import ProductList from './components/ProductList'
import CheckoutModal from './components/CheckoutModal'
import ContactModal from './components/ContactModal'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import WhatsAppButton from './components/WhatsAppButton'
import ProductDetailModal from './components/ProductDetailModal'
import BikeCareGuide from './components/BikeCareGuide'

// Layout & Sections
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CartSidebar from './components/cart/CartSidebar'
import RitualSection from './components/sections/RitualSection'
import B2BSection from './components/sections/B2BSection'

function App() {
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('Todos')
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [showToast, setShowToast] = useState(false)
    const [animateCart, setAnimateCart] = useState(false)
    const [priceRange, setPriceRange] = useState('all')
    const [isLoading, setIsLoading] = useState(false)

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id)
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...prev, { ...product, quantity: 1 }]
        })

        setShowToast(true)
        setAnimateCart(true)
        setTimeout(() => setShowToast(false), 2000)
        setTimeout(() => setAnimateCart(false), 500)
    }

    const updateQuantity = (id, change) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + change
                return newQty > 0 ? { ...item, quantity: newQty } : item
            }
            return item
        }))
    }

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const cartTotal = cartItems.reduce((sum, item) => sum + (item.priceRetail * item.quantity), 0)
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    const handleConfirmOrder = (customerData) => {
        let message = `*NUEVO PEDIDO DE CLIENTE*\n\n`;
        message += `*Cliente:* ${customerData.name}\n`;
        message += `*Tel:* ${customerData.phone}\n`;
        message += `*Email:* ${customerData.email}\n`;
        message += `*Dirección:* ${customerData.address}, ${customerData.city}\n\n`;

        message += `*Detalle del Pedido:*\n`;
        cartItems.forEach(item => {
            message += `- ${item.quantity}x ${item.name} ($${item.priceRetail.toFixed(2)})\n`;
        });

        message += `\n*TOTAL: $${cartTotal.toFixed(2)}*`;

        const encodedMessage = encodeURIComponent(message);
        const ownerPhone = "593987706360";
        const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        const mailtoLink = `mailto:${customerData.email}?subject=Confirmación de Pedido - Liquide&body=${encodedMessage}`;
        window.location.href = mailtoLink;

        setCartItems([]);
        setIsCheckoutOpen(false);
        setIsCartOpen(false);
    };

    const handleContactSubmit = (data) => {
        let message = `*NUEVO CONTACTO DESDE LA WEB*\n\n`;
        message += `*Nombre:* ${data.name}\n`;
        message += `*Tel/WhatsApp:* ${data.tel}\n`;
        message += `*Email:* ${data.email}\n`;
        message += `*Mensaje:*\n${data.message}\n`;

        const encodedMessage = encodeURIComponent(message);
        const ownerPhone = "593987706360";
        const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        const mailtoLink = `mailto:pabloabadambrosi@gmail.com?subject=Nuevo Mensaje de Contacto - Liquide&body=${encodedMessage}`;
        window.location.href = mailtoLink;

        setIsContactOpen(false);
    };

    const handleCategoryChange = (cat) => {
        setIsLoading(true);
        setActiveCategory(cat);
        setTimeout(() => setIsLoading(false), 500);
    };

    const handlePriceRangeChange = (range) => {
        setIsLoading(true);
        setPriceRange(range);
        setTimeout(() => setIsLoading(false), 500);
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        if (query.length === 0 || query.length > 2) {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 300);
        }
    };

    return (
        <div className="app">
            <Header
                onOpenContact={() => setIsContactOpen(true)}
                onOpenCart={() => setIsCartOpen(true)}
                cartCount={cartCount}
                animateCart={animateCart}
            />

            <Hero />
            <TrustBar />

            <RitualSection />

            <BikeCareGuide />

            <main id="catalog" className="catalog-section container">
                <div className="catalog-header">
                    <div className="catalog-title-wrapper">
                        <h2 className="catalog-title">Catálogo Profesional</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', fontWeight: 300 }}>
                            {activeCategory === 'Todos' ? 'Explora nuestra gama completa de soluciones de alto rendimiento.' : `Mostrando productos de la categoría ${activeCategory}.`}
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="search-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '700px' }}>
                        <Search size={22} style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)', pointerEvents: 'none' }} />
                        <input
                            type="text"
                            placeholder="Buscar productos de alto rendimiento..."
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {['Todos', 'Limpieza', 'Lubricantes', 'Mantenimiento', 'Acabados', 'Selladores', 'Ropa'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Price Filters */}
                    <div style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem', color: 'var(--color-text-muted)', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <span style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Filtrar por presupuesto:</span>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            {[
                                { label: 'Todos', value: 'all' },
                                { label: '< $6', value: 'low' },
                                { label: '$6 - $10', value: 'mid' },
                                { label: '> $10', value: 'high' }
                            ].map(range => (
                                <button
                                    key={range.value}
                                    onClick={() => handlePriceRangeChange(range.value)}
                                    className={`price-filter-btn ${priceRange === range.value ? 'active' : ''}`}
                                >
                                    {range.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <ProductList
                    onAddToCart={addToCart}
                    searchQuery={searchQuery}
                    activeCategory={activeCategory}
                    priceRange={priceRange}
                    isLoading={isLoading}
                    onProductClick={(p) => setSelectedProduct(p)}
                />
            </main>

            <B2BSection onContactClick={() => setIsContactOpen(true)} />

            <Footer />

            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
                total={cartTotal}
                count={cartCount}
                onCheckout={() => setIsCheckoutOpen(true)}
            />

            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                onConfirm={handleConfirmOrder}
                total={cartTotal}
                cartCount={cartCount}
            />

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
                onConfirm={handleContactSubmit}
            />

            <ProductDetailModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                onAddToCart={addToCart}
            />

            <WhatsAppButton />

            {showToast && (
                <div className="toast">
                    <Check size={18} />
                    <span>Añadido al carrito con éxito</span>
                </div>
            )}
        </div>
    )
}

export default App

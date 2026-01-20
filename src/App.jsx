import { useState } from 'react'
import { ShoppingCart, X, Trash2, Plus, Minus, Users, MessageCircle, Instagram, Search, Check } from 'lucide-react'
import ProductList from './components/ProductList'
import CheckoutModal from './components/CheckoutModal'
import ContactModal from './components/ContactModal'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import WhatsAppButton from './components/WhatsAppButton'
import ProductDetailModal from './components/ProductDetailModal'
import BikeCareGuide from './components/BikeCareGuide'

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
    const [priceRange, setPriceRange] = useState('all') // 'all', 'low', 'mid', 'high'
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

        // UX Feedback
        setShowToast(true)
        setAnimateCart(true)
        setTimeout(() => setShowToast(false), 2000)
        setTimeout(() => setAnimateCart(false), 500)

        // setIsCartOpen(true) // Removed auto-open for better flow, using toast instead
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

    const determinePrice = (item) => {
        return item.priceRetail
    }

    const cartTotal = cartItems.reduce((sum, item) => {
        const price = determinePrice(item)
        return sum + (price * item.quantity)
    }, 0)
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    const handleConfirmOrder = (customerData) => {
        // Construct the WhatsApp message
        let message = `*NUEVO PEDIDO DE CLIENTE*\n\n`;
        message += `*Cliente:* ${customerData.name}\n`;
        message += `*Tel:* ${customerData.phone}\n`;
        message += `*Email:* ${customerData.email}\n`;
        message += `*Dirección:* ${customerData.address}, ${customerData.city}\n\n`;

        message += `*Detalle del Pedido:*\n`;
        cartItems.forEach(item => {
            const price = determinePrice(item);
            message += `- ${item.quantity}x ${item.name} ($${price.toFixed(2)})\n`;
        });

        message += `\n*TOTAL: $${cartTotal.toFixed(2)}*`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp Phone Number
        const ownerPhone = "593987706360";

        const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Optional: Send email via mailto
        const mailtoLink = `mailto:${customerData.email}?subject=Confirmación de Pedido - Liquide&body=${encodedMessage}`;
        window.location.href = mailtoLink;

        // Clear cart and close modals
        setCartItems([]);
        setIsCheckoutOpen(false);
        setIsCartOpen(false);
        // alert('Pedido enviado a WhatsApp! Gracias por tu compra.');
    };

    const handleContactSubmit = (data) => {
        // Construct the WhatsApp message
        let message = `*NUEVO CONTACTO DESDE LA WEB*\n\n`;
        message += `*Nombre:* ${data.name}\n`;
        message += `*Tel/WhatsApp:* ${data.tel}\n`;
        message += `*Email:* ${data.email}\n`;
        message += `*Mensaje:*\n${data.message}\n`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp Phone Number (Owner)
        const ownerPhone = "593987706360";
        const whatsappUrl = `https://wa.me/${ownerPhone}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Send email via mailto to the owner
        const mailtoLink = `mailto:pabloabadambrosi@gmail.com?subject=Nuevo Mensaje de Contacto - Liquide&body=${encodedMessage}`;
        window.location.href = mailtoLink;

        // Close modal
        setIsContactOpen(false);
    };

    const handleCategoryChange = (cat) => {
        setIsLoading(true);
        setActiveCategory(cat);
        setTimeout(() => setIsLoading(false), 500); // Simulated loading for UX
    };

    const handlePriceRangeChange = (range) => {
        setIsLoading(true);
        setPriceRange(range);
        setTimeout(() => setIsLoading(false), 500);
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query);
        // Only trigger loading if query is significant to avoid flickering on every keypress
        if (query.length === 0 || query.length > 2) {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 300);
        }
    };

    return (
        <div className="app">
            <header style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--color-border)',
                padding: '1.25rem 0',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo - Strategic placement top-left for brand retention */}
                    <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <img
                            src="/liquide-logo.png"
                            alt="Liquide"
                            style={{
                                height: '80px',
                                width: 'auto',
                                objectFit: 'contain',
                                transition: 'opacity 0.2s'
                            }}
                            onMouseOver={e => e.currentTarget.style.opacity = '0.8'}
                            onMouseOut={e => e.currentTarget.style.opacity = '1'}
                        />
                    </a>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <button
                            className="btn"
                            onClick={() => setIsContactOpen(true)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                fontSize: '0.8rem',
                                border: '1px solid var(--color-border)',
                                borderRadius: '999px',
                                backgroundColor: 'transparent',
                                color: 'var(--color-text)',
                                marginRight: '0.5rem'
                            }}
                        >
                            <MessageCircle size={16} />
                            Contáctanos
                        </button>



                        <button
                            className={`btn ${animateCart ? 'animate-cart' : ''}`}
                            style={{ position: 'relative', padding: '0.5rem' }}
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingCart size={22} strokeWidth={1.5} />
                            {cartCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '0',
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'white',
                                    fontSize: '0.7rem',
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '600'
                                }}>{cartCount}</span>
                            )}
                        </button>
                    </div>
                </div>
            </header >

            <Hero />
            <TrustBar />

            {/* Brand Essentials Showcase */}
            <section style={{
                padding: '4rem 1.5rem',
                backgroundColor: '#fff5f7', // Very light pink to match the image theme
                overflow: 'hidden'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4rem',
                    flexWrap: 'wrap'
                }}>
                    <div style={{
                        flex: '1',
                        minWidth: '300px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/brand-trio.png"
                            alt="Liquide Essentials"
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: '20px 20px 60px rgba(0,0,0,0.05)',
                                transform: 'rotate(-2deg)',
                                transition: 'transform 0.5s ease'
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'rotate(-2deg) scale(1)'}
                        />
                    </div>
                    <div style={{
                        flex: '1.2',
                        minWidth: '300px'
                    }}>
                        <span style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            color: '#ff4d8d',
                            display: 'block',
                            marginBottom: '1rem'
                        }}>El Ritual Liquide</span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 300,
                            lineHeight: 1.1,
                            marginBottom: '2rem',
                            letterSpacing: '-0.03em'
                        }}>
                            Limpia. <br />
                            Desengrasa. <br />
                            <span style={{ fontWeight: 600 }}>Lubrica.</span>
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2.5rem',
                            maxWidth: '500px',
                            fontWeight: 300,
                            lineHeight: 1.6
                        }}>
                            Nuestra tríada esencial está diseñada para trabajar en armonía.
                            Fórmulas biodegradables de alto rendimiento que no solo cuidan tu bicicleta,
                            sino que elevan tu experiencia en cada ruta.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <div style={{ flex: '1', padding: '1.5rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                                <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Efecto Inmediato</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Resultados profesionales desde la primera aplicación.</p>
                            </div>
                            <div style={{ flex: '1', padding: '1.5rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                                <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Ecuatoriano</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Orgullosamente desarrollado y fabricado localmente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BikeCareGuide />

            <main className="container" style={{ padding: '0 1.5rem 4rem', minHeight: '80vh' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2.5rem',
                        alignItems: 'center',
                        marginBottom: '4rem'
                    }}>
                        <div style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '1rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Catálogo de Productos</h2>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', fontWeight: 300 }}>
                                {activeCategory === 'Todos' ? 'Explora nuestra gama completa de soluciones.' : `Mostrando productos de la categoría ${activeCategory}.`}
                            </p>
                        </div>
                        {/* Search Bar */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '500px'
                        }}>
                            <Search
                                size={20}
                                style={{
                                    position: 'absolute',
                                    left: '1.25rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: 'var(--color-text-muted)',
                                    pointerEvents: 'none'
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '1rem 1rem 1rem 3.5rem',
                                    borderRadius: '999px',
                                    backgroundColor: 'white',
                                    boxShadow: 'var(--shadow-sm)',
                                    fontSize: '1rem',
                                    fontFamily: 'inherit',
                                    transition: 'all 0.2s ease',
                                    outline: 'none'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--color-primary)';
                                    e.target.style.backgroundColor = 'white';
                                    e.target.style.boxShadow = '0 0 0 4px rgba(0,0,0,0.05)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'var(--color-border)';
                                    e.target.style.backgroundColor = 'var(--color-light-gray)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: '0.5rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}>
                            {['Todos', 'Limpieza', 'Lubricantes', 'Mantenimiento', 'Acabados', 'Selladores', 'Ropa'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
                                    style={{
                                        padding: '0.6rem 1.5rem',
                                        borderRadius: '999px',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        transition: 'all 0.2s ease',
                                        backgroundColor: activeCategory === cat ? 'var(--color-primary)' : 'white',
                                        color: activeCategory === cat ? 'white' : 'var(--color-text-main)',
                                        border: '1px solid',
                                        borderColor: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-border)',
                                        boxShadow: activeCategory === cat ? '0 4px 12px rgba(0,0,0,0.1)' : 'var(--shadow-sm)'
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Price Filters */}
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            fontSize: '0.85rem',
                            color: 'var(--color-text-muted)',
                            alignItems: 'center'
                        }}>
                            <span>Filtrar por precio:</span>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {[
                                    { label: 'Todos', value: 'all' },
                                    { label: '< $6', value: 'low' },
                                    { label: '$6 - $10', value: 'mid' },
                                    { label: '> $10', value: 'high' }
                                ].map(range => (
                                    <button
                                        key={range.value}
                                        onClick={() => handlePriceRangeChange(range.value)}
                                        style={{
                                            color: priceRange === range.value ? 'var(--color-primary)' : 'inherit',
                                            fontWeight: priceRange === range.value ? 600 : 400,
                                            textDecoration: priceRange === range.value ? 'underline' : 'none',
                                            padding: '0.2rem 0.5rem'
                                        }}
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
                </div>
            </main>

            {/* B2B / Wholesale Inquiry Section */}
            <section style={{
                backgroundColor: 'var(--color-light-gray)',
                padding: '6rem 1.5rem',
                textAlign: 'center',
                borderTop: '1px solid var(--color-border)'
            }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{
                        fontSize: '2.25rem',
                        fontWeight: 300,
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.2'
                    }}>
                        ¿Tienes un negocio y quieres ser distribuidor?
                    </h2>
                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '1.1rem',
                        marginBottom: '2.5rem',
                        fontWeight: 300
                    }}>
                        Únete a nuestra red comercial y lleva la excelencia de Liquide a tus clientes. <span
                            onClick={() => setIsContactOpen(true)}
                            style={{
                                cursor: 'pointer',
                                color: 'var(--color-primary)',
                                textDecoration: 'underline',
                                fontWeight: 500
                            }}
                        >
                            Contáctanos
                        </span> para recibir información sobre ventas al por mayor.
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsContactOpen(true)}
                        style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1rem',
                            boxShadow: '0 10px 20px -5px rgba(0,0,0,0.1)'
                        }}
                    >
                        Contáctanos
                    </button>
                </div>
            </section>

            <footer style={{
                borderTop: '1px solid var(--color-border)',
                padding: '3rem 1.5rem',
                backgroundColor: 'var(--color-surface)',
                marginTop: 'auto'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    {/* Logo in footer for brand reinforcement */}
                    <img
                        src="/liquide-logo.png"
                        alt="Liquide"
                        style={{
                            height: '100px',
                            width: 'auto',
                            objectFit: 'contain',
                            opacity: '0.9'
                        }}
                    />

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <a
                            href="https://www.instagram.com/liquide_ec/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--color-text)',
                                textDecoration: 'none',
                                fontWeight: '500',
                                transition: 'opacity 0.2s'
                            }}
                            onMouseOver={e => e.currentTarget.style.opacity = '0.7'}
                            onMouseOut={e => e.currentTarget.style.opacity = '1'}
                        >
                            <Instagram size={20} />
                            <span>@liquide_ec</span>
                        </a>
                    </div>

                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.85rem',
                        fontWeight: '300'
                    }}>
                        &copy; {new Date().getFullYear()} Liquide. Todos los derechos reservados.
                    </p>
                </div>
            </footer>

            {/* Cart Sidebar Overlay */}
            {
                isCartOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        backdropFilter: 'blur(2px)',
                        zIndex: 200,
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }} onClick={() => setIsCartOpen(false)}>

                        {/* Cart Sidebar */}
                        <div style={{
                            width: '100%',
                            maxWidth: '450px',
                            backgroundColor: 'var(--color-surface)',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: 'var(--shadow-lg)',
                            animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                        }} onClick={e => e.stopPropagation()}>

                            <div style={{ padding: '2rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h2 style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '-0.02em' }}>Tu Carrito ({cartCount})</h2>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="btn"
                                    style={{ padding: '0.25rem' }}
                                >
                                    <X size={24} strokeWidth={1} />
                                </button>
                            </div>

                            <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
                                {cartItems.length === 0 ? (
                                    <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginTop: '4rem' }}>
                                        <ShoppingCart size={40} style={{ opacity: 0.1, margin: '0 auto 1.5rem', display: 'block' }} />
                                        <p style={{ fontWeight: '300' }}>Tu carrito está vacío.</p>
                                        <button
                                            className="btn btn-primary"
                                            style={{ marginTop: '2rem' }}
                                            onClick={() => setIsCartOpen(false)}
                                        >
                                            Empezar a Comprar
                                        </button>
                                    </div>
                                ) : (
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                        {cartItems.map(item => (
                                            <li key={item.id} style={{ display: 'flex', gap: '1.5rem' }}>
                                                <div style={{ width: '90px', height: '110px', backgroundColor: '#f9fafb', borderRadius: 'var(--radius-sm)', overflow: 'hidden', flexShrink: 0 }}>
                                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                                                </div>
                                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0.25rem 0' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                                                        <h4 style={{ fontSize: '1rem', fontWeight: 500, letterSpacing: '-0.01em', paddingRight: '1rem' }}>{item.name}</h4>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                            <span style={{ fontWeight: 500 }}>
                                                                ${(determinePrice(item) * item.quantity).toFixed(2)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: 'auto' }}>
                                                        ${determinePrice(item).toFixed(2)} / un
                                                    </p>

                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)', borderRadius: '999px', padding: '0.125rem' }}>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, -1)}
                                                                style={{ padding: '0.25rem 0.5rem', display: 'flex', opacity: item.quantity <= 1 ? 0.3 : 1 }}
                                                                disabled={item.quantity <= 1}
                                                            >
                                                                <Minus size={12} />
                                                            </button>
                                                            <span style={{ padding: '0 0.5rem', fontSize: '0.85rem', fontWeight: 500, minWidth: '1.5rem', textAlign: 'center' }}>{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, 1)}
                                                                style={{ padding: '0.25rem 0.5rem', display: 'flex' }}
                                                            >
                                                                <Plus size={12} />
                                                            </button>
                                                        </div>

                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            style={{ color: 'var(--color-text-muted)', padding: '0.25rem', fontSize: '0.8rem', textDecoration: 'underline' }}
                                                            aria-label="Remove item"
                                                        >
                                                            Eliminar
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {cartItems.length > 0 && (
                                <div style={{ padding: '2rem', borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
                                        <span>Subtotal</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', textAlign: 'center' }}>
                                        Impuestos y envío calculados al finalizar.
                                    </p>
                                    <button
                                        className="btn btn-primary"
                                        style={{ width: '100%', padding: '1.125rem' }}
                                        onClick={() => setIsCheckoutOpen(true)}
                                    >
                                        Finalizar Compra
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }

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

            {/* Toast Notification */}
            {
                showToast && (
                    <div className="toast">
                        <Check size={18} />
                        <span>Producto añadido al carrito</span>
                    </div>
                )
            }
        </div >
    )
}

export default App

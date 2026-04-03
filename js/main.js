/**
 * PRODUCT SHOWCASE TEMPLATE ENGINE
 * Senior Frontend Architect: Antigravity
 * Scalable, Performant, and Reusable
 */

// 1. PRODUCT DATA (Centralized & Scalable)
const products = [
    {
        id: "p1",
        name: "Eclat Diamond Ring",
        brand: "Jewellery",
        category: "Jewellery",
        price: "₹1,09,999",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
        description: "Exquisitely hand-crafted 18k white gold ring set with a brilliant-cut center diamond and a shimmering micro-pavé band. A timeless symbol of elegance and commitment.",
        features: ["18k White Gold", "0.5ct Diamond", "Handmade", "GIA Certified"]
    },
    {
        id: "p2",
        name: "Velour Cashmere Overcoat",
        brand: "Clothing",
        category: "Clothing",
        price: "₹74,999",
        image: "https://images.unsplash.com/photo-1591047139829-d91aec16adcd?auto=format&fit=crop&q=80&w=800",
        description: "Meticulously tailored from luxurious Italian cashmere. Features a structured silhouette, peak lapels, and a silk-blend lining for ultimate comfort and sophistication.",
        features: ["100% Cashmere", "Italian Fabric", "Silk Lining", "Dry Clean Only"]
    },
    {
        id: "p3",
        name: "Studio Pro Headphones",
        brand: "Electronics",
        category: "Electronics",
        price: "₹45,999",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
        description: "High-fidelity audio meets minimalist design. Active noise cancellation, 40-hour battery life, and spatial audio support. Redefining your auditory experience.",
        features: ["Noise Cancelling", "40h Battery", "Bluetooth 5.2", "USB-C Fast Charge"]
    },
    {
        id: "p4",
        name: "Heritage Leather Weekend Bag",
        brand: "Clothing",
        category: "Clothing",
        price: "₹37,499",
        image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800",
        description: "Hand-stitched full-grain leather. Designed to age beautifully, with brass hardware and reinforced straps for durability. The perfect companion for short escapes.",
        features: ["Full Grain Leather", "Brass Hardware", "Water Resistant", "45L Capacity"]
    },
    {
        id: "p5",
        name: "Omni Smartwatch Pro",
        brand: "Electronics",
        category: "Electronics",
        price: "₹27,499",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        description: "Precision health tracking, always-on OLED display, and seamless integration with your digital ecosystem. 50m water resistance and premium titanium finish.",
        features: ["Titanium Case", "OLED Display", "Heart Rate Monitor", "GPS Tracking"]
    },
    {
        id: "p6",
        name: "Serenity Quartz Necklace",
        brand: "Jewellery",
        category: "Jewellery",
        price: "₹14,999",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
        description: "A delicate 14k gold chain paired with a hand-selected amethyst crystal. Designed to bring harmony and a touch of light to your every day attire.",
        features: ["14k Gold Chain", "Natural Amethyst", "18-inch Length", "Hypoallergenic"]
    },
    {
        id: "p7",
        name: "Signature Leather Loafers",
        brand: "Footwear",
        category: "Clothing",
        price: "₹18,499",
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800",
        description: "Classic silhouette meets modern comfort. These loafers are crafted from supple calfskin leather with a cushioned footbed for all-day wearability.",
        features: ["Handcrafted", "Calfskin Leather", "Orthopedic Sole", "Brogue Detailing"]
    },
    {
        id: "p8",
        name: "Aura Smart Mirror",
        brand: "Home Tech",
        category: "Electronics",
        price: "₹99,999",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
        description: "Transform your morning routine with the Aura Smart Mirror. Featuring adjustable studio lighting, built-in voice assistant, and wellness tracking data displayed elegantly through the glass.",
        features: ["LED Lighting", "WiFi Connected", "Touch Control", "Shatterproof Glass"]
    },
    {
        id: "p9",
        name: "Infinite Hoop Earrings",
        brand: "Jewellery",
        category: "Jewellery",
        price: "₹28,999",
        image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800",
        description: "Hand-polished 14k yellow gold hoops that offer a subtle yet striking statement. Lightweight for daily comfort, but bold enough for evening wear.",
        features: ["14k Yellow Gold", "Polished Finish", "Safety Latch", "Sustainable Sourcing"]
    },
    {
        id: "p10",
        name: "Silk Evening Gown",
        brand: "Couture",
        category: "Clothing",
        price: "₹1,15,999",
        image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&q=80&w=800",
        description: "A floor-length masterpiece in pure mulberry silk. Features a draped neckline and a tailored waist, creating a silhouette that flows gracefully with every movement.",
        features: ["100% Mulberry Silk", "Hand-stitched", "Hidden Zipper", "Limited Edition"]
    },
    {
        id: "p11",
        name: "Titanium Sunglasses",
        brand: "Accessories",
        category: "Clothing",
        price: "₹22,999",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
        description: "Aerospace-grade titanium frames paired with polarized Zeis lenses. Virtually weightless and incredibly durable, offering superior UV protection and timeless style.",
        features: ["Titanium Frame", "Polarized Lenses", "Scratch Resistant", "UV400 Protection"]
    },
    {
        id: "p12",
        name: "Lumina Desk Lamp",
        brand: "Home Tech",
        category: "Electronics",
        price: "₹11,999",
        image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=800",
        description: "Dimmable LED task lighting with touch-sensitive controls and an integrated wireless charger. Minimalist aluminum design that elevates any workspace.",
        features: ["LED Dimmable", "Wireless Charging", "USB Port", "Flexible Neck"]
    }
];

// 2. DOM ELEMENTS
const state = {
    activeCategory: "all",
    searchQuery: "",
    filteredProducts: [...products],
    isDarkMode: false
};

const dom = {
    productList: document.getElementById('product-list'),
    categoryContainer: document.getElementById('category-container'),
    filterGroup: document.getElementById('filter-group'),
    searchInput: document.getElementById('product-search'),
    modal: document.getElementById('product-modal'),
    loader: document.getElementById('loader'),
    header: document.getElementById('main-header'),
    themeToggle: document.getElementById('theme-toggle')
};

// 3. CORE FUNCTIONS (Rendering & Logic)

// Initialize the Application
const init = () => {
    renderCategories();
    renderProducts(products);
    setupFilters();
    setupEventListeners();
    initTheme();
    
    // Hide Loader
    setTimeout(() => {
        dom.loader.style.opacity = '0';
        setTimeout(() => dom.loader.style.display = 'none', 500);
    }, 800);

    // Initialize Lucide Icons
    lucide.createIcons();
};

// Extract unique categories for dynamic UI
const getUniqueCategories = () => {
    return [...new Set(products.map(p => p.category))];
};

// Render Category Cards (Mobile Grid)
const renderCategories = () => {
    const categories = getUniqueCategories();
    const html = categories.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat}')">
            <img src="${getCategoryImg(cat)}" 
                 alt="${cat}" 
                 onerror="this.src='https://images.unsplash.com/photo-1544367567-0f2fcb009e0b'; this.onerror=null;">
            <div class="category-content">
                <h3>${cat}</h3>
                <p>New Collections</p>
            </div>
        </div>
    `).join('');
    dom.categoryContainer.innerHTML = html;
};

// Helper for Category Images (Placeholders)
const getCategoryImg = (cat) => {
    const mappings = {
        'Clothing': 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
        'Jewellery': 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
        'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800'
    };
    return mappings[cat];
};

// Dynamic Filter Buttons
const setupFilters = () => {
    const categories = getUniqueCategories();
    const html = [
        '<button class="filter-btn active" data-category="all">All Items</button>',
        ...categories.map(cat => `
            <button class="filter-btn" data-category="${cat}">${cat}</button>
        `)
    ].join('');
    dom.filterGroup.innerHTML = html;
};

// Render Product Grid
const renderProducts = (data) => {
    if (data.length === 0) {
        dom.productList.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem;">No products found for this criteria.</div>`;
        return;
    }

    const html = data.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-wrap">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="product-image" 
                     loading="lazy"
                     onerror="this.src='https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop'; this.onerror=null;">
            </div>
            <div class="product-info">
                <span class="product-brand">${product.brand}</span>
                <h3 class="product-title">${product.name}</h3>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px;">
                    <span class="product-price">${product.price}</span>
                    <button class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: 0.8rem;" onclick="event.stopPropagation(); openDetail('${product.id}')">Details</button>
                </div>
            </div>
        </div>
    `).join('');
    dom.productList.innerHTML = html;
};

// 4. LOGIC (Filtering & Search)

const applyFilters = () => {
    state.filteredProducts = products.filter(p => {
        const matchesCategory = state.activeCategory === 'all' || p.category === state.activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    renderProducts(state.filteredProducts);
};

window.filterByCategory = (cat) => {
    state.activeCategory = cat;
    // Update active UI button
    const btns = dom.filterGroup.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === cat);
    });
    applyFilters();
    // Scroll to products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
};

// 5. EVENT HANDLERS

const setupEventListeners = () => {
    // Search Event
    dom.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        applyFilters();
    });

    // Filter Button Clicks (Delegation)
    dom.filterGroup.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            filterByCategory(e.target.dataset.category);
        }
    });

    // Modal Close
    document.getElementById('close-modal').onclick = closeModal;
    window.onclick = (e) => { if(e.target === dom.modal) closeModal(); };

    // Mobile Menu Button (Toggle - Simplistic for template)
    document.querySelector('.mobile-menu-btn').onclick = () => {
        alert("Mobile menu clicked. In a production build, this would trigger a side drawer.");
    };

    // Header Scroll Effect
    window.onscroll = () => {
        if (window.scrollY > 50) {
            dom.header.classList.add('scrolled');
        } else {
            dom.header.classList.remove('scrolled');
        }
    };

    // Card Clicks (Open Modal)
    dom.productList.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (card) {
            openDetail(card.dataset.id);
        }
    });
};

// 6. MODAL & DETAILS (The Core Feature)

const openDetail = (id) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // Fill Modal Data
    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-brand').textContent = product.brand;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-price').textContent = product.price;
    document.getElementById('modal-desc').textContent = product.description;

    // Render Features
    const featuresList = document.getElementById('modal-features');
    if (featuresList) {
        featuresList.innerHTML = product.features.map(f => `
            <li style="display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="check-circle" style="width: 14px; color: var(--accent-color);"></i>
                ${f}
            </li>`).join('');
    }

    // WhatsApp Message Encoding
    const waNumber = "919123456789"; // Business WhatsApp Number
    const msg = encodeURIComponent(`Hi! I'm interested in the ${product.name} (${product.price}). Please share more details.`);
    document.getElementById('modal-whatsapp').href = `https://wa.me/${waNumber}?text=${msg}`;

    // Show Modal
    dom.modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scroll
    
    // Re-trigger Lucide for the modal buttons
    lucide.createIcons();
};

const closeModal = () => {
    dom.modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

// 7. THEME TOGGLE (Persistent)

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    }

    dom.themeToggle.addEventListener('click', () => {
        state.isDarkMode = !state.isDarkMode;
        setTheme(state.isDarkMode);
    });
};

const setTheme = (isDark) => {
    state.isDarkMode = isDark;
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update Icon
    const icon = dom.themeToggle.querySelector('i');
    icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    lucide.createIcons();
};

// Start the App
document.addEventListener('DOMContentLoaded', init);

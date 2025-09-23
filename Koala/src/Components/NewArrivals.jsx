import { useState, useRef } from 'react';

const ProductShowcase = () => {
    const [activeCategory, setActiveCategory] = useState('featured');
    const [selectedColors, setSelectedColors] = useState({});
    const scrollRef = useRef(null);

    const categories = [
        { id: 'featured', name: 'Featured' },
        { id: 'living-room', name: 'Living Room' },
        { id: 'bedroom', name: 'Bedroom' }
    ];

    const products = {
        featured: [
            {
                id: 1,
                title: "Koala Sofa Bed [4th Gen]",
                description: "2.5-Seater, 3 Sizes",
                price: "From $1,790",
                rating: 4.8,
                reviews: 2009,
                badge: { text: "Upgraded", type: "upgraded" },
                colors: [
                    { color: "#6b7c32", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_D_10.png?v=1756264114&width=1660" },
                    { color: "#9e9e9e", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_D_3.png?v=1756264115&width=1660" },
                    { color: "#8d6e63", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_D_5.png?v=1756264114&width=1660" },
                    { color: "#2e4016", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_D_6.png?v=1756264114&width=1660" },
                    { color: "#f5f5dc", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_D_11.png?v=1756264114&width=1660" }
                ]
            },
            {
                id: 2,
                title: "Koala Sofa Bed Ottoman [4th Gen]",
                description: "Perfect companion piece",
                price: "$590",
                rating: 4.2,
                reviews: 156,
                badge: { text: "New", type: "new" },
                colors: [
                    { color: "#6b7c32", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_O_5.png?v=1756710280&width=1660" },
                    { color: "#9e9e9e", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_O_1.png?v=1756710284&width=1660" },
                    { color: "#8d6e63", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_O_3.png?v=1756710284&width=1660" },
                    { color: "#2e4016", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_O_4.png?v=1756710283&width=1660" },
                    { color: "#f5f5dc", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_O_6.png?v=1756710280&width=1660" }
                ]
            },
            {
                id: 3,
                title: "Koala Pillow [2nd Gen]",
                description: "Advanced cooling technology",
                price: "From $155",
                rating: 4.6,
                reviews: 5866,
                badge: { text: "New", type: "new" },
                specialBadge: { text: "2.7°C cooler*", type: "cooler" },
                colors: [
                    { color: "#ffffff", image: "https://au.koala.com/cdn/shop/files/Pillow2G_Carousel_1_64008cb3-2466-4fe3-87a0-f93c51fc3b2c.jpg?v=1751870575&width=1920" }
                ]
            },
            {
                id: 4,
                title: "Byron Sofa Bed [3rd Gen]",
                description: "3.5-Seater, 1 Size",
                price: "From $2,350",
                rating: 4.8,
                reviews: 93,
                badge: { text: "Upgraded", type: "upgraded" },
                colors: [
                    { color: "#ff7043", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_8.png?v=1739505456&width=1660" },
                    { color: "#2e4016", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_1.jpg?v=1739505454&width=1660" },
                    { color: "#37474f", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_6.jpg?v=1739505454&width=1660" },
                    { color: "#d7ccc8", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_3.jpg?v=1739505454&width=1660" },
                    { color: "#9e9e9e", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_8.png?v=1739505456&width=1660" },
                    { color: "#f5f5dc", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_9.png?v=1739505456&width=1660" }
                ]
            },
            {
                id: 5,
                title: "Byron Sofa over [2nd Gen]",
                description: "Premium comfort, 2 Sizes",
                price: "From $1,000",
                rating: 4.9,
                reviews: 67,
                badge: { text: "new", type: "new" },
                discount: "10% Off",
                colors: [
                    { color: "#ff7043", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Ottoman_Covers_BlushSunset_2.jpg?v=1739509765" },
                    { color: "#2e4016", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_2.jpg?v=1739505454&width=1660" },
                    { color: "#37474f", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=320&h=240&fit=crop&crop=center" },
                    { color: "#d7ccc8", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=320&h=240&fit=crop&crop=center" },
                    { color: "#9e9e9e", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=320&h=240&fit=crop&crop=center" }
                ]
            }
        ],
        'living-room': [
            {
                id: 6,
                title: "Byron Sofa Bed [3rd Gen]",
                description: "3.5-Seater, 1 Size",
                price: "From $2,350",
                rating: 4.8,
                reviews: 93,
                badge: { text: "Upgraded", type: "upgraded" },
                colors: [
                    { color: "#ff7043", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_8.png?v=1739505456&width=1660" },
                    { color: "#2e4016", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_1.jpg?v=1739505454&width=1660" },
                    { color: "#37474f", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_6.jpg?v=1739505454&width=1660" },
                    { color: "#d7ccc8", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_3.jpg?v=1739505454&width=1660" },
                    { color: "#9e9e9e", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_8.png?v=1739505456&width=1660" },
                    { color: "#f5f5dc", image: "https://au.koala.com/cdn/shop/files/ByronSB_3rdG_Blush_Sunset_9.png?v=1739505456&width=1660" }
                ]

            },
            {
                id: 7,
                title: "Koala Sofa Bed Ottoman [4th Gen]",
                description: "Perfect companion piece",
                price: "$590",
                rating: 4.2,
                reviews: 156,
                badge: { text: "New", type: "new" },
                colors: [
                    { color: "#6b7c32", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_O_5.png?v=1756710280&width=1660" },
                    { color: "#9e9e9e", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_O_1.png?v=1756710284&width=1660" },
                    { color: "#8d6e63", image: "	https://au.koala.com/cdn/shop/files/KSB_4G_OB_O_3.png?v=1756710284&width=1660" },
                    { color: "#2e4016", image: "https://au.koala.com/cdn/shop/files/KSB_4G_OB_O_4.png?v=1756710283&width=1660" },
                    { color: "#f5f5dc", image: "	https://au.koala.com/cdn/shop/files/KSB_4G_OB_O_6.png?v=1756710280&width=1660" }
                ]
            }
        ],
        bedroom: [
            {
                id: 8,
                title: "Koala Pillow [2nd Gen]",
                description: "Advanced cooling technology",
                price: "From $155",
                rating: 4.6,
                reviews: 5866,
                badge: { text: "New", type: "new" },
                specialBadge: { text: "2.7°C cooler*", type: "cooler" },
                colors: [
                    { color: "#ffffff", image: "https://au.koala.com/cdn/shop/files/Pillow2G_Carousel_1_64008cb3-2466-4fe3-87a0-f93c51fc3b2c.jpg?v=1751870575&width=1920" }
                ]
            }
        ]
    };

    const scrollProducts = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 344; // card width + gap
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleColorSelect = (productId, colorIndex) => {
        setSelectedColors(prev => ({
            ...prev,
            [productId]: colorIndex
        }));
    };

    const getSelectedColorIndex = (productId) => {
        return selectedColors[productId] || 0;
    };

    const getCurrentImage = (product) => {
        const selectedIndex = getSelectedColorIndex(product.id);
        return product.colors[selectedIndex]?.image || product.colors[0]?.image;
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <svg key="half" className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="half-fill">
                            <stop offset="50%" stopColor="#fbbf24" />
                            <stop offset="50%" stopColor="#e5e7eb" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#half-fill)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            );
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <svg key={`empty-${i}`} className="w-4 h-4 fill-gray-200" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            );
        }

        return stars;
    };

    const getBadgeClasses = (type) => {
        const baseClasses = "absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide";
        switch (type) {
            case 'upgraded':
                return `${baseClasses} bg-lime-300 text-green-900`;
            case 'new':
                return `${baseClasses} bg-orange-500 text-white`;
            case 'cooler':
                return `${baseClasses} bg-blue-500 text-white`;
            default:
                return `${baseClasses} bg-gray-500 text-white`;
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-4xl font-bold text-gray-900 tracking-tight">New arrivals</h2>
                <button className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-200">
                    See All
                </button>
            </div>

            {/* Category Tabs */}
            <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-3 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${activeCategory === category.id
                            ? 'bg-green-800 text-white shadow-lg'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Products Container */}
            <div className="relative">
                {/* Scroll Buttons */}
                <button
                    onClick={() => scrollProducts('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:scale-105 transition-all duration-200"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={() => scrollProducts('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:scale-105 transition-all duration-200"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Products Grid */}
                <div
                    ref={scrollRef}
                    className="flex gap-3 overflow-x-auto scrollbar-hide "
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products[activeCategory]?.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                        >
                            {/* Product Image */}
                            <div className="relative h-50 overflow-hidden bg-gray-50">
                                <img
                                    src={getCurrentImage(product)}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {/* Badge */}
                                {product.badge && (
                                    <div className={getBadgeClasses(product.badge.type)}>
                                        {product.badge.text}
                                    </div>
                                )}

                                {/* Special Badge */}
                                {product.specialBadge && (
                                    <div className={`${getBadgeClasses(product.specialBadge.type)} top-12`}>
                                        {product.specialBadge.text}
                                    </div>
                                )}

                                {/* Discount Banner */}
                                {product.discount && (
                                    <div className="absolute bottom-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                                        {product.discount}
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex gap-1">
                                        {renderStars(product.rating)}
                                    </div>
                                    <span className="text-sm text-gray-600 font-medium">
                                        {product.rating} ({product.reviews.toLocaleString()})
                                    </span>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-lg font-sans text-gray-900 mb-2 line-clamp-2">
                                    {product.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-2">
                                    {product.description}
                                </p>

                                {/* Price */}
                                <div className="text-xl font-sans font-bold text-gray-900 mb-4">
                                    {product.price}
                                </div>

                                {/* Color Swatches */}
                                <div className="flex gap-2 flex-wrap">
                                    {product.colors.map((colorObj, index) => {
                                        const isSelected = getSelectedColorIndex(product.id) === index;
                                        return (
                                            <button
                                                key={index}
                                                onClick={() => handleColorSelect(product.id, index)}
                                                className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-all duration-200 hover:scale-110 ${isSelected ? 'border-gray-800 ring-2 ring-gray-300' : 'border-transparent hover:border-gray-400'
                                                    }`}
                                                style={{ backgroundColor: colorObj.color }}
                                                aria-label={`Select color ${index + 1}`}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
};

export default ProductShowcase;
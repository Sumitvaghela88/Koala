import React, { useEffect, useState } from "react";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("API Response:", data); // For debugging
        
        // Handle different possible API response structures
        if (data && data.Product && Array.isArray(data.Product)) {
          // If the API returns the exact structure from your JSON
          if (data.Product[0] && data.Product[0].Featured) {
            setProducts(data.Product[0].Featured);
          }
        } else if (data && Array.isArray(data)) {
          // If the API returns a flat array of products
          setProducts(data);
        } else if (data && data.Featured && Array.isArray(data.Featured)) {
          // If the API returns just the Featured array
          setProducts(data.Featured);
        } else {
          console.error("Unexpected API response structure:", data);
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        // Optional: Set some default products or show error state
      });
  }, []);

  const getBadgeColor = (badge) => {
    const normalizedBadge = badge?.trim().toLowerCase() || '';
    
    switch (normalizedBadge) {
      case 'most advanced':
        return 'bg-slate-700';
      case 'most awarded':
        return 'bg-slate-600';
      case 'most luxurious':
        return 'bg-yellow-600';
      case 'upgraded':
        return 'bg-green-600';
      case 'most premium':
        return 'bg-purple-600';
      case 'best seller':
        return 'bg-blue-600';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="px-6 py-10">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Bestsellers</h2>
      </div>

      <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] max-w-[280px] bg-white rounded-lg shadow hover:shadow-lg transition flex-shrink-0"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/280x256?text=Image+Not+Found';
                }}
              />
              {product.badge && (
                <span
                  className={`absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full ${getBadgeColor(product.badge)}`}
                >
                  {product.badge.trim()}
                </span>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-lg  font-sans text-gray-900">{product.name}</h3>
              <p className="text-sm font-sans text-gray-500">{product.sizes}</p>
              <p className="mt-1 text-sm text-yellow-600 font-semibold">
                ⭐ {product.rating} ({product.reviews.toLocaleString()})
              </p>
              <p className="mt-2 text-xl font-bold">
                From ${product.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./Constant"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    console.warn("action emptyCart",)
    return {
        type: EMPTY_CART,
    }
}


// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Star } from 'lucide-react';

// const MattressShowcase = () => {
//   const [selectedSize, setSelectedSize] = useState('Single');
//   const navigate = useNavigate();

//   const sizeOptions = ['Single', 'King Single', 'Double', 'Queen', 'King', 'Super King'];

//   const mattressData = {
//     Single: [
//       {
//         id: 1,
//         name: 'Koala Plus Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most advanced',
//         rating: 4.8,
//         reviews: 949,
//         sizes: '6 Sizes',
//         price: 1050,
//         backgroundColor: 'bg-emerald-100'
//       },
//       {
//         id: 2,
//         name: 'Koala Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most awarded',
//         rating: 4.8,
//         reviews: 2488,
//         sizes: '5 Sizes',
//         price: 890,
//         backgroundColor: 'bg-gray-100'
//       },
//       {
//         id: 3,
//         name: 'Koala SE Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most affordable',
//         rating: 4.8,
//         reviews: 695,
//         sizes: '5 Sizes',
//         price: 650,
//         backgroundColor: 'bg-yellow-100'
//       }
//     ],
//     'King Single': [
//       {
//         id: 4,
//         name: 'Koala Plus Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most advanced',
//         rating: 4.8,
//         reviews: 949,
//         sizes: '6 Sizes',
//         price: 1150,
//         backgroundColor: 'bg-emerald-100'
//       },
//       {
//         id: 5,
//         name: 'Koala Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most awarded',
//         rating: 4.8,
//         reviews: 2488,
//         sizes: '5 Sizes',
//         price: 990,
//         backgroundColor: 'bg-gray-100'
//       }
//     ],
//     Double: [
//       {
//         id: 6,
//         name: 'Koala Plus Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most advanced',
//         rating: 4.8,
//         reviews: 949,
//         sizes: '6 Sizes',
//         price: 1250,
//         backgroundColor: 'bg-emerald-100'
//       },
//       {
//         id: 7,
//         name: 'Koala Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most awarded',
//         rating: 4.8,
//         reviews: 2488,
//         sizes: '5 Sizes',
//         price: 1090,
//         backgroundColor: 'bg-gray-100'
//       },
//       {
//         id: 8,
//         name: 'Koala SE Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most affordable',
//         rating: 4.8,
//         reviews: 695,
//         sizes: '5 Sizes',
//         price: 750,
//         backgroundColor: 'bg-yellow-100'
//       }
//     ],
//     Queen: [
//       {
//         id: 9,
//         name: 'Koala Plus Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most advanced',
//         rating: 4.8,
//         reviews: 949,
//         sizes: '6 Sizes',
//         price: 1350,
//         backgroundColor: 'bg-emerald-100'
//       },
//       {
//         id: 10,
//         name: 'Koala Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most awarded',
//         rating: 4.8,
//         reviews: 2488,
//         sizes: '5 Sizes',
//         price: 1190,
//         backgroundColor: 'bg-gray-100'
//       }
//     ],
//     King: [
//       {
//         id: 11,
//         name: 'Koala Plus Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most advanced',
//         rating: 4.8,
//         reviews: 949,
//         sizes: '6 Sizes',
//         price: 1450,
//         backgroundColor: 'bg-emerald-100'
//       },
//       {
//         id: 12,
//         name: 'Koala SE Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most affordable',
//         rating: 4.8,
//         reviews: 695,
//         sizes: '5 Sizes',
//         price: 850,
//         backgroundColor: 'bg-yellow-100'
//       }
//     ],
//     'Super King': [
//       {
//         id: 13,
//         name: 'Koala Plus Mattress',
//         image: '/api/placeholder/400/300',
//         badge: 'Most advanced',
//         rating: 4.8,
//         reviews: 949,
//         sizes: '6 Sizes',
//         price: 1550,
//         backgroundColor: 'bg-emerald-100'
//       }
//     ]
//   };

//   const handleProductClick = (product) => {
//     // Navigate to product page using React Router
//     navigate(`/product/${product.id}`, { 
//       state: { 
//         product: product, 
//         selectedSize: selectedSize 
//       } 
//     });
//   };

//   const handleSizeFilterClick = (size) => {
//     setSelectedSize(size);
//     // Optional: Update URL to reflect current filter
//     navigate(`/mattresses?size=${encodeURIComponent(size)}`, { replace: true });
//   };

//   const handleTakeQuiz = () => {
//     navigate('/quiz');
//   };

//   const handleCompareMattresses = () => {
//     navigate('/compare');
//   };

//   const renderStars = (rating) => {
//     return Array(5).fill(0).map((_, i) => (
//       <Star
//         key={i}
//         size={14}
//         className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
//       />
//     ));
//   };

//   const getBadgeColor = (badge) => {
//     switch (badge) {
//       case 'Most advanced':
//         return 'bg-slate-700';
//       case 'Most awarded':
//         return 'bg-slate-600';
//       case 'Most affordable':
//         return 'bg-teal-600';
//       default:
//         return 'bg-slate-600';
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-900">
//           Australia's most awarded mattress brand
//         </h1>
//         <Link 
//           to="/mattresses/all" 
//           className="text-gray-600 hover:text-gray-900 underline transition-colors"
//         >
//           See All
//         </Link>
//       </div>

//       {/* Size Filter Buttons */}
//       <div className="flex flex-wrap gap-3 mb-8">
//         {sizeOptions.map((size) => (
//           <button
//             key={size}
//             onClick={() => handleSizeFilterClick(size)}
//             className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
//               selectedSize === size
//                 ? 'bg-slate-700 text-white shadow-md'
//                 : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
//             }`}
//           >
//             {size}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//         {mattressData[selectedSize]?.map((product) => (
//           <div
//             key={product.id}
//             onClick={() => handleProductClick(product)}
//             className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02] overflow-hidden"
//           >
//             {/* Product Image Container */}
//             <div className={`relative ${product.backgroundColor} p-6 h-64`}>
//               {/* Badge */}
//               <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-medium z-10`}>
//                 {product.badge}
//               </div>
              
//               {/* Simulated bedroom scene with mattress */}
//               <div className="w-full h-full flex items-center justify-center">
//                 <div className="relative">
//                   {/* Bed frame */}
//                   <div className="w-32 h-20 bg-amber-600 rounded-lg"></div>
//                   {/* Mattress */}
//                   <div className="absolute -top-3 left-2 w-28 h-16 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center">
//                     <span className="text-xs font-bold text-gray-600">KOALA</span>
//                   </div>
//                   {/* Pillow */}
//                   <div className="absolute -top-5 left-4 w-12 h-8 bg-orange-200 rounded-lg transform -rotate-12"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="p-6">
//               {/* Rating */}
//               <div className="flex items-center gap-2 mb-2">
//                 <div className="flex">{renderStars(product.rating)}</div>
//                 <span className="text-sm font-medium text-gray-900">{product.rating}</span>
//                 <span className="text-sm text-gray-500">({product.reviews})</span>
//               </div>

//               {/* Product Name */}
//               <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
              
//               {/* Size Info */}
//               <p className="text-gray-600 mb-4">{selectedSize}, {product.sizes}</p>
              
//               {/* Price */}
//               <p className="text-2xl font-bold text-gray-900">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Bottom CTA Section */}
//       <div className="bg-white rounded-2xl p-8 shadow-sm">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//           <div className="flex items-center gap-4">
//             <div className="bg-green-100 text-green-800 rounded-full w-12 h-12 flex items-center justify-center font-bold">
//               10%<br/>Off
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900">
//               Not sure which mattress is right for you?
//             </h2>
//           </div>
          
//           <div className="flex gap-4">
//             <button 
//               onClick={handleTakeQuiz}
//               className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
//             >
//               TAKE THE QUIZ
//             </button>
//             <button 
//               onClick={handleCompareMattresses}
//               className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
//             >
//               COMPARE MATTRESSES
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MattressShowcase;
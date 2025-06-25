
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('industrial');

  const categories = [
    { id: 'industrial', name: 'Industrial Chemicals', icon: '🏭' },
    { id: 'specialty', name: 'Specialty Chemicals', icon: '⚗️' },
    { id: 'photography', name: 'Photography & X-Ray', icon: '📸' },
    { id: 'agro', name: 'Agro Chemicals', icon: '🌱' }
  ];

  const products = {
    industrial: [
      { name: 'Mono / Di Ammonium Phosphate', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Tri Sodium Phosphate', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Sodium Tri Poly Phosphate', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Sodium Hexa Meta Phosphate', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Oxalic Acid', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Sulfamic Acid / Descalent', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ],
    specialty: [
      { name: 'Aqua Soft', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Sequestering / Chelating Agents', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Polyelectrolyte Flocculant', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Potassium Bi-Sulfate', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Sodium Thio Sulfate (Pellets)', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Sodium Gluconate / TBHQ', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ],
    photography: [
      { name: 'Sodium Thio Sulfate (Hypo) / Anhy.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Potassium Ferro / Ferri Cyanide', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Sodium Acetate Pure / Anhydrous', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ],
    agro: [
      { name: 'EDTA Acid / EDTA DI / Tetra Sodium', image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Zinc EDTA / Zinc Oxide', image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Ammonium / Sodium Molybdate', image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Chelates of Zn, Cu, Mn, Fe', image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Zinc / Magnesium / Ammon. Sulfate', image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Manganese / Copper Sulfate', image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ]
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Product Range
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are manufacturers & distributors of high-quality chemicals for various industrial applications
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products[activeCategory as keyof typeof products].map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 bg-white p-6 rounded-lg shadow-md inline-block">
            <strong>Enquiries for other than the above items are also solicited.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

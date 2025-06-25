
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
      { name: 'Mono / Di Ammonium Phosphate', image: '/lovable-uploads/eb4248ec-ad2c-4528-9ccf-ac087c85c1f5.png' },
      { name: 'Tri Sodium Phosphate', image: '/lovable-uploads/eb4248ec-ad2c-4528-9ccf-ac087c85c1f5.png' },
      { name: 'Sodium Tri Poly Phosphate', image: '/lovable-uploads/eb4248ec-ad2c-4528-9ccf-ac087c85c1f5.png' },
      { name: 'Sodium Hexa Meta Phosphate', image: '/lovable-uploads/eb4248ec-ad2c-4528-9ccf-ac087c85c1f5.png' },
      { name: 'Oxalic Acid', image: '/lovable-uploads/eb4248ec-ad2c-4528-9ccf-ac087c85c1f5.png' },
      { name: 'Sulfamic Acid / Descalent', image: '/lovable-uploads/eb4248ec-ad2c-4528-9ccf-ac087c85c1f5.png' }
    ],
    specialty: [
      { name: 'Aqua Soft', image: '/lovable-uploads/0c272eae-4e79-4346-a2e8-4d8b11d8c822.png' },
      { name: 'Sequestering / Chelating Agents', image: '/lovable-uploads/0c272eae-4e79-4346-a2e8-4d8b11d8c822.png' },
      { name: 'Polyelectrolyte Flocculant', image: '/lovable-uploads/0c272eae-4e79-4346-a2e8-4d8b11d8c822.png' },
      { name: 'Potassium Bi-Sulfate', image: '/lovable-uploads/0c272eae-4e79-4346-a2e8-4d8b11d8c822.png' },
      { name: 'Sodium Thio Sulfate (Pellets)', image: '/lovable-uploads/0c272eae-4e79-4346-a2e8-4d8b11d8c822.png' },
      { name: 'Sodium Gluconate / TBHQ', image: '/lovable-uploads/0c272eae-4e79-4346-a2e8-4d8b11d8c822.png' }
    ],
    photography: [
      { name: 'Sodium Thio Sulfate (Hypo) / Anhy.', image: '/lovable-uploads/21bbfedf-7e2e-4eee-951a-d178e008659c.png' },
      { name: 'Potassium Ferro / Ferri Cyanide', image: '/lovable-uploads/21bbfedf-7e2e-4eee-951a-d178e008659c.png' },
      { name: 'Sodium Acetate Pure / Anhydrous', image: '/lovable-uploads/21bbfedf-7e2e-4eee-951a-d178e008659c.png' }
    ],
    agro: [
      { name: 'EDTA Acid / EDTA DI / Tetra Sodium', image: '/lovable-uploads/7ab10c24-197a-4b96-ba9a-84960f079317.png' },
      { name: 'Zinc EDTA / Zinc Oxide', image: '/lovable-uploads/7ab10c24-197a-4b96-ba9a-84960f079317.png' },
      { name: 'Ammonium / Sodium Molybdate', image: '/lovable-uploads/7ab10c24-197a-4b96-ba9a-84960f079317.png' },
      { name: 'Chelates of Zn, Cu, Mn, Fe', image: '/lovable-uploads/7ab10c24-197a-4b96-ba9a-84960f079317.png' },
      { name: 'Zinc / Magnesium / Ammon. Sulfate', image: '/lovable-uploads/7ab10c24-197a-4b96-ba9a-84960f079317.png' },
      { name: 'Manganese / Copper Sulfate', image: '/lovable-uploads/7ab10c24-197a-4b96-ba9a-84960f079317.png' }
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


import React from 'react';

const ProductsSection = () => {
  const categories = [
    {
      id: 'industrial',
      name: 'Industrial Chemicals',
      icon: '🏭',
      image: '/lovable-uploads/eb4248ec-ad2c-4528-9ccf-ac087c85c1f5.png',
      description: 'High-quality industrial chemicals for manufacturing and processing applications',
      products: [
        'Mono / Di Ammonium Phosphate',
        'Tri Sodium Phosphate',
        'Sodium Tri Poly Phosphate',
        'Sodium Hexa Meta Phosphate',
        'Oxalic Acid',
        'Sulfamic Acid / Descalent'
      ]
    },
    {
      id: 'specialty',
      name: 'Specialty Chemicals',
      icon: '⚗️',
      image: '/lovable-uploads/0c272eae-4e79-4346-a2e8-4d8b11d8c822.png',
      description: 'Specialized chemical solutions for unique industrial requirements',
      products: [
        'Aqua Soft',
        'Sequestering / Chelating Agents',
        'Polyelectrolyte Flocculant',
        'Potassium Bi-Sulfate',
        'Sodium Thio Sulfate (Pellets)',
        'Sodium Gluconate / TBHQ'
      ]
    },
    {
      id: 'photography',
      name: 'Photography & X-Ray Chemicals',
      icon: '📸',
      image: '/lovable-uploads/21bbfedf-7e2e-4eee-951a-d178e008659c.png',
      description: 'Professional-grade chemicals for photography and medical imaging',
      products: [
        'Sodium Thio Sulfate (Hypo) / Anhy.',
        'Potassium Ferro / Ferri Cyanide',
        'Sodium Acetate Pure / Anhydrous'
      ]
    },
    {
      id: 'agro',
      name: 'Agro Chemicals',
      icon: '🌱',
      image: '/lovable-uploads/7ab10c24-197a-4b96-ba9a-84960f079317.png',
      description: 'Agricultural chemicals and nutrients for enhanced crop productivity',
      products: [
        'EDTA Acid / EDTA DI / Tetra Sodium',
        'Zinc EDTA / Zinc Oxide',
        'Ammonium / Sodium Molybdate',
        'Chelates of Zn, Cu, Mn, Fe',
        'Zinc / Magnesium / Ammon. Sulfate',
        'Manganese / Copper Sulfate'
      ]
    }
  ];

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

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Products:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.products.slice(0, 4).map((product, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {product}
                      </li>
                    ))}
                    {category.products.length > 4 && (
                      <li className="text-blue-600 font-medium">
                        +{category.products.length - 4} more products
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Net WT.: 25 KG
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
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

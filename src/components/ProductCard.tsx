
import React from 'react';

interface ProductCardProps {
  name: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          For Industrial Use Only
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {name}
        </h3>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            Net WT.: 25 KG
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
Enquire Now
</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

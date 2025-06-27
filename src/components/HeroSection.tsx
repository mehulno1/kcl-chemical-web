
import React from 'react';

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/specialty-chemicals-bg.jpg')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Trusted Name in Industrial & Specialty Chemicals
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Supplying quality chemicals across India for over 30 years
        </p>
        
        <button
          onClick={scrollToProducts}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105"
        >
          Explore Products
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

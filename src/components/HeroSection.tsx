
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
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/b80749a9-45b1-4142-8ce2-6da05cf1832f.png" 
            alt="KCL Chemicals Logo" 
            className="h-32 w-auto mx-auto mb-6"
          />
        </div>
        
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

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Kumar Chemical Industries
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Company Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In service to the industry and trade since more than last four decades, Kumar Chemical Industries is a rapidly growing entity with interests in Chemicals, Solvents and Acids for various applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kumar chemical industries is proud to be a trusted business partner of customers, offering excellent technical support and best supply chain management solutions for domestic and overseas trade. Today, organizations choose us for our integrity, transparency, our observance for high standards and our commitment to customer value.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-20">Our Specializations</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We offer wide range of Specialty chemicals, including Water Treatment Chemicals, Aquaculture Chemicals, Agro Chemicals, Industrial Chemicals, Plant Maintenance and Treatment Chemicals, Photography Chemicals, Food Chemicals, Pharmaceutical Raw Materials and various other Chemicals.
              </p>
            
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">30+</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Years Experience</h4>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-green-600">100+</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Products</h4>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-600">500+</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Satisfied Clients</h4>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-600">15+</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">States Covered</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

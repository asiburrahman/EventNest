import React from 'react';

const TrustedCompanies = () => {
  const logos = [
    { name: 'PennState', src: '/logos/PennState.png' },
    { name: 'prgrammigher', src: '/logos/prgrammighero.png' },
    { name: 'prhero2', src: '/logos/prhero2.png' },
    { name: 'sony', src: '/logos/sony.png' },
    { name: 'zoom', src: '/logos/zoom.png' },
    { name: 'nike', src: '/logos/nike.png' },
    
    
    
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Trusted by thousands of top organizations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="bg-base-100 p-4 rounded-xl shadow-sm hover:shadow-lg transition duration-300 ease-in-out">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;

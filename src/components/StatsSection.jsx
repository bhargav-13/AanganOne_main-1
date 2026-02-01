import React from 'react';

function StatsSection() {
  return (
    <>
    <section className="section-padding">
      <div className="container-padding">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-6 py-1 rounded-full text-lg font-normal" style={{ border: '1px solid #E5E5F0', color: '#77787C' }}>
            <img src="/images/mingcute_schedule-line.png" className="h-6 w-6 mr-2" alt="schedule icon" />
            Designed exclusively for RWAs
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-semibold mb-4" style={{ color: '#473F52' }}>
          One of the powerful community<br />management ERPs
        </h2>

        {/* Subtitle */}
        <p className="text-center text-lg md:text-xl max-w-5xl mx-auto mb-16" style={{ color: '#77787C' }}>
          A unified system to handle accounting, support requests, facilities, security, and resident communication seamlessly.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center aspect-square flex flex-col justify-center">
            <h3 className="text-4xl font-normal mb-1" style={{ color: '#007bff' }}>1000+</h3>
            <p className="text-2xl font-medium mb-4" style={{ color: '#473F52' }}>Annual entries authenticated</p>
            <p className="text-base mx-auto" style={{ color: '#77787C', maxWidth: '190px' }}>Ensuring community safety with accurate and dependable records</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center aspect-square flex flex-col justify-center">
            <h3 className="text-4xl font-normal mb-1" style={{ color: '#007bff' }}>10k+</h3>
            <p className="text-2xl font-medium mb-4" style={{ color: '#473F52' }}>Resident requests closed every year</p>
            <p className="text-base mx-auto" style={{ color: '#77787C', maxWidth: '190px' }}>Delivered on time through defined SLAs and smart workflows</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center aspect-square flex flex-col justify-center">
            <h3 className="text-4xl font-normal mb-1" style={{ color: '#007bff' }}>10Cr.+</h3>
            <p className="text-2xl font-medium mb-4" style={{ color: '#473F52' }}>Invoices handled annually</p>
            <p className="text-base mx-auto" style={{ color: '#77787C', maxWidth: '190px' }}>Simplifying collections, payments, and financial audits</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center aspect-square flex flex-col justify-center">
            <h3 className="text-4xl font-normal mb-1" style={{ color: '#007bff' }}>25K+</h3>
            <p className="text-2xl font-medium mb-4" style={{ color: '#473F52' }}>Amenity reservations processed yearly</p>
            <p className="text-base mx-auto" style={{ color: '#77787C', maxWidth: '180px' }}>Making shared facilities easy to book and manage</p>
          </div>
        </div>
      </div>
    </section>
    
    {/* Full Width Image Section */}
    <section style={{ padding: 0, backgroundColor: 'transparent' }}>
      <div className="w-full">
        <img 
          src="/images/Hero Section-1.png" 
          alt="Hero Section" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
    </>
  );
}

export default StatsSection;

function ContactAppSection() {
    return (
        <section className="section-padding">
            <div className="container-padding">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-xl md:text-3xl font-normal mb-4" style={{ color: '#77787C' }}>
                        The Aanganone App
                    </h2>
                    <h2 className="text-3xl md:text-5xl font-semibold mb-4" style={{ color: '#473F52' }}>
                        Everything your community needs, connected
                    </h2>
                    <p className="text-lg md:text-md max-w-3xl mx-auto mt-3" style={{ color: '#77787C' }}>
                        A single platform that brings all community operations together.
                    </p>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Mobile App Screenshots */}
                    <div className="flex justify-center items-center lg:justify-start">
                        {/* Square Container with iPhone Images */}
                        <div className="bg-white rounded-3xl pt-4 px-4 pb-1 md:pt-6 md:px-6 md:pb-2 shadow-lg w-full max-w-2xl flex items-end justify-center" style={{ border: '1px solid #77787C80' }}>
                            <div className="grid grid-cols-2 gap-2 w-full items-end justify-items-center">
                                {/* Left iPhone - Community Screen */}
                                <div className="w-full" style={{ marginBottom: '0', lineHeight: '0' }}>
                                    <img
                                        src="/images/iPhone 14 Pro Max.png"
                                        alt="Aanganone Community Screen"
                                        className="w-full h-auto object-contain"
                                        style={{ display: 'block', marginBottom: '0', verticalAlign: 'bottom', lineHeight: '0' }}
                                    />
                                </div>

                                {/* Right iPhone - Marketplace Screen */}
                                <div className="w-full" style={{ marginBottom: '0', lineHeight: '0' }}>
                                    <img
                                        src="/images/iPhone 14 Pro Max_2.png"
                                        alt="Aanganone Marketplace Screen"
                                        className="w-full h-auto object-contain"
                                        style={{ display: 'block', marginBottom: '0', verticalAlign: 'bottom', lineHeight: '0' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Descriptive Text */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-[42px] font-medium text-[#473F52] font-sf-pro">
                            One Platform for Everyday Community Needs
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed" style={{ color: '#77787C' }}>
                            Manage accounting, maintenance requests, security operations, amenity bookings, and resident communication from one place. No more switching between multiple tools or dealing with scattered information.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed" style={{ color: '#77787C' }}>
                            With clear workflows and smart automation, routine tasks become faster and more efficient, helping communities run better every day.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactAppSection;

import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <section className="py-24 bg-deep-blue relative">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            The Sahajink Advantage
          </h2>
          <h3 className="text-4xl font-black text-white">
            Why Industry Leaders Trust Us
          </h3>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="glass-card p-8 rounded-xl text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">
              speed
            </span>
            <h5 className="text-white font-bold mb-2">Rapid Prototyping</h5>
            <p className="text-sm text-accent-silver/60">
              From concept to physical sample in under 48 hours.
            </p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">
              verified_user
            </span>
            <h5 className="text-white font-bold mb-2">100% Quality Assurance</h5>
            <p className="text-sm text-accent-silver/60">
              AI-powered visual inspection for zero defect shipping.
            </p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">
              support_agent
            </span>
            <h5 className="text-white font-bold mb-2">24/7 Dedicated Support</h5>
            <p className="text-sm text-accent-silver/60">
              Direct access to our technical engineering team.
            </p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">
              globe_uk
            </span>
            <h5 className="text-white font-bold mb-2">Global Logistics</h5>
            <p className="text-sm text-accent-silver/60">
              Seamless delivery to over 45 countries worldwide.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;

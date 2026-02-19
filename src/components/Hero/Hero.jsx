import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.1),transparent_70%)]"></div>
 
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          data-alt="Abstract dark luxury texture with metallic flow"
          style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwlsJBE2KnGaS8VpOUm6IIhD3XpRkHRaVhTxd0su0Ia_P824HCTgkaiD4EF-TYBb80ReQikJSnUXddkUzi_VDrCJE4qSMZPNmqtrbtaxApnjU4aHQ86S7j6WF7ZYgWVcz0-FjdBLCKnZhTuPVxK5RpoapNwqsTEfqTN9XK9M-bPwFR3PR_CGx6VMnrVbWeitacm-oC_fKCwWHco81ChBYCF6hSw4mgwUXPzSvpsiZBMPPSbA2dCb0oZoZMYrsxe4TXsNtNvCaAZ5no')",
             backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
            <span className="size-2 bg-primary rounded-full animate-pulse"></span>
            Global Standards in High-End Printing
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tight mb-6">
            Precision. Performance.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Print Excellence.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-accent-silver/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Delivering bespoke high-quality label printing solutions for
            world-class global brands with zero-compromise precision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-primary text-background-dark font-black rounded-lg hover:scale-105 transition-transform text-lg">
              Explore Solutions
            </button>
            <button className="w-full sm:w-auto px-10 py-4 glass-card text-white font-bold rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-lg">
              Our Portfolio
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <span className="material-symbols-outlined text-white">expand_more</span>
        </div>
      </section>
    </>
  );
};

export default Hero;

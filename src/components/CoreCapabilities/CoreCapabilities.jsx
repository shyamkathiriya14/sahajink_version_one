import React from 'react'

const CoreCapabilities = () => {
  return (
    <>
       <section className="py-24 relative overflow-hidden" id="services">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
        Core Capabilities
      </h2>
      <h3 className="text-4xl md:text-5xl font-black text-white">
        Precision Printing Services
      </h3>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* Service 1 */}
      <div className="glass-card p-10 group hover:border-primary/50 transition-all">
        <div className="size-14 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-primary group-hover:text-background-dark transition-all">
          <span className="material-symbols-outlined text-3xl">layers</span>
        </div>
        <h4 className="text-2xl font-bold text-white mb-4">Flexo Printing</h4>
        <p className="text-accent-silver/60 mb-6 leading-relaxed">
          High-volume rotary printing perfect for complex packaging and branding labels with extreme consistency.
        </p>
        <a className="text-primary font-bold text-sm inline-flex items-center gap-2 group/link" href="#">
          Learn More
          <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>

      {/* Service 2 */}
      <div className="glass-card p-10 group hover:border-primary/50 transition-all">
        <div className="size-14 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-primary group-hover:text-background-dark transition-all">
          <span className="material-symbols-outlined text-3xl">flare</span>
        </div>
        <h4 className="text-2xl font-bold text-white mb-4">UV Labeling</h4>
        <p className="text-accent-silver/60 mb-6 leading-relaxed">
          Instant curing process providing durable, high-gloss, and weather-resistant finishes for premium products.
        </p>
        <a className="text-primary font-bold text-sm inline-flex items-center gap-2 group/link" href="#">
          Learn More
          <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>

      {/* Service 3 */}
      <div className="glass-card p-10 group hover:border-primary/50 transition-all">
        <div className="size-14 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-primary group-hover:text-background-dark transition-all">
          <span className="material-symbols-outlined text-3xl">fingerprint</span>
        </div>
        <h4 className="text-2xl font-bold text-white mb-4">Digital Solutions</h4>
        <p className="text-accent-silver/60 mb-6 leading-relaxed">
          Short-run precision with variable data printing capabilities for personalized and batch-coded requirements.
        </p>
        <a className="text-primary font-bold text-sm inline-flex items-center gap-2 group/link" href="#">
          Learn More
          <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>

      {/* Service 4 */}
      <div className="glass-card p-10 group hover:border-primary/50 transition-all">
        <div className="size-14 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-primary group-hover:text-background-dark transition-all">
          <span className="material-symbols-outlined text-3xl">barcode_scanner</span>
        </div>
        <h4 className="text-2xl font-bold text-white mb-4">Barcode & RFID</h4>
        <p className="text-accent-silver/60 mb-6 leading-relaxed">
          Advanced tracking and logistics labels designed for 100% scan accuracy in demanding environments.
        </p>
        <a className="text-primary font-bold text-sm inline-flex items-center gap-2 group/link" href="#">
          Learn More
          <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>

      {/* Service 5 (Wide Card) */}
      <div className="glass-card p-10 group hover:border-primary/50 transition-all md:col-span-2">
        <div className="flex flex-col md:flex-row md:items-center gap-10">

          <div className="flex-1">
            <div className="size-14 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-primary group-hover:text-background-dark transition-all">
              <span className="material-symbols-outlined text-3xl">auto_fix_high</span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Custom Embellishments</h4>
            <p className="text-accent-silver/60 mb-6 leading-relaxed">
              Foil stamping, embossing, and custom textures that elevate your product's shelf presence to a luxury tier.
            </p>
            <a className="text-primary font-bold text-sm inline-flex items-center gap-2 group/link" href="#">
              Learn More
              <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="flex-1 rounded-xl overflow-hidden border border-white/10">
            <img
              alt="Metallic label finish"
              className="w-full h-48 md:h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtOhwrGKgCcQJ-0n0qQlIdzJDvcY1Q7KCI3YVGxH4S0vklRodW97FTGRlr12VHNc8DJgps6tIXEISddO59QlfXNdl9gB5M3p-wnP9VFHbnEFDlRFlFBbr6OOYmxvoYLDArXNioUQU5zQGj-KQwT6Eeh2uSsaBAGK4x1frattsZ5bqLYFqJPseZfam4rfoJtla2NqyVvHbM3W0A5ZrNrkzNBWXpzXtsw-f0tJHjV2LG4ekiRzCKP8haB5YXXutrj5AHe7ok-LA_8HMU"
            />
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

    </>
  )
}

export default CoreCapabilities
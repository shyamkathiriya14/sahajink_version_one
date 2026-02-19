import React from 'react'

const AboutUs = () => {
  return (
    <>
       <section className="py-24 bg-background-dark" id="about">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Image Section */}
      <div className="relative">
        <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
          <img
            alt="Quality control inspection"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCgIppNy0r6sucOkiXLg6SJyg_pcQ0PEJHczBJFRDywC9P5gbjHCdQ2J2JTIF1QDx6KVnU9ej8jkDzzVl9YOM49jE3rEax-HlrV3PDXI5RySjZ9RCPMr92jj-qUPJyjZVctt5ZFdobIkzn_m1uUyXyCHXZX3KaMzV8plCBaelz0ybII0GCY_hh1Tiuk4WY-ly6Xw1CDqOmrawyV1GbAyeYwkJ7NFnY-X0sV_EOgxPUAfdCp1Y8GQvIYlMsAKqK5HHJ15cpLefvduCo"
          />
        </div>

        {/* Floating Card */}
        <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-xl border border-primary/20 hidden md:block">
          <div className="text-4xl font-black text-primary mb-1">25+</div>
          <div className="text-sm font-bold uppercase tracking-widest text-white">
            Years of Mastery
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <h2 className="text-primary font-bold uppercase tracking-widest text-sm">
          The Sahajink Legacy
        </h2>

        <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
          Mastering the Art of the Perfect Impression
        </h3>

        <p className="text-lg leading-relaxed text-accent-silver/70">
          At Sahajink, we don't just print labels; we craft identities.
          With a legacy spanning over two decades, our commitment to quality
          and global reach has made us the trusted partner for premium brands worldwide.
        </p>

        <div className="grid grid-cols-2 gap-8 pt-6">
          <div className="space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">
              verified
            </span>
            <h4 className="text-white font-bold">ISO Certified</h4>
            <p className="text-sm text-accent-silver/60">
              Strict adherence to international quality standards.
            </p>
          </div>

          <div className="space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">
              eco
            </span>
            <h4 className="text-white font-bold">Eco-Inks</h4>
            <p className="text-sm text-accent-silver/60">
              Sustainable solutions for a greener future.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  )
}

export default AboutUs
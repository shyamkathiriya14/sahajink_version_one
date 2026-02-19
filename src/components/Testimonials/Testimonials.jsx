import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
              Client Feedback
            </h2>
            <h3 className="text-4xl font-black text-white">
              Words From Our Partners
            </h3>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="glass-card p-10 rounded-2xl relative">
              <span className="material-symbols-outlined text-white/10 text-8xl absolute top-4 right-4">
                format_quote
              </span>

              <p className="text-accent-silver italic mb-8 relative z-10">
                "Sahajink's attention to detail on our premium spirit labels was
                unparalleled. The foil precision exceeded our Swiss standards."
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="size-12 rounded-full bg-slate-700 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoD26SnM-jzO9YILLyzbtOBBpwT9ScOMTex4xLv9ApfjRcRZ9kSfe7CSQ6CwOqjxNVHZ0f-Jl0tcTbf_el6bNjQVqSwckCEx08WU97B5wislE1i9VabcB425v7dYnhOqhxYugyBzcXK7shN_VJt3-kXi1XD7h6xajK4iMmgf3ikEP-2SdVyWMZD6a1mfocTfs2gNEA0UGfTXBs8-DC40vnZHb8WlEltikWwbyyqRKVpsYHo4zlmCzX5n6Qc4d-7HzU99BCeX-I0uV5')",
                  }}
                ></div>

                <div>
                  <div className="text-white font-bold">Marc-Andre L.</div>
                  <div className="text-xs text-primary font-medium uppercase tracking-widest">
                    Brand Director, Vaud Spirits
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="glass-card p-10 rounded-2xl relative">
              <span className="material-symbols-outlined text-white/10 text-8xl absolute top-4 right-4">
                format_quote
              </span>

              <p className="text-accent-silver italic mb-8 relative z-10">
                "The 0% rejection rate isn't just a marketing slogan; it's a
                reality. We've scaled our logistics with total confidence in
                their reliability."
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="size-12 rounded-full bg-slate-700 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3R_sOqzJM4Fr1AWYYkdm0P128IKDbj1ZhsykLr8cl9DvjoK9QzdXHcfAFm68LV7KEDu0btC-Kzyj_jC9aRCLymohtI9SmKrkbks-tUlzHogkEsexFf9XT_y7R43IAKLN0lKWYTDFzkuqEZq9fUThStTufROp14NnsNU6kwhuyHXT8Sn_m6ayH40JS8pFHMzm1vgZu1lFoT1UapoctnpnjcJrudtFi2I-6DC4Qdw14-3Ewg5kCDZGRmXfZFBN52rU7swaf_Y_dwjbv')",
                  }}
                ></div>

                <div>
                  <div className="text-white font-bold">Sarah Jenkins</div>
                  <div className="text-xs text-primary font-medium uppercase tracking-widest">
                    Ops Lead, HealthCorp Int
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="glass-card p-10 rounded-2xl relative">
              <span className="material-symbols-outlined text-white/10 text-8xl absolute top-4 right-4">
                format_quote
              </span>

              <p className="text-accent-silver italic mb-8 relative z-10">
                "Innovative, fast, and remarkably professional. They transformed
                our beverage line's shelf impact within weeks."
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="size-12 rounded-full bg-slate-700 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4tmk8GcrmjtwU0rID0-pDFETbifgOtO4_PI7esOYV7kNsc9FQVYj2TyQwfJsTK4WsWZtmSYFUZzgymrgHjWmXTsL-LCPiBAXDHpDBBI8MusSFv4aThFSnYM7JvBghfInSjUq5Q2NEwRasZE1AHu-UNUv6VXzYy6glQof1UF5FdPRC2cX9NSO8tMJXysv8QyJK7eN2R-c_qY_z1XBRAS0YbE6WG8Fg9cFNa-6zkLAWShuvdOEBeR13MmiPUQBJXEOPhPipL74hW_fk')",
                  }}
                ></div>

                <div>
                  <div className="text-white font-bold">David Chen</div>
                  <div className="text-xs text-primary font-medium uppercase tracking-widest">
                    VP Design, Aurora FMCG
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

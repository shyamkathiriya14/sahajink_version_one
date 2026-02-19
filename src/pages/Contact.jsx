import React from "react";

const Contact = () => {
  return (
    <>
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Let's Build Something{" "}
              <span className="text-primary italic">Great</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
              Ready to scale your next big venture? Get a premium quote for your
              project and let our team of experts bring your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 bg-card-dark border border-border-dark p-8 md:p-12 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  description
                </span>
                Premium Quote Request
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-background-dark-secondary border border-border-dark focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Company
                    </label>
                    <input
                      className="w-full bg-background-dark-secondary border border-border-dark focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600"
                      placeholder="Your Agency"
                      type="text"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-background-dark-secondary border border-border-dark focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Project Type
                    </label>
                    <select className="w-full bg-background-dark-secondary border border-border-dark focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white outline-none transition-all appearance-none">
                      <option>Select Type</option>
                      <option>Brand Identity</option>
                      <option>UI/UX Design</option>
                      <option>Full-Stack Development</option>
                      <option>Digital Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Budget Range
                    </label>
                    <select className="w-full bg-background-dark-secondary border border-border-dark focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white outline-none transition-all appearance-none">
                      <option>$5k - $10k</option>
                      <option>$10k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Preferred Timeline
                    </label>
                    <select className="w-full bg-background-dark-secondary border border-border-dark focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white outline-none transition-all appearance-none">
                      <option>1-3 Months</option>
                      <option>3-6 Months</option>
                      <option>6+ Months</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Project Brief
                  </label>
                  <textarea
                    className="w-full bg-background-dark-secondary border border-border-dark focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600"
                    placeholder="Tell us about your project goals..."
                    rows="4"
                  ></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Attachments
                  </label>
                  <div className="border-2 border-dashed border-border-dark hover:border-primary/50 transition-colors rounded-xl p-8 flex flex-col items-center justify-center bg-background-dark-secondary/50 group cursor-pointer">
                    <span className="material-symbols-outlined text-4xl text-slate-600 group-hover:text-primary transition-colors mb-2">
                      cloud_upload
                    </span>
                    <p className="text-sm font-medium text-slate-400">
                      Upload Brand Guidelines or RFPs
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      PDF, DOCX, ZIP (Max 20MB)
                    </p>
                  </div>
                </div>
                <button
                  className="w-full bg-primary hover:bg-primary/90 text-background-dark-secondary py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-2"
                  type="submit"
                >
                  Submit Inquiry{" "}
                  <span className="material-symbols-outlined">send</span>
                </button>
                <div className="pt-6 border-t border-border-dark mt-8">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-4">
                    Trusted By Industry Leaders
                  </p>
                  <div className="flex flex-wrap gap-8 opacity-40 grayscale filter">
                    <div className="h-6 w-24 bg-slate-600 rounded"></div>
                    <div className="h-6 w-24 bg-slate-600 rounded"></div>
                    <div className="h-6 w-24 bg-slate-600 rounded"></div>
                    <div className="h-6 w-24 bg-slate-600 rounded"></div>
                  </div>
                </div>
              </form>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <h4 className="text-xl font-bold border-l-4 border-primary pl-4 uppercase tracking-wider">
                  Global Reach
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  <div className="bg-card-dark border border-border-dark p-6 rounded-xl hover:border-primary/30 transition-all group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black text-primary uppercase tracking-widest">
                        Headquarters
                      </span>
                      <span className="material-symbols-outlined text-slate-600 group-hover:text-primary">
                        apartment
                      </span>
                    </div>
                    <h5 className="text-lg font-bold mb-1">
                      San Francisco, USA
                    </h5>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      123 Design District, Ste 400
                      <br />
                      California, 94103
                    </p>
                    <a
                      className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-2"
                      href="tel:+15551234567"
                    >
                      <span className="material-symbols-outlined text-sm">
                        call
                      </span>{" "}
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="bg-card-dark border border-border-dark p-6 rounded-xl hover:border-primary/30 transition-all group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black text-primary uppercase tracking-widest">
                        EMEA Region
                      </span>
                      <span className="material-symbols-outlined text-slate-600 group-hover:text-primary">
                        public
                      </span>
                    </div>
                    <h5 className="text-lg font-bold mb-1">
                      London, United Kingdom
                    </h5>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      88 Canary Wharf Tower
                      <br />
                      London, E14 5AA
                    </p>
                    <a
                      className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-2"
                      href="tel:+442012345678"
                    >
                      <span className="material-symbols-outlined text-sm">
                        call
                      </span>{" "}
                      +44 20 1234 5678
                    </a>
                  </div>
                  <div className="bg-card-dark border border-border-dark p-6 rounded-xl hover:border-primary/30 transition-all group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black text-primary uppercase tracking-widest">
                        MENA Region
                      </span>
                      <span className="material-symbols-outlined text-slate-600 group-hover:text-primary">
                        travel_explore
                      </span>
                    </div>
                    <h5 className="text-lg font-bold mb-1">Dubai, UAE</h5>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      Level 42, Burj Daman Office Towers
                      <br />
                      DIFC, Dubai
                    </p>
                    <a
                      className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-2"
                      href="tel:+97141234567"
                    >
                      <span className="material-symbols-outlined text-sm">
                        call
                      </span>{" "}
                      +971 4 123 4567
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl flex items-center gap-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-tighter">
                    Direct Inquiries
                  </p>
                  <a
                    className="text-xl font-bold hover:underline"
                    href="mailto:info@sahajink.com"
                  >
                    info@sahajink.com
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-border-dark h-[300px] relative grayscale contrast-125">
                <div className="absolute inset-0 bg-background-dark-secondary/40 z-10 pointer-events-none"></div>
                <img
                  alt="Dark styled world map"
                  className="w-full h-full object-cover"
                  data-alt="A dark styled monochromatic world map showing office locations"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_TfyO_WXALaONsvCoKQDoiwfZZKykyR5wo858-Vo12ClUhHKH1yHo80MuKspsUxbh_c_YZQUUKWx7PvZ3lmIm5iNFmLC92LZMu5R7IWEt1P-U-6qAbLesp7xgm8-iiB67vwlprG7cGUZuXhNEpmNq5DtYcOHTWC0tjCtpYtNrUt-JmUAAzwqJLwBU2w3-4MbH5RyyDdhJ4xRTxie7UsaQPn4NiZb-DcZjJJhjAH63lhYZ25U2KO_5ryylrrTbA4IaNjxCJo44wxHR"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-background-dark-secondary p-3 rounded-lg border border-border-dark text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Live HQ Location: San Francisco
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <a
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
        href="https://wa.me/yournumber"
      >
        <svg
          fill="currentColor"
          height="28"
          viewbox="0 0 16 16"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.973L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.607zM7.994 14.52a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
        </svg>
        <span className="absolute right-full mr-4 bg-white text-[#128C7E] px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Chat with us on WhatsApp
        </span>
      </a>
    </>
  );
};

export default Contact;

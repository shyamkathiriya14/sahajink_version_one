import React from "react";

const InfrastructureShowcase = () => {
  return (
    <>
      <section className="py-24 relative" id="infrastructure">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm">
                German-Swiss Precision
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Advanced Shop-Floor Infrastructure
              </h3>
              <p className="text-lg text-accent-silver/70">
                Our facility is equipped with state-of-the-art machinery from
                Gallus and HP Indigo, ensuring that every micron of every label
                is consistent with your brand guidelines.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-white font-medium">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  Fully automated quality inspection systems
                </li>
                <li className="flex items-center gap-4 text-white font-medium">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  Climate-controlled production environment
                </li>
                <li className="flex items-center gap-4 text-white font-medium">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  Zero-rejection rate manufacturing protocols
                </li>
              </ul>
              <div className="precision-line opacity-30"></div>
              <div className="flex gap-12">
                <div>
                  <div className="text-3xl font-black text-white">50K+ SqFt</div>
                  <p className="text-xs uppercase tracking-widest text-primary font-bold">
                    Facility Area
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">12+</div>
                  <p className="text-xs uppercase tracking-widest text-primary font-bold">
                    Production Lines
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                <img
                  alt="Machinery"
                  className="w-full h-full object-cover"
                  data-alt="High-tech industrial printing machine on factory floor"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaWiORXNWfk9rKIKIquwUf64P635UL-b_CACxJdhZmyqUl7t5HCYi1gmI6BTanewdL5jYJ774Un62MXchw13jj04HIoSTMTk2Q5DCwp0OqWAbDGtQ1oOREdnEFA98qlrmiMCxYpjPUAN5eXgj0RBa64-F6omGduhXbAE1Bo2ZrnfYxTrblMv7sPHBacjEewuN7R2TFD8UtZWTfN07IfVuTPzfLQYmviOE4rqFhQHBxSA1gqb5oHT9Mok4wnDxDlsRwoEf3udihM8cg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfrastructureShowcase;

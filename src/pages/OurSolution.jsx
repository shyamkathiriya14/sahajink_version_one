import React from "react";

const OurSolution = () => {
  return (
    <>
      <main>
        <section className="relative h-[70vh] w-full overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-alt="High-tech automated industrial printing facility with machinery"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZfC8h4_5DcZE8_vWtosty4bfZ0Q2OG5ov1J1AsEbJ4lKf4U0Er-Fse7HJlUO_oqm5eBUwx2Ii1F2yiz8HvjIW1IsijBoXG_l6wU8BhcDtV4D56YI_NGGL4dQSsLEPkUKaHJ73nfWH7x2Uq1nlBsVOTlDASjptEzgABGDmdr5S39_YvrdDiIgS4QR2XyUx-ocPZrBe6rvMo2RuQznG5TnXN6X54CFvj8tNcguWjQvPVy8CkKT2JZK16JiksLbg4v3KhbsmCQXvysiQ')",
            }}
          ></div>

          <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
            <span className="mb-4 inline-block rounded border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary w-fit">
              Industrial Printing Solutions
            </span>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Engineering <span className="text-primary">Precision</span> In
              Every Print
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              High-end B2B solutions for Flexo, UV, and Digital printing.
              Delivering unparalleled color consistency and durability for
              global manufacturing leaders.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-lg bg-primary px-8 py-4 text-base font-bold text-background-dark hover:scale-105 transition-transform">
                Explore Technologies
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-bold backdrop-blur-sm hover:bg-white/10 transition-all">
                <span className="material-symbols-outlined">download</span>
                Request Product Catalog
              </button>
            </div>
          </div>
        </section>
        <nav className="sticky top-[73px] z-40 border-b border-white/10 bg-background-dark/95 py-4 shadow-xl">
          <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 overflow-x-auto no-scrollbar">
            <a
              className="whitespace-nowrap text-sm font-bold text-primary flex items-center gap-2"
              href="#flexo"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
              Multi-Color Flexo
            </a>
            <a
              className="whitespace-nowrap text-sm font-medium text-white/50 hover:text-white transition-colors"
              href="#uv"
            >
              UV &amp; LED UV
            </a>
            <a
              className="whitespace-nowrap text-sm font-medium text-white/50 hover:text-white transition-colors"
              href="#digital"
            >
              Digital Label
            </a>
            <a
              className="whitespace-nowrap text-sm font-medium text-white/50 hover:text-white transition-colors"
              href="#coatings"
            >
              Specialty Coatings
            </a>
            <a
              className="whitespace-nowrap text-sm font-medium text-white/50 hover:text-white transition-colors"
              href="#process"
            >
              Our Process
            </a>
          </div>
        </nav>
        <section className="mx-auto max-w-7xl px-6 py-24" id="flexo">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tight">
                  Multi-Color <span className="text-primary">Flexo</span>{" "}
                  Printing
                </h2>
                <p className="text-lg text-white/60">
                  Engineered for high-volume efficiency, our flexographic
                  capabilities provide exceptional color fidelity and speed for
                  large-scale packaging runs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl bg-white/5 p-6 border border-white/10">
                  <span className="material-symbols-outlined text-primary mb-3">
                    speed
                  </span>
                  <h4 className="font-bold">High Throughput</h4>
                  <p className="text-sm text-white/50">
                    Optimized for 300m/min speeds.
                  </p>
                </div>
                <div className="rounded-xl bg-white/5 p-6 border border-white/10">
                  <span className="material-symbols-outlined text-primary mb-3">
                    palette
                  </span>
                  <h4 className="font-bold">12-Color System</h4>
                  <p className="text-sm text-white/50">
                    Full gamut Pantone matching.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-6 py-4 font-bold uppercase tracking-wider text-white/40">
                        Technical Specs
                      </th>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider text-white/40">
                        Capability
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-6 py-4 font-medium">Max Web Width</td>
                      <td className="px-6 py-4 text-white/70">Up to 650mm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Print Repeat</td>
                      <td className="px-6 py-4 text-white/70">
                        250mm - 1200mm
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Substrate Types</td>
                      <td className="px-6 py-4 text-white/70">
                        Paper, PE, PP, BOPP, Foil
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Drying Methods</td>
                      <td className="px-6 py-4 text-white/70">
                        Hot Air / IR Systems
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Close up of a professional flexographic printing cylinder with vibrant ink"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Cyr4E3nV-ad8scPaw5o6dvQlBBFxNvlSqFFnpbDHIB8CpETs8xi-X0JMoX9WQu0c6UXM8nTWF8CNGQLwUFkYFVDI481NB1HrCj4xnLqm23iK0C8CNUn7vGJAKc1hXLmFQYNMT8hmbO-6cb-zDBLQew0mQ24ILjhjQ_HoF3ZslCSCM7Nxqhy_-QdIfSXJE-cULcknjJ10Ipz1V-V54aahbsYHzMtlye2FWxDYS8vGIeQFOfbvukJmIKLu_RPv2CFm5B7cfdHoLPMT"
              />
              <div className="absolute bottom-6 right-6 z-20">
                <div className="rounded-lg bg-background-dark/80 px-4 py-2 text-xs font-bold backdrop-blur-md border border-white/10">
                  FLEXO LINE 04 - CALIBRATED
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white/5 py-24" id="uv">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1 group relative aspect-video overflow-hidden rounded-2xl border border-white/10">
                <img
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  data-alt="UV curing light on a high speed industrial printing press"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaWACkaWBNs9UTdZutfD1MWQY7vk_hzsqVrSl-WE8z_vm31xRplx4_HQJGTHRtLuf1DunPji9_B_5Pwau08qXlztpe9167SDpocPoyHlIUf6TXpK_ir30AcFUD2jEYUgWebGP0kkDlGVNKDGRVFI_vPWTd2r5EZV4_NuCuvq23PaVXjpcS-H9dBHZCm4_kbD0KFVWRqRIKMXlBBbFeu-L8TkFBDA23-sDS4fdwO_gbvE8bX8ymPqAUW6ZrPyY5OWQKZsJk0Jp9s3CU"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-black tracking-tight">
                    UV &amp; <span className="text-primary">LED UV</span>{" "}
                    Printing
                  </h2>
                  <p className="text-lg text-white/60">
                    Instant curing technology that enables printing on
                    non-porous surfaces with extreme durability and vibrant
                    results.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Instant Curing</h4>
                      <p className="text-sm text-white/50">
                        No dry time required, allowing for immediate post-press
                        processing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <span className="material-symbols-outlined">eco</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Eco-Friendly LED</h4>
                      <p className="text-sm text-white/50">
                        Reduced energy consumption by 60% compared to
                        traditional lamp systems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-primary pl-4">
                    <span className="text-2xl font-black">100%</span>
                    <p className="text-xs uppercase tracking-widest text-white/40">
                      Solids Content
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <span className="text-2xl font-black">720 DPI</span>
                    <p className="text-xs uppercase tracking-widest text-white/40">
                      High Res Output
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-24" id="digital">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black tracking-tight">
              Digital <span className="text-primary">Label</span> Systems
            </h2>
            <p className="max-w-2xl text-lg text-white/60">
              Perfect for short-run agility, variable data printing, and rapid
              prototype-to-production cycles without the cost of plates.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  data_object
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Variable Data</h3>
              <p className="text-white/50">
                Sequential numbering, unique QR codes, and personalized imaging
                for every single label in a run.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  timer
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Rapid Turnaround</h3>
              <p className="text-white/50">
                Zero plate setup means jobs can go from design approval to
                shipping in under 24 hours.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  format_paint
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Premium Finishes</h3>
              <p className="text-white/50">
                Digital spot varnish and foil capabilities integrated directly
                into the digital workflow.
              </p>
            </div>
          </div>
        </section>
        <section
          className="bg-background-dark py-24 border-y border-white/5"
          id="process"
        >
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-3xl font-black">
              Industrial Process Workflow
            </h2>
            <div className="relative flex flex-col md:flex-row justify-between gap-8">
              {/* <div className="absolute top-1/2 left-0 right-0 hidden h-0.5 -translate-y-1/2 bg-white/10 md:block"></div> */}
              <div className="relative z-10 flex flex-col items-center text-center md:w-1/4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-black text-background-dark ring-8 ring-background-dark">
                  01
                </div>
                <h4 className="font-bold">Consultation</h4>
                <p className="text-sm text-white/40">
                  Requirement gathering and substrate analysis.
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center md:w-1/4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-black text-background-dark ring-8 ring-background-dark">
                  02
                </div>
                <h4 className="font-bold">Ink Formulation</h4>
                <p className="text-sm text-white/40">
                  Custom color matching in our lab.
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center md:w-1/4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-black text-background-dark ring-8 ring-background-dark">
                  03
                </div>
                <h4 className="font-bold">Production</h4>
                <p className="text-sm text-white/40">
                  Precision printing with real-time QA monitoring.
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center md:w-1/4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-black text-background-dark ring-8 ring-background-dark">
                  04
                </div>
                <h4 className="font-bold">Finishing</h4>
                <p className="text-sm text-white/40">
                  Cutting, curing, and global logistics dispatch.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-10 py-16 text-background-dark">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-black/10 blur-3xl"></div>
            <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="text-4xl font-black tracking-tight">
                  Ready for a Technical Deep-Dive?
                </h2>
                <p className="mt-4 text-lg font-medium opacity-80">
                  Connect with our engineering team to discuss custom substrate
                  compatibility, UV curing specs, or large-volume contract
                  printing.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap justify-center gap-4">
                <button className="rounded-xl bg-background-dark px-8 py-4 text-base font-black text-white hover:scale-105 transition-transform">
                  Request Sample Kit
                </button>
                <button className="rounded-xl border border-background-dark/20 bg-transparent px-8 py-4 text-base font-black hover:bg-background-dark/5 transition-colors">
                  Contact Engineering
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OurSolution;

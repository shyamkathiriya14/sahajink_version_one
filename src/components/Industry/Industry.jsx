import React from 'react'

const Industry = () => {
  return (
    <>
      <section className="py-24 bg-[#050505] border-y border-white/5" id="industries">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div className="max-w-xl">
        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
          Sector Expertise
        </h2>
        <h3 className="text-4xl font-black text-white">
          Serving Global Market Leaders
        </h3>
      </div>

      <div className="flex gap-4">
        <button className="size-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-all">
          <span className="material-symbols-outlined">west</span>
        </button>

        <button className="size-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-all">
          <span className="material-symbols-outlined">east</span>
        </button>
      </div>
    </div>

    {/* Industries Grid */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

      {/* Card 1 */}
      <div className="group cursor-pointer">
        <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative grayscale group-hover:grayscale-0 transition-all">
          <img
            alt="Pharma labels"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR1G0nC5wKGQgfWMvKzIqMfAw0DsO6LVH-KICa4UZ0Xs1ZLhfQJhy200VilNQ8kcf_gi1TIcfq-t41JHkJdYI88qTYHtIjICFu4I0vXkuatC0McTT5qeLSe78s-FXZQ6OZkW-umv2n5V-a-gx9uicDgZv1aYvOu_X9jOPRMg3AIFisgaGbBfwn2dm6Tf5cDxVCf8bZupdBv4Ov6DdCgAg7nTQK5E8t70HJG2cOBKDt0MHpS1Q7xc6S9ShPEqTW0GCpRH8AYCjEmavH"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-80"></div>
          <div className="absolute bottom-4 left-4">
            <h5 className="text-white font-bold text-lg">Pharmaceutical</h5>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group cursor-pointer">
        <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative grayscale group-hover:grayscale-0 transition-all">
          <img
            alt="FMCG labels"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBYR-yXUxpr9qa4mnsMAAbN8z-6I6Z0mq8vNdTEUAE3DhYS9L63M7afQYN9qd0o-Jy0Mcqm7bY78lS5sqDKjDQeJbs2ZeXNjFzTi79UB5vQJtoPJlNfwmfdnsal8-uQtqu5BmDN-0ZeaWBw3SYD0W1_CAxwGPvAeb9mP3IRrHPCCsg5N4IozIpSj05jQJ67N_Goi_lHVBKCADSHa35XoTafo4_G4IRplEiCU_QxH9zE-IdV_R9hJ-o0svy93B1AzDLohVEC1vpQpsP"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-80"></div>
          <div className="absolute bottom-4 left-4">
            <h5 className="text-white font-bold text-lg">Cosmetics</h5>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group cursor-pointer">
        <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative grayscale group-hover:grayscale-0 transition-all">
          <img
            alt="Electronics"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAus_1a3vlbBim-eY3ANVIkjqBjfZAAwI13n-K1ru0sgjuds956uW-gE9kOtFJsv65fz4nGpuAlDYkxcHFMKE_HiEnJ8sb7LFYbwSrREfQF_BdhJdFYRoV8SMthqzU8y_tM9avp-wT8R0-lGgoPfV6fesYw39U6wXAhmyOdPTNGOWgZxvpOaYyg-m6G2VAErThUCwNNkmW7ErmPimQ-G3Yv13v7pOcwt0LcyCTKUEaAFiKJrr4ma1UV-fAxyhB_9zJZrJmP0_beGBjg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-80"></div>
          <div className="absolute bottom-4 left-4">
            <h5 className="text-white font-bold text-lg">Electronics</h5>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group cursor-pointer">
        <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative grayscale group-hover:grayscale-0 transition-all">
          <img
            alt="Beverage"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbtTVg3ZF3IKWwaspBtWlZ7KdKUxqXzakE5U4X5G_bXgrfii7XaNp1WxGYcBubDmEtG0_gTpuBVkzYBFgsNucRQMWOLKiKOjOQw3pNrXo1TGKqklLJ-4f6KW4SRYM_tvkfbAA-grtIMJ3wPdxMmP8AaYyWvc9qeSeIXjm0FXDZjuBQDw0i-QNzqt5NVCe_LXk9V_8LBql3375N6LUoQnWnyJkAsJB6-u6agHZJLI5XNwMZK7wE4MOKNbU9YqhsbgCjcq2yTzSmg9KE"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-80"></div>
          <div className="absolute bottom-4 left-4">
            <h5 className="text-white font-bold text-lg">Beverages</h5>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="group cursor-pointer">
        <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative grayscale group-hover:grayscale-0 transition-all">
          <img
            alt="Logistics"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv0pwI0NtsssieExbPQI_tHso_X4qjToWJ2qQwKGC0TQaaD6J8WYD3qUkRPE8EzPsMiYIL7VHEkvreTMrL-MEyzKthjcntejaKbBCP2yE8wSXISc0xQoYt0nXz2tX-HARAzFMxVFVWzFN9vUEn9nGsTKz6BG76gf-N60Ys2b18lni-rvHgg2niT7Gr8r1JK85u44Hu1td9QKXKWCaW9mEjic7sgnBuz4w01oExwnPUhTtKbkAxf-WjSzFSebLJhMBVRAtaawy0ZxHJ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-80"></div>
          <div className="absolute bottom-4 left-4">
            <h5 className="text-white font-bold text-lg">Logistics</h5>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
 
    </>
  )
}

export default Industry
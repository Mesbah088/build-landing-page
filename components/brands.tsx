'use client'

export default function Brands() {
  const brands = [
    { name: 'TechMart', icon: '🛒' },
    { name: 'DailyFood', icon: '🍛' },
    { name: 'BeautyCare', icon: '✨' },
    { name: 'FashionHub', icon: '👔' },
    { name: 'MegaStore', icon: '🏪' },
    { name: 'DigitalShop', icon: '💻' },
  ]

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            যারা আমাদের উপর বিশ্বাস করেন
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            বাংলাদেশের শীর্ষস্থানীয় ই-কমার্স ব্যবসায়ীরা আমাদের সাথে আছেন
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
              hover:bg-white/10 hover:border-white/20 hover:shadow-xl transition-all duration-300
              flex flex-col items-center justify-center text-center space-y-3
              hover:scale-105"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/0 via-purple-400/0 to-blue-400/0 group-hover:from-pink-400/10 group-hover:via-purple-400/10 group-hover:to-blue-400/10 transition-all duration-500" />

              <div className="relative text-4xl">{brand.icon}</div>
              <p className="relative text-sm font-medium text-foreground">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
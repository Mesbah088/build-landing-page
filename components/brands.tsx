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
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">যারা আমাদের উপর বিশ্বাস করেন</h2>
          <p className="text-muted-foreground">বাংলাদেশের শীর্ষস্থানীয় ই-কমার্স ব্যবসায়ীরা</p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-background hover:border-primary/30 hover:shadow-md transition-all flex flex-col items-center justify-center text-center space-y-3"
            >
              <div className="text-4xl">{brand.icon}</div>
              <p className="text-sm font-medium text-foreground">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

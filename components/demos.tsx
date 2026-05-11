'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function Demos() {
  const demos = [
    {
      name: 'Electronics',
      sub: 'Smart Gadgets Store',
      url: 'electro.shopxet.com',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    },
    {
      name: 'Food',
      sub: 'Online Food Delivery',
      url: 'food.shopxet.com',
      image:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
      gradient: 'from-orange-400 via-red-500 to-pink-500',
    },
    {
      name: 'Fashion',
      sub: 'Modern Fashion Shop',
      url: 'fashion.shopxet.com',
      image:
        'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop',
      gradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
    },
    {
      name: 'Cosmetics',
      sub: 'Beauty & Care Products',
      url: 'cosmetics.shopxet.com',
      image:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
      gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    },
  ]

  return (
    <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold shadow-lg mb-5">
            ✨ Live Demo Stores
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            আমাদের লাইভ ডেমো <br />
         
          </h2>

          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Launch your dream online store with stunning modern UI designs
            crafted for every business category.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {demos.map((demo, index) => (
            <Link
              key={index}
              href={`https://${demo.url}`}
              target="_blank"
              className="group relative rounded-[32px] overflow-hidden bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${demo.gradient} opacity-70`}
                />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-wide">
                  LIVE DEMO
                </div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-bold">
                    {demo.name}
                  </h3>

                  <p className="text-sm text-white/80 mt-1">
                    {demo.sub}
                  </p>
                </div>
              </div>

              {/* Card Bottom */}
              <div className="p-6">

                {/* URL */}
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-blue-600 break-all">
                    {demo.url}
                  </p>

                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Button */}
                <button
                  className={`mt-6 w-full py-3 rounded-2xl bg-gradient-to-r ${demo.gradient} text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300`}
                >
                  Visit Demo →
                </button>
              </div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-[32px] border border-white/20 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
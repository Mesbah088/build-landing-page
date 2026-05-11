'use client'

import { Store, ShoppingBag, CheckCircle, Clock } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Store,
      number: "50+",
      label: "সক্রিয় স্টোর",
      description: "আমাদের সাথে সফল ব্যবসায়ীরা",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShoppingBag,
      number: "10+",
      label: "ব্র্যান্ড বিভাগ",
      description: "বৈচিত্র্যময় পণ্য ক্যাটেগরি",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: CheckCircle,
      number: "100%",
      label: "নিরাপত্তা নিশ্চয়",
      description: "আপনার ডেটা সম্পূর্ণ সুরক্ষিত",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "গ্রাহক সহায়তা",
      description: "সর্বদা আপনার পাশে আছি আমরা",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="relative w-full py-28 px-6 overflow-hidden bg-gray-50">

      {/* 🌈 Background Decorations */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-400 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-pink-400 rounded-full blur-3xl opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.05)_1px,_transparent_0)] [background-size:20px_20px] opacity-30" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            আমাদের অর্জনসমূহ
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            আমরা যা তৈরি করেছি তার একটি ছোট ঝলক
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >

                {/* Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-gradient-to-r ${stat.color}`} />

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-r ${stat.color}`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Number */}
                <p className="text-5xl font-extrabold text-gray-900 mt-6">
                  {stat.number}
                </p>

                {/* Label */}
                <p className="text-lg font-semibold text-gray-800 mt-1">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {stat.description}
                </p>

                {/* Bottom line (FIXED BUG) */}
                <div className={`mt-6 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r rounded-full ${stat.color}`} />
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
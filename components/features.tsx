'use client'

import {
  ShoppingCart,
  Truck,
  Users,
  Shield,
  BarChart3,
  Zap,
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'ই-কমার্স এপ্লিকেশন',
      description:
        'সম্পূর্ণ অনলাইন স্টোর পরিচালনার জন্য প্রয়োজনীয় সকল টুলস',
      color: 'from-pink-500 via-rose-500 to-orange-400',
    },
    {
      icon: Truck,
      title: 'ডেলিভারি ম্যানেজমেন্ট',
      description:
        'সরবরাহ শৃঙ্খল ব্যবস্থাপনা এবং ট্র্যাকিং সিস্টেম',
      color: 'from-blue-500 via-cyan-500 to-sky-400',
    },
    {
      icon: Users,
      title: 'CRM ইন্টিগ্রেশন',
      description:
        'গ্রাহক সম্পর্ক ব্যবস্থাপনা এবং বিশ্লেষণ প্রযুক্তি',
      color: 'from-purple-500 via-indigo-500 to-violet-500',
    },
    {
      icon: BarChart3,
      title: 'ক্রেতা বুঝতে পারি',
      description:
        'বিস্তারিত বিশ্লেষণ এবং রিপোর্টিং সরঞ্জাম',
      color: 'from-emerald-500 via-teal-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'ডেটা রক্ষা',
      description:
        'সর্বোচ্চ নিরাপত্তা এবং নিয়মিত ব্যাকআপ নিশ্চয়তা',
      color: 'from-orange-400 via-yellow-500 to-amber-500',
    },
    {
      icon: Zap,
      title: 'দ্রুত কর্মক্ষমতা',
      description:
        'আপনার ব্যবসার জন্য অত্যন্ত দক্ষ প্ল্যাটফর্ম',
      color: 'from-fuchsia-500 via-pink-500 to-rose-500',
    },
  ]

  return (
    <section className="relative overflow-hidden w-full py-24 px-6 bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center space-y-5 mb-20">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-indigo-600 border border-indigo-100 shadow-md text-sm font-semibold">
            ✨ Powerful Features
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            সবকিছু এক প্ল্যাটফর্মে
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            আপনার ব্যবসা পরিচালনার জন্য প্রয়োজনীয় সকল আধুনিক ফিচার
            এক জায়গায় পাবেন
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[32px] p-[1px] bg-gradient-to-br from-white to-slate-100 hover:scale-[1.03] transition-all duration-500 shadow-lg hover:shadow-2xl"
              >

                {/* Card */}
                <div className="relative h-full rounded-[32px] border border-white bg-white/90 backdrop-blur-xl p-8 overflow-hidden">

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.color} transition duration-500`}
                  />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-white/30 via-transparent to-white/10" />

                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">

                    <h3 className="text-2xl font-bold text-slate-900 mt-7">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 mt-4 leading-relaxed text-sm">
                      {feature.description}
                    </p>

                  </div>

                  {/* Bottom Gradient Line */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}
                  />

                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
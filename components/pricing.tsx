'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'বেসিক প্ল্যান',
      price: '2,999',
      period: '/মাসে',
      description: 'ছোট ব্যবসার জন্য আদর্শ',
      features: [
        '1,000 অর্ডার/মাসে',
        'সহজ বিশ্লেষণ',
        'বেসিক সাপোর্ট',
        '30/1 সহায়তা',
      ],
      badge: null,
      gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
      cardGlow: 'shadow-cyan-500/20',
      icon: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    },
    {
      name: 'বৃদ্ধি প্ল্যান',
      price: '14,999',
      period: '/মাসে',
      description: 'ক্রমবর্ধমান ব্যবসার জন্য',
      features: [
        '6,000 অর্ডার/মাসে',
        'উন্নত বিশ্লেষণ',
        'অগ্রাধিকার সহায়তা',
        'প্রতিদিন সহায়তা',
      ],
      badge: 'জনপ্রিয়',
      gradient: 'from-purple-500 via-pink-500 to-fuchsia-500',
      cardGlow: 'shadow-pink-500/20',
      icon: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
    {
      name: 'এন্টারপ্রাইজ প্ল্যান',
      price: '26,999',
      period: '/মাসে',
      description: 'বড় স্কেল ব্যবসার জন্য',
      features: [
        '30,000 অর্ডার/মাসে',
        'সম্পূর্ণ বিশ্লেষণ',
        'ডেডিকেটেড ম্যানেজার',
        'এবং আরও অনেক সুবিধা',
      ],
      badge: 'সুপারিশকৃত',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      cardGlow: 'shadow-emerald-500/20',
      icon: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    },
    {
      name: 'লাইটম্যাক্স প্ল্যান',
      price: 'কাস্টম',
      period: '',
      description: 'আপনার প্রয়োজন অনুযায়ী',
      features: [
        'সীমাহীন অর্ডার',
        'সম্পূর্ণ কাস্টমাইজেশন',
        'ডেডিকেটেড সাপোর্ট টিম',
        'অগ্রাধিকার সহায়তা',
      ],
      badge: null,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      cardGlow: 'shadow-orange-500/20',
      icon: 'bg-gradient-to-r from-orange-500 to-red-500',
    },
  ]

  return (
    <section className="relative overflow-hidden w-full py-24 px-6 bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-gray-500 text-sm font-semibold shadow-lg mb-5">
            ✨ Pricing Plans
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-400 leading-tight">
            SaaS মূল্য পরিকল্পনা
          </h2>

          <p className="text-gray-500 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
            আপনার ব্যবসার জন্য সেরা প্ল্যান নির্বাচন করুন এবং
            আধুনিক SaaS প্ল্যাটফর্ম দিয়ে দ্রুত বৃদ্ধি করুন।
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-[32px] p-[1px] bg-gradient-to-br ${plan.gradient} hover:scale-[1.03] transition-all duration-500`}
            >

              {/* Card */}
              <div
                className={`relative h-full rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-2xl p-8 overflow-hidden shadow-2xl ${plan.cardGlow}`}
              >

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-white/5 via-white/10 to-transparent" />

                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute top-5 right-5">
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 shadow-lg px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${plan.icon} mb-6 flex items-center justify-center shadow-lg`}
                >
                  <div className="w-5 h-5 bg-white rounded-full" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white">
                  {plan.name}
                </h3>

                <p className="text-gray-300 mt-2 text-sm">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-8 flex items-end gap-1">

                  <span className="text-5xl font-extrabold text-white">
                    {plan.price === 'কাস্টম'
                      ? plan.price
                      : `৳${plan.price}`}
                  </span>

                  <span className="text-gray-400 text-sm mb-2">
                    {plan.period}
                  </span>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-white/10" />

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-200"
                    >

                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  className={`w-full mt-10 rounded-2xl py-6 text-white font-semibold bg-gradient-to-r ${plan.gradient} border-0 shadow-xl hover:opacity-90 transition-all duration-300`}
                >
                  এখনই শুরু করুন →
                </Button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
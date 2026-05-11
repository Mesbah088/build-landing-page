'use client'

import { ShoppingCart, Truck, Users, Shield, BarChart3, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'ই-কমার্স এপ্লিকেশন',
      description: 'সম্পূর্ণ অনলাইন স্টোর পরিচালনার জন্য প্রয়োজনীয় সকল টুলস',
    },
    {
      icon: Truck,
      title: 'ডেলিভারি ম্যানেজমেন্ট',
      description: 'সরবরাহ শৃঙ্খল ব্যবস্থাপনা এবং ট্র্যাকিং সিস্টেম',
    },
    {
      icon: Users,
      title: 'CRM ইন্টিগ্রেশন',
      description: 'গ্রাহক সম্পর্ক ব্যবস্থাপনা এবং বিশ্লেষণ প্রযুক্তি',
    },
    {
      icon: BarChart3,
      title: 'ক্রেতা বুঝতে পারি',
      description: 'বিস্তারিত বিশ্লেষণ এবং রিপোর্টিং সরঞ্জাম',
    },
    {
      icon: Shield,
      title: 'ডেটা রক্ষা',
      description: 'সর্বোচ্চ নিরাপত্তা এবং নিয়মিত ব্যাকআপ নিশ্চয়তা',
    },
    {
      icon: Zap,
      title: 'দ্রুত কর্মক্ষমতা',
      description: 'আপনার ব্যবসার জন্য অত্যন্ত দক্ষ প্ল্যাটফর্ম',
    },
  ]

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">সবকিছু এক প্ল্যাটফর্মে</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            আপনার ব্যবসা পরিচালনার জন্য প্রয়োজনীয় সকল বৈশিষ্ট্য এক জায়গায় পাবেন
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

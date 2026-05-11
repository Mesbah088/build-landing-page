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
      color: 'border-border',
      buttonVariant: 'outline' as const,
    },
    {
      name: 'বৃদ্ধি প্ল্যান',
      price: '14,999',
      period: '/প্রতি মাস',
      description: 'ক্রমবর্ধমান ব্যবসার জন্য',
      features: [
        '6,000 অর্ডার/মাসে',
        'উন্নত বিশ্লেষণ',
        'অগ্রাধিকার সহায়তা',
        'প্রতিদিন সহায়তা',
      ],
      badge: 'জনপ্রিয়',
      color: 'border-primary/50 bg-primary/5',
      buttonVariant: 'default' as const,
    },
    {
      name: 'এন্টারপ্রাইজ প্ল্যান',
      price: '26,999',
      period: '/এক বছর',
      description: 'বড় স্কেল ব্যবসার জন্য',
      features: [
        '30,000 অর্ডার/মাসে',
        'সম্পূর্ণ বিশ্লেষণ',
        'ডেডিকেটেড ম্যানেজার',
        'এবং আরও অনেক সুবিধা',
      ],
      badge: 'সুপারিশকৃত',
      color: 'border-primary/50 bg-primary/5',
      buttonVariant: 'default' as const,
    },
    {
      name: 'লাইটম্যাক্স প্ল্যান',
      price: 'কাস্টম',
      period: 'মূল্য নির্ধারণ',
      description: 'আপনার প্রয়োজন অনুযায়ী',
      features: [
        'সীমাহীন অর্ডার',
        'সম্পূর্ণ কাস্টমাইজেশন',
        'ডেডিকেটেড সাপোর্ট টিম',
        'অগ্রাধিকার সহায়তা',
      ],
      badge: null,
      color: 'border-border',
      buttonVariant: 'outline' as const,
    },
  ]

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">SaaS মূল্য পরিকল্পনা</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            আপনার বাজেট অনুযায়ী নিখুঁত পরিকল্পনা খুঁজে পান
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border-2 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${plan.color}`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500 text-white">{plan.badge}</Badge>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">৳{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.buttonVariant}
                className={plan.buttonVariant === 'default' ? 'bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-8' : 'w-full mt-8'}
              >
                এখনই শুরু করুন
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

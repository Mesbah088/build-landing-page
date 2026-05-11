'use client'

import { Store, ShoppingBag, CheckCircle, Clock } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Store,
      number: '50+',
      label: 'সক্রিয় স্টোর',
      description: 'আমাদের সাথে সফল ব্যবসায়ীরা',
    },
    {
      icon: ShoppingBag,
      number: '10+',
      label: 'ব্র্যান্ড বিভাগ',
      description: 'বৈচিত্র্যময় পণ্য ক্যাটেগরি',
    },
    {
      icon: CheckCircle,
      number: '100%',
      label: 'নিরাপত্তা নিশ্চয়',
      description: 'আপনার ডেটা সম্পূর্ণ সুরক্ষিত',
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'গ্রাহক সহায়তা',
      description: 'সর্বদা আপনার পাশে আছি আমরা',
    },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex flex-col items-start gap-4 p-6 rounded-lg border border-border/40 hover:border-primary/30 transition-colors bg-background">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-foreground">{stat.number}</p>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

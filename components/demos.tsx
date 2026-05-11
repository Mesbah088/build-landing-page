'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function Demos() {
  const demos = [
    {
      name: 'Electro',
      category: 'ইলেকট্রনিক্স',
      url: 'electro.shopget.com',
      color: 'bg-blue-100',
      icon: '📱',
    },
    {
      name: 'Food',
      category: 'খাদ্য বিতরণ',
      url: 'food.shopget.com',
      color: 'bg-red-100',
      icon: '🍕',
    },
    {
      name: 'Cosmetics',
      category: 'প্রসাধনী',
      url: 'cosmetics.shopget.com',
      color: 'bg-pink-100',
      icon: '💄',
    },
    {
      name: 'Fashion',
      category: 'ফ্যাশন',
      url: 'fashion.shopget.com',
      color: 'bg-purple-100',
      icon: '👗',
    },
  ]

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">আমাদের লাইভ ডেমো</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            বিভিন্ন ক্যাটেগরির স্টোর কীভাবে কাজ করে তা দেখুন
          </p>
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, index) => (
            <Link
              key={index}
              href={`https://${demo.url}`}
              target="_blank"
              className="group relative overflow-hidden rounded-xl border border-border bg-background hover:border-primary/50 transition-all duration-300"
            >
              <div className={`${demo.color} h-32 flex items-center justify-center text-4xl`}>
                {demo.icon}
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{demo.name}</h3>
                    <p className="text-sm text-muted-foreground">{demo.category}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-muted-foreground break-all">{demo.url}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

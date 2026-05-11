'use client'

import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">আপনার ব্যবসার জন্য, আপনার প্রয়োজন অনুযায়ী</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-balance text-foreground">
                আপনার ই-কমার্স ব্যবসার জন্য সম্পূর্ণ
                <span className="text-primary"> SaaS সমাধান</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Ecomtara একটি নিখুঁতকারী ও সবচেয়ে ব্যবহারযোগ্য ই-কমার্স SaaS প্ল্যাটফর্ম। সরলতম, ইন্টিগ্রেশন, CRM, পূর্ণাঙ্গ বিতরণ পদ্ধতিসহ একটি আধুনিক — আপনার ব্যবসায় দিন নতুন উচ্চতা।
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                যোগ দিন
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
                মূল্য পরিকল্পনা দেখুন
              </Button>
            </div>
          </div>

          {/* Right - Demo Mockup */}
          <div className="relative h-80 md:h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl overflow-hidden">
              {/* Browser mockup */}
              <div className="relative h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-border">
                <div className="h-12 bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border flex items-center gap-2 px-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-auto text-xs text-muted-foreground">electro.shopget.com</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-gradient-to-r from-primary/20 to-primary/10 h-32 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">Product Showcase</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-muted rounded-lg" />
                    <div className="h-16 bg-muted rounded-lg" />
                    <div className="h-16 bg-muted rounded-lg" />
                    <div className="h-16 bg-muted rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { Button } from '@/components/ui/button'
import { Rocket } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full -ml-24 -mb-24" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Rocket className="w-6 h-6 text-primary-foreground" />
                <span className="text-primary-foreground font-medium">আজই শুরু করুন</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                আপনার ই-কমার্স যাত্রা আজই শুরু করুন!
              </h2>

              <p className="text-lg text-primary-foreground/90">
                Ecomtara দিয়ে আপনার ব্যবসা বৃদ্ধি করুন এবং নতুন উচ্চতায় পৌঁছান। বিনামূল্যে ট্রায়াল শুরু করুন আজই।
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                যোগ দিন
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                সাইন আপ করুন
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

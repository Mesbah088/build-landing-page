'use client'

import { Button } from '@/components/ui/button'
import { Rocket } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">

      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Glass Card */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl
          p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl">

          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-60" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10">
                <Rocket className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm text-primary-foreground/90">
                  আজই শুরু করুন
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                আপনার ই-কমার্স যাত্রা <br />
                এখনই শুরু করুন 🚀
              </h2>

              <p className="text-muted-foreground text-base md:text-lg">
                Ecomtara দিয়ে আপনার ব্যবসা দ্রুত বৃদ্ধি করুন, অর্ডার ম্যানেজ করুন,
                এবং নতুন উচ্চতায় পৌঁছান — সম্পূর্ণ স্মার্ট সলিউশনের সাথে।
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">

              <Button
                size="lg"
                className="w-full sm:w-auto lg:w-60 bg-primary text-primary-foreground hover:scale-105 transition-transform"
              >
                ফ্রি শুরু করুন
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto lg:w-60 border-white/20 text-foreground hover:bg-white/10"
              >
                ডেমো দেখুন
              </Button>

              <p className="text-xs text-muted-foreground pt-2 text-center lg:text-right">
                No credit card required
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
'use client'

import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Rocket,
  Sparkles,
  Code2,
  Headphones,
  ClipboardList,
} from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-300/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-indigo-300 bg-white shadow-md">
              <Rocket className="w-5 h-5 text-pink-500 fill-pink-500" />

              <span className="text-sm font-bold  text-indigo-600">
                আপনার নিজের ব্র্যান্ড, আপনার নিজেরই ই-কমার্স
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-5">

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900">

                আপনার ই-কমার্স ব্যবসার জন্য সম্পূর্ণ

                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  SaaS সমাধান
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Ecomtara একটি আধুনিক ও শক্তিশালী ই-কমার্স SaaS প্ল্যাটফর্ম।
                CRM, অর্ডার ম্যানেজমেন্ট, ডেলিভারি সিস্টেম এবং
                পূর্ণাঙ্গ ব্যবসায়িক সমাধান — সবকিছু এক প্ল্যাটফর্মে।
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <Button
                size="lg"
                className="h-14 px-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-xl hover:scale-105 transition-all duration-300"
              >
                ডেমো দেখুন
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-2xl border-2 border-indigo-200 bg-white text-indigo-700 font-bold hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                মূল্য পরিকল্পনা দেখুন
              </Button>
            </div>

            {/* Features Pills */}
            <div className="flex flex-wrap items-center gap-4 pt-2">

              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-white bg-white shadow-md hover:shadow-xl transition">
                <Sparkles className="w-4 h-4 text-indigo-600" />

                <span className="text-sm font-semibold text-slate-700">
                  সহজ সেটআপ
                </span>
              </div>

              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-white bg-white shadow-md hover:shadow-xl transition">
                <Code2 className="w-4 h-4 text-indigo-600" />

                <span className="text-sm font-semibold text-slate-700">
                  কোন কোডিং নয়
                </span>
              </div>

              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-white bg-white shadow-md hover:shadow-xl transition">
                <Headphones className="w-4 h-4 text-indigo-600" />

                <span className="text-sm font-semibold text-slate-700">
                  ২৪/৭ সাপোর্ট
                </span>
              </div>

              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-white bg-white shadow-md hover:shadow-xl transition">
                <ClipboardList className="w-4 h-4 text-indigo-600" />

                <span className="text-sm font-semibold text-slate-700">
                  নির্ভুল অর্ডার
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Mockup */}
          <div className="relative hidden lg:flex items-center justify-center">

            {/* Background Glow */}
            <div className="absolute -top-10 right-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl" />

            {/* Laptop Mockup */}
            <div className="relative w-[720px] h-[470px] rounded-[34px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-slate-200 overflow-hidden">

              {/* Browser Top */}
              <div className="h-12 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center px-5">

                {/* Dots */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* Mini Icon */}
                <div className="ml-auto w-4 h-4 rounded-full border border-white/60" />
              </div>

              {/* Content */}
              <div className="flex h-[calc(100%-48px)] bg-[#f8f8fb]">

                {/* Sidebar */}
                <div className="w-40 bg-white border-r border-slate-100 p-5">

                  {/* Logo */}
                  <h2 className="text-2xl font-extrabold text-blue-700 mb-8">
                    electro<span className="text-slate-900">.</span>
                  </h2>

                  {/* Menu */}
                  <div className="space-y-4">

                    <div className="h-9 rounded-xl bg-blue-50 flex items-center px-3 text-sm font-medium text-blue-700">
                      🛒 Products
                    </div>

                    <div className="h-9 rounded-xl bg-slate-50" />
                    <div className="h-9 rounded-xl bg-slate-50" />
                    <div className="h-9 rounded-xl bg-slate-50" />
                    <div className="h-9 rounded-xl bg-slate-50" />
                    <div className="h-9 rounded-xl bg-slate-50" />

                  </div>
                </div>

                {/* Main Area */}
                <div className="flex-1 p-6">

                  {/* Topbar */}
                  <div className="flex items-center gap-4 mb-6">

                    {/* Search */}
                    <div className="flex-1 h-11 bg-white rounded-xl border border-slate-200 flex items-center px-4">

                      <div className="flex-1 text-sm text-slate-400">
                        Search product
                      </div>

                      <div className="w-12 h-8 rounded-lg bg-blue-600" />
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-slate-300" />
                      <div className="w-5 h-5 rounded-full bg-slate-300" />
                      <div className="w-5 h-5 rounded-full bg-slate-300" />
                    </div>
                  </div>

                  {/* Banner */}
                  <div className="relative h-44 rounded-2xl overflow-hidden bg-gradient-to-r from-[#031634] via-[#073A73] to-[#1256B3] shadow-lg">

                    {/* Banner Content */}
                    <div className="absolute left-8 top-8 z-10">

                      <h3 className="text-4xl font-bold text-white leading-tight">
                        Mega Summer <br />
                        Sale 50% Off
                      </h3>

                      <p className="text-white/70 text-sm mt-3">
                        Discount for all electronics products
                      </p>

                      <button className="mt-5 px-5 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold shadow-md">
                        Shop Now
                      </button>
                    </div>

                    {/* Headphone Mockup */}
                    <div className="absolute right-10 bottom-0 w-56 h-56 rounded-full bg-blue-400/20 blur-2xl" />

                    <div className="absolute right-12 top-10">
                      <div className="relative">

                        {/* Fake Headphone */}
                        <div className="w-28 h-28 rounded-full border-[10px] border-slate-300 rotate-12" />

                        <div className="absolute top-14 -left-10 w-20 h-20 rounded-full bg-slate-300 shadow-xl" />

                        <div className="absolute top-14 right-[-40px] w-20 h-20 rounded-full bg-slate-400 shadow-xl" />

                      </div>
                    </div>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-4 gap-4 mt-6">

                    {/* Product Card */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">

                      <div className="h-28 rounded-xl bg-slate-100 mb-3 flex items-center justify-center">
                        🎧
                      </div>

                      <div className="h-3 w-20 bg-slate-200 rounded mb-2" />
                      <div className="h-3 w-14 bg-slate-100 rounded" />
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-sm">

                      <div className="h-28 rounded-xl bg-slate-100 mb-3 flex items-center justify-center">
                        ⌚
                      </div>

                      <div className="h-3 w-20 bg-slate-200 rounded mb-2" />
                      <div className="h-3 w-14 bg-slate-100 rounded" />
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-sm">

                      <div className="h-28 rounded-xl bg-slate-100 mb-3 flex items-center justify-center">
                        📷
                      </div>

                      <div className="h-3 w-20 bg-slate-200 rounded mb-2" />
                      <div className="h-3 w-14 bg-slate-100 rounded" />
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-sm">

                      <div className="h-28 rounded-xl bg-slate-100 mb-3 flex items-center justify-center">
                        💻
                      </div>

                      <div className="h-3 w-20 bg-slate-200 rounded mb-2" />
                      <div className="h-3 w-14 bg-slate-100 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="absolute left-[-40px] bottom-[-20px] w-[210px] h-[430px] rounded-[42px] bg-black p-3 shadow-[0_25px_60px_rgba(0,0,0,0.25)] border-[6px] border-black z-20">

              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-black z-30" />

              {/* Screen */}
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-white">

                {/* Header */}
                <div className="flex items-center justify-between px-5 pt-6">

                  <h2 className="text-3xl font-extrabold text-red-500">
                    food<span className="text-slate-900">.</span>
                  </h2>

                  <div className="flex gap-3">
                    <div className="w-4 h-4 rounded-full bg-slate-300" />
                    <div className="w-4 h-4 rounded-full bg-slate-300" />
                  </div>
                </div>

                {/* Food Banner */}
                <div className="mx-4 mt-5 rounded-2xl p-5 bg-gradient-to-r from-orange-500 to-red-500 text-white">

                  <h3 className="text-xl font-bold leading-tight">
                    Delicious Food <br />
                    Delivered Fast
                  </h3>

                  <button className="mt-4 px-4 py-2 rounded-lg bg-white text-red-500 text-sm font-semibold">
                    Buy Now
                  </button>
                </div>

                {/* Category */}
                <div className="flex justify-between px-4 mt-5">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    🍔
                  </div>

                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    🍕
                  </div>

                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    🥤
                  </div>

                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    🍟
                  </div>
                </div>

                {/* Popular */}
                <div className="px-4 mt-6">

                  <h4 className="font-bold text-slate-900 mb-4">
                    Popular Items
                  </h4>

                  <div className="bg-white border border-slate-100 rounded-2xl p-3 shadow-sm flex items-center gap-3">

                    <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">
                      🍔
                    </div>

                    <div className="flex-1">
                      <div className="font-semibold text-slate-900">
                        Cheese Burger
                      </div>

                      <div className="text-red-500 font-bold mt-1">
                        ৳350
                      </div>
                    </div>

                    <button className="w-9 h-9 rounded-full bg-red-500 text-white text-lg">
                      +
                    </button>
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
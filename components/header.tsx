'use client'

import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
      <ShoppingCart className="w-4 h-4 text-primary-foreground" />
             </div>
          <span className="text-foreground">Ecomtara</span>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
            হোম
          </Link>
          <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
            সেবা
          </Link>
          <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
            বৈশিষ্ট্যসমূহ
          </Link>
          <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
            মূল্য পরিকল্পনা
          </Link>
          <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
            সাইটম্যাপ নাম
          </Link>
          <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
            গ্রাহক
          </Link>
          <Link href="#" className="text-sm text-foreground hover:text-primary transition-colors">
            সংযোগাযোগ
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            যোগ দিন
          </Button>
        </div>
      </nav>
    </header>
  )
}

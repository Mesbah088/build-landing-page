'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">📦</span>
              </div>
              <span>Ecomtara</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              আপনার ই-কমার্স ব্যবসার জন্য সম্পূর্ণ SaaS সমাধান।
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-bold">পণ্য</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  বৈশিষ্ট্য
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  মূল্য নির্ধারণ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  ডেমো
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  পরিবর্তনের লগ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-bold">কোম্পানি</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  ব্লগ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  ক্যারিয়ার
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-bold">সোশ্যাল</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2026 Ecomtara. সকল অধিকার সংরক্ষিত।
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              গোপনীয়তা নীতি
            </Link>
            <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              সেবার শর্তাবলী
            </Link>
            <Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              কুকি নীতি
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

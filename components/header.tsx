'use client'

import { Menu, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MobileMenu from './mobile-menu'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='w-full sticky top-0 z-40 bg-white shadow-sm'>
      <div className='top-header py-2 px-4 flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <Phone size={16} />
          <span className='text-sm'>0507249162 - 0558410272</span>
        </div>
        <div className='hidden md:flex items-center gap-2'>
          <span className='text-sm'>
            مطابخ ألمنيوم حديثة - فك - تركيب - صيانة
          </span>
        </div>
      </div>

      <div className='container mx-auto py-3 px-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link href='/'>
            <div className='flex items-center'>
              <Image
                src='/images/logo.jpeg'
                alt='نجمه المناره للمطابخ'
                width={60}
                height={60}
                className='h-auto'
              />
            </div>
          </Link>
        </div>

        <nav className='hidden md:flex items-center gap-8'>
          <Link
            href='/'
            className='py-2 px-4 border border-gray-300 hover:bg-gray-100 transition-colors'
          >
            الرئيسية
          </Link>
          <Link
            href='/about'
            className='py-2 hover:text-primary transition-colors'
          >
            من نحن ؟
          </Link>
          <Link
            href='#services'
            className='py-2 hover:text-primary transition-colors'
          >
            خدماتنا
          </Link>
          <Link
            href='#gallery'
            className='py-2 hover:text-primary transition-colors'
          >
            معرض الأعمال
          </Link>
          <Link
            href='#contact'
            className='py-2 hover:text-primary transition-colors'
          >
            تواصل معنا
          </Link>
        </nav>

        <button
          className='md:hidden p-2 rounded-md hover:bg-gray-100'
          onClick={() => setMobileMenuOpen(true)}
          aria-label='فتح القائمة'
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  )
}

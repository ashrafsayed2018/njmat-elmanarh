"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="fixed inset-y-0 left-0 right-0 z-50 w-full overflow-y-auto bg-white shadow-xl animate-in slide-in-from-top">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-primary">القائمة</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100" aria-label="إغلاق القائمة">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/" onClick={onClose} className="block py-2 text-lg font-medium hover:text-primary">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={onClose} className="block py-2 text-lg font-medium hover:text-primary">
                من نحن ؟
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={onClose} className="block py-2 text-lg font-medium hover:text-primary">
                خدماتنا
              </Link>
            </li>
            <li>
              <Link href="#gallery" onClick={onClose} className="block py-2 text-lg font-medium hover:text-primary">
                معرض الأعمال
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={onClose} className="block py-2 text-lg font-medium hover:text-primary">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 mt-4 border-t">
          <div className="flex flex-col gap-2">
            <Link
              href="tel:0507249162"
              className="flex items-center justify-center w-full py-3 font-bold text-white bg-primary rounded-md"
            >
              اتصل الآن: 0507249162
            </Link>
            <Link
              href="https://wa.me/0507249162"
              className="flex items-center justify-center w-full py-3 font-bold text-white bg-[#25d366] rounded-md"
            >
              واتساب
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

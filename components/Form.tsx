'use client'

import React, { useRef } from 'react'

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const serviceRef = useRef<HTMLSelectElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const name = nameRef.current?.value || ''
    const phone = phoneRef.current?.value || ''
    const service = serviceRef.current?.value || ''
    const message = messageRef.current?.value || ''

    const serviceText =
      {
        design: 'تصميم وتفصيل',
        install: 'تركيب',
        maintenance: 'صيانة',
        other: 'أخرى',
      }[service] || 'غير محدد'

    const fullMessage = `📥 *طلب جديد من الموقع*

👤 *الاسم:* ${name}
📞 *رقم الهاتف:* ${phone}
🛠️ *الخدمة المطلوبة:* ${serviceText}
📝 *الرسالة:* 
${message}`

    const whatsappUrl = `https://wa.me/966558410272?text=${encodeURIComponent(
      fullMessage
    )}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4 bg-white p-6 shadow-md'>
      <div>
        <label htmlFor='name' className='block mb-2'>
          الاسم
        </label>
        <input
          type='text'
          id='name'
          ref={nameRef}
          required
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
        />
      </div>
      <div>
        <label htmlFor='phone' className='block mb-2'>
          رقم الهاتف
        </label>
        <input
          type='tel'
          id='phone'
          ref={phoneRef}
          required
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
        />
      </div>
      <div>
        <label htmlFor='service' className='block mb-2'>
          الخدمة المطلوبة
        </label>
        <select
          id='service'
          ref={serviceRef}
          required
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
        >
          <option value=''>اختر الخدمة</option>
          <option value='design'>تصميم وتفصيل</option>
          <option value='install'>تركيب</option>
          <option value='maintenance'>صيانة</option>
          <option value='other'>أخرى</option>
        </select>
      </div>
      <div>
        <label htmlFor='message' className='block mb-2'>
          الرسالة
        </label>
        <textarea
          id='message'
          rows={5}
          ref={messageRef}
          className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
        ></textarea>
      </div>
      <button type='submit' className='contact-btn'>
        إرسال
      </button>
    </form>
  )
}

export default Form

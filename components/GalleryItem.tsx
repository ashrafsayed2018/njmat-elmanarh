'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Lightbox } from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface GalleryItemProps {
  title: string
  description: string
  mainImage: string
  thumbs: string[]
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  title,
  description,
  mainImage,
  thumbs,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  // نحول الصور إلى الصيغة المطلوبة للمكتبة
  const slides = thumbs.map((thumb) => ({ src: thumb }))

  return (
    <div className='bg-white rounded-lg shadow-md p-4'>
      <img
        src={mainImage}
        alt={title}
        className='w-full h-48 object-cover rounded'
      />
      <h3 className='text-xl font-bold text-center text-red-600 mt-4'>
        {title}
      </h3>
      <p className='text-center text-gray-600 mt-2'>{description}</p>

      <div className='grid grid-cols-3 gap-2 mt-4'>
        {thumbs.map((thumb, index) => (
          <Image
            key={index}
            src={thumb}
            width={100}
            height={100}
            alt={`thumb-${index}`}
            className='w-full h-20 object-cover rounded cursor-pointer'
            onClick={() => {
              setPhotoIndex(index)
              setIsOpen(true)
            }}
          />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={photoIndex}
          on={{
            view: ({ index }: { index: number }) => setPhotoIndex(index),
          }}
        />
      )}

      <div className='flex justify-between mt-4'>
        <button className='bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700'>
          تفاصيل
        </button>
        <button className='bg-gray-200 text-gray-800 px-4 py-1 rounded hover:bg-gray-300'>
          عرض المزيد
        </button>
      </div>
    </div>
  )
}

export default GalleryItem

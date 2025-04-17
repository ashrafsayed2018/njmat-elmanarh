import Form from '@/components/Form'
import GalleryItem from '@/components/GalleryItem'
import {
  Check,
  Mail,
  MapPin,
  Phone,
  Settings,
  PenToolIcon as Tool,
  Wrench,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-[80vh] md:h-[80vh] bg-gray-900'>
        <Image
          src='/images/1.jpeg'
          alt='نجمه المناره للمطابخ'
          fill
          className='object-cover opacity-70'
          priority
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4'>
          <h1 className='text-3xl md:text-5xl font-bold mb-4'>
            تفصيل مطابخ (نجمه المناره للمطابخ)
          </h1>
          <div className='bg-primary bg-opacity-90 p-4 md:p-6 max-w-2xl mx-auto'>
            <p className='text-lg md:text-2xl'>
              تصاميم عصرية مبتكرة تجمع بين الفخامة العصرية متانة استثنائية
              وتقنية عالية
            </p>
          </div>
          <div className='mt-6 md:mt-8 border-2 border-white border-opacity-50 inline-block p-3 md:p-4'>
            <p className='text-lg md:text-2xl font-bold'>
              0507249162 - 0558410272
            </p>
          </div>
          <Link href='#contact' className='mt-6 md:mt-8 contact-btn'>
            اتصل بنا
          </Link>
        </div>
      </section>

      {/* About Section Preview */}
      <section className='py-16 px-4 bg-gray-100'>
        <div className='container mx-auto'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='md:w-1/2'>
              <div className='bg-primary text-white p-4 mb-6 text-center'>
                <h2 className='text-2xl font-bold'>
                  مطابخ نجمة المنارة - إبداع في التصميم، تفوق في الجودة
                </h2>
              </div>
              <div className='bg-white p-6 shadow-md'>
                <p className='text-lg leading-relaxed'>
                  في عالم المطابخ العصرية، لا يقتصر الأمر على كونها مجرد مساحة
                  للطهي، بل أصبحت قلب المنزل ومكاناً يجمع بين الأناقة، الراحة،
                  والتقنية الحديثة في آن واحد.
                </p>
                <p className='text-lg leading-relaxed mt-4'>
                  مطابخ نجمة المنارة تجسد هذا المفهوم من خلال تقديم تصاميم عصرية
                  مبتكرة تجمع بين الفخامة والمتانة الاستثنائية والتقنية العالية.
                </p>
                <div className='mt-8'>
                  <Link href='/about' className='contact-btn'>
                    اقرأ المزيد
                  </Link>
                </div>
              </div>
            </div>
            <div className='md:w-1/2'>
              <Image
                src='/images/2.jpeg'
                alt='مطابخ نجمة المنارة'
                width={600}
                height={400}
                className='rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-16 px-4'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold section-title'>
              خدماتنا
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='service-card text-center'>
              <div className='w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white'>
                <Settings size={40} />
              </div>
              <h3 className='text-xl font-bold mb-2'>تصميم وتفصيل</h3>
              <p>
                نقدم خدمات تصميم وتفصيل مطابخ الألمنيوم بأحدث التصاميم العصرية
                وبأعلى جودة.
              </p>
            </div>

            <div className='service-card text-center'>
              <div className='w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white'>
                <Wrench size={40} />
              </div>
              <h3 className='text-xl font-bold mb-2'>تركيب وفك</h3>
              <p>
                فريق متخصص في تركيب وفك مطابخ الألمنيوم بدقة واحترافية عالية وفي
                وقت قياسي.
              </p>
            </div>

            <div className='service-card text-center'>
              <div className='w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white'>
                <Tool size={40} />
              </div>
              <h3 className='text-xl font-bold mb-2'>صيانة</h3>
              <p>
                نقدم خدمات صيانة دورية وطارئة لمطابخ الألمنيوم للحفاظ على جودتها
                ومظهرها.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 px-4 bg-gray-100'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold section-title'>
              مميزات مطابخ الألمنيوم
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0'>
                <Check size={24} />
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2'>متانة عالية</h3>
                <p>
                  مطابخ الألمنيوم تتميز بمتانتها العالية ومقاومتها للرطوبة
                  والحرارة.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0'>
                <Check size={24} />
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2'>سهولة التنظيف</h3>
                <p>
                  تتميز مطابخ الألمنيوم بسهولة تنظيفها وصيانتها، مما يوفر الوقت
                  والجهد.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0'>
                <Check size={24} />
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2'>تصاميم عصرية</h3>
                <p>
                  نقدم تشكيلة واسعة من التصاميم العصرية التي تناسب جميع الأذواق.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0'>
                <Check size={24} />
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2'>أسعار منافسة</h3>
                <p>نقدم أسعارًا منافسة مع الحفاظ على أعلى معايير الجودة.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-16 px-4'>
        <GalleryItem
          title='تفصيل مطبخ'
          description='نقوم بتصميم وتفصيل مطابخ حسب الطلب، مع مراعاة استغلال المساحات بأفضل شكل، وتوفير تشكيلة واسعة من الألوان والخامات التي تجمع بين العملية والأناقة، لتلائم ذوقك واحتياجاتك بشكل مثالي.'
          mainImage='/images/1.jpeg'
          thumbs={['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg']}
        />
        <GalleryItem
          title='تركيب مطبخ'
          description='فريقنا المتخصص يضمن لك تركيب مطبخك بأعلى درجات الدقة والاحترافية. نهتم بأدق التفاصيل أثناء التركيب، سواء كنت تجهز مطبخ جديد أو تقوم بتجديد مطبخك الحالي، لضمان مظهر نهائي متكامل ووظيفة عالية الجودة.'
          mainImage='/images/4.jpeg'
          thumbs={['/images/4.jpeg', '/images/5.jpeg', '/images/6.jpeg']}
        />
        <GalleryItem
          title='صيانة مطبخ'
          description='نقدم خدمات صيانة شاملة للمطابخ تشمل إصلاح الأدراج والخزائن، استبدال المفصلات والمقابض، وتجديد الأسطح لتعود وكأنها جديدة. هدفنا الحفاظ على مطبخك بأفضل حالة وظيفية وجمالية لأطول فترة ممكنة.'
          mainImage='/images/7.jpeg'
          thumbs={['/images/7.jpeg', '/images/8.jpg', '/images/9.jpg']}
        />
      </div>

      {/* Why Choose Us */}
      <section className='py-16 px-4 bg-gray-100'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold section-title'>
              لماذا تختارنا؟
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
              <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z'></path>
                  <line x1='16' y1='8' x2='2' y2='22'></line>
                  <line x1='17.5' y1='15' x2='9' y2='15'></line>
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>خبرة واسعة</h3>
              <p>نمتلك خبرة واسعة في مجال تصميم وتفصيل المطابخ</p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
              <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>جودة عالية</h3>
              <p>نستخدم أجود أنواع المواد ونلتزم بأعلى معايير الجودة</p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
              <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <polyline points='12 6 12 12 16 14'></polyline>
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>التزام بالمواعيد</h3>
              <p>نلتزم بتسليم المشاريع في الوقت المحدد دون تأخير</p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
              <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                  <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>خدمة عملاء متميزة</h3>
              <p>نقدم خدمة عملاء متميزة قبل وأثناء وبعد تنفيذ المشروع</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-16 px-4'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold section-title'>
              تواصل معنا
            </h2>
          </div>

          <div className='flex flex-col md:flex-row gap-8'>
            <div className='md:w-1/2'>
              <Form />
            </div>

            <div className='md:w-1/2'>
              <div className='bg-white p-6 rounded-lg shadow-md h-full'>
                <h3 className='text-xl font-bold mb-4'>معلومات التواصل</h3>
                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white'>
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className='font-semibold'>الهاتف</p>
                      <p>0507249162 - 0558410272</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white'>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className='font-semibold'>العنوان</p>
                      <p>المملكة العربية السعودية</p>
                      <a
                        href='https://maps.app.goo.gl/11ZjdhPezjUampiz8'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-primary hover:underline text-sm'
                      >
                        عرض على الخريطة
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white'>
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className='font-semibold'>البريد الإلكتروني</p>
                      <p>info@najmatalmanarakitchens.com</p>
                    </div>
                  </div>
                </div>

                <div className='mt-6'>
                  <h4 className='font-bold mb-2'>ساعات العمل:</h4>
                  <p>السبت - الخميس: 8:00 صباحًا - 8:00 مساءً</p>
                  <p>الجمعة: 2:00 ظهرًا - 8:00 مساءً</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-12 px-4 bg-primary text-white'>
        <div className='container mx-auto text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            هل تبحث عن مطبخ ألمنيوم حديث وعصري؟
          </h2>
          <p className='mb-6'>
            تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر خاص
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='tel:0507249162'
              className='bg-white text-primary py-2 px-6 rounded-md font-bold hover:bg-gray-100 transition-colors'
            >
              اتصل الآن: 0507249162
            </Link>
            <Link
              href='https://wa.me/0507249162'
              className='bg-[#25d366] text-white py-2 px-6 rounded-md font-bold hover:opacity-90 transition-colors'
            >
              واتساب
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-12 px-4'>
        <div className='container mx-auto'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl md:text-4xl font-bold section-title'>
              موقعنا
            </h2>
          </div>
          <div className='w-full h-[450px] overflow-hidden rounded-lg shadow-lg'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.480382579603!2d45.3652294!3d25.919446999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ac95b0017d697%3A0xdf397e1b098bbfd3!2z2YbYrNmF2Kkg2KfZhNmF2YbYp9ix2Kkg2YTZhNmF2LfYp9io2K4!5e0!3m2!1sar!2seg!4v1744847810090!5m2!1sar!2seg'
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='موقع نجمه المناره للمطابخ'
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer py-12 px-4'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4'>نجمه المناره للمطابخ</h3>
              <p className='mb-4'>
                متخصصون في تصميم وتفصيل وتركيب وصيانة مطابخ الألمنيوم الحديثة
                بأعلى جودة وأفضل الأسعار.
              </p>
              <div className='flex space-x-4 rtl:space-x-reverse'>
                <a href='#' className='text-white hover:text-primary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                </a>
                <a href='#' className='text-white hover:text-primary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                  </svg>
                </a>
                <a href='#' className='text-white hover:text-primary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-4'>روابط سريعة</h3>
              <ul className='space-y-2'>
                <li>
                  <Link href='/' className='hover:text-primary'>
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href='/about' className='hover:text-primary'>
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href='#services' className='hover:text-primary'>
                    خدماتنا
                  </Link>
                </li>
                <li>
                  <Link href='#gallery' className='hover:text-primary'>
                    معرض الأعمال
                  </Link>
                </li>
                <li>
                  <Link href='#contact' className='hover:text-primary'>
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-4'>خدماتنا</h3>
              <ul className='space-y-2'>
                <li>تصميم مطابخ الألمنيوم</li>
                <li>تفصيل مطابخ الألمنيوم</li>
                <li>تركيب مطابخ الألمنيوم</li>
                <li>فك مطابخ الألمنيوم</li>
                <li>صيانة مطابخ الألمنيوم</li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-4'>تواصل معنا</h3>
              <ul className='space-y-2'>
                <li className='flex items-center gap-2'>
                  <Phone size={16} />
                  <span>0507249162 - 0558410272</span>
                </li>
                <li className='flex items-center gap-2'>
                  <MapPin size={16} />
                  <span>المملكة العربية السعودية</span>
                </li>
                <li className='flex items-center gap-2'>
                  <Mail size={16} />
                  <span>info@najmatalmanarakitchens.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className='footer-bottom'>
        <div className='container mx-auto text-center'>
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} - نجمه المناره
            للمطابخ
          </p>
        </div>
      </div>
    </div>
  )
}

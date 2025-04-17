import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-[50vh] bg-gray-900'>
        <Image
          src='/images/4.jpeg'
          alt='من نحن - نجمه المناره للمطابخ'
          fill
          className='object-cover opacity-70'
          priority
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>من نحن ؟</h1>
          <div className='bg-primary bg-opacity-90 p-6 max-w-2xl mx-auto'>
            <p className='text-xl md:text-2xl'>
              نجمه المناره للمطابخ - خبراء مطابخ الألمنيوم الحديثة
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className='py-16 px-4'>
        <div className='container mx-auto'>
          <div className='flex flex-col md:flex-row gap-12 items-start'>
            <div className='md:w-1/2'>
              <h2 className='text-3xl font-bold mb-6 text-primary'>
                نجمه المناره للمطابخ
              </h2>
              <div className='space-y-4 text-lg'>
                <p>
                  نجمه المناره للمطابخ هي شركة متخصصة في تصميم وتفصيل وتركيب
                  وصيانة مطابخ الألمنيوم الحديثة بأعلى معايير الجودة وبأسعار
                  منافسة.
                </p>
                <p>
                  تأسست الشركة بهدف تقديم حلول مبتكرة وعصرية لمطابخ الألمنيوم،
                  تلبي احتياجات العملاء وتتجاوز توقعاتهم. نعمل بشغف وإخلاص
                  لتحويل أفكاركم إلى واقع ملموس، مع الالتزام بأعلى معايير الجودة
                  والدقة في التنفيذ.
                </p>
                <p>
                  يتكون فريقنا من مجموعة من المصممين والفنيين المهرة ذوي الخبرة
                  الطويلة في مجال مطابخ الألمنيوم، حيث نحرص على تقديم خدمات
                  متكاملة تشمل التصميم والتفصيل والتركيب والصيانة.
                </p>
                <p>
                  نؤمن في نجمه المناره للمطابخ بأن المطبخ هو قلب المنزل، لذلك
                  نحرص على تقديم تصاميم عصرية وأنيقة تجمع بين الجمال والوظيفة،
                  مع التركيز على استخدام أجود أنواع الألمنيوم والإكسسوارات لضمان
                  متانة وجودة المطبخ.
                </p>
              </div>
            </div>
            <div className='md:w-1/2'>
              <Image
                src='/images/2.jpeg'
                alt='نجمه المناره للمطابخ'
                width={600}
                height={800}
                className='rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className='py-16 px-4 bg-gray-100'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold section-title'>
              رؤيتنا ورسالتنا
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold mb-4 text-primary'>رؤيتنا</h3>
              <p className='text-lg'>
                أن نكون الخيار الأول والأفضل في مجال تصميم وتفصيل مطابخ
                الألمنيوم الحديثة، وأن نقدم منتجات وخدمات تتميز بالجودة العالية
                والابتكار والتميز.
              </p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='text-2xl font-bold mb-4 text-primary'>رسالتنا</h3>
              <p className='text-lg'>
                تقديم مطابخ ألمنيوم حديثة ذات جودة عالية وتصاميم عصرية تلبي
                احتياجات وتطلعات عملائنا، مع الالتزام بأعلى معايير الجودة وخدمة
                العملاء المتميزة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='py-16 px-4'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold section-title'>
              قيمنا
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-gray-100 p-6 rounded-lg shadow-md text-center'>
              <div className='w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z'></path>
                  <line x1='16' y1='8' x2='2' y2='22'></line>
                  <line x1='17.5' y1='15' x2='9' y2='15'></line>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-2'>الجودة</h3>
              <p>نلتزم بتقديم أعلى معايير الجودة في كل تفاصيل عملنا</p>
            </div>

            <div className='bg-gray-100 p-6 rounded-lg shadow-md text-center'>
              <div className='w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-2'>الابتكار</h3>
              <p>
                نسعى دائماً لتقديم حلول مبتكرة وتصاميم عصرية تواكب أحدث التوجهات
              </p>
            </div>

            <div className='bg-gray-100 p-6 rounded-lg shadow-md text-center'>
              <div className='w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
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
              <h3 className='text-xl font-bold mb-2'>رضا العملاء</h3>
              <p>نضع رضا عملائنا في مقدمة أولوياتنا ونسعى لتجاوز توقعاتهم</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className='py-16 px-4 bg-gray-100'>
        <div className='container mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold section-title'>
              خدماتنا
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col md:flex-row gap-4 items-start bg-white p-6 rounded-lg shadow-md'>
              <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shrink-0'>
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
                  <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
                  <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2'>
                  تصميم وتفصيل مطابخ الألمنيوم
                </h3>
                <p>
                  نقدم خدمات تصميم وتفصيل مطابخ الألمنيوم بأحدث التصاميم العصرية
                  وبأعلى جودة، مع مراعاة احتياجاتك وذوقك الشخصي. يعمل فريقنا من
                  المصممين المحترفين على تقديم تصاميم مبتكرة وعصرية تناسب مساحة
                  مطبخك.
                </p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4 items-start bg-white p-6 rounded-lg shadow-md'>
              <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shrink-0'>
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
                  <path d='M12 19l7-7 3 3-7 7-3-3z'></path>
                  <path d='M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z'></path>
                  <path d='M2 2l7.586 7.586'></path>
                  <circle cx='11' cy='11' r='2'></circle>
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2'>
                  تركيب مطابخ الألمنيوم
                </h3>
                <p>
                  يقوم فريقنا المحترف بتركيب مطابخ الألمنيوم بدقة واحترافية
                  عالية وفي وقت قياسي، مع الحرص على عدم إحداث أي فوضى أو إزعاج.
                  نلتزم بالمواعيد المحددة ونضمن تركيب مطبخك بشكل احترافي.
                </p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4 items-start bg-white p-6 rounded-lg shadow-md'>
              <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shrink-0'>
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
                  <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'></path>
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2'>فك مطابخ الألمنيوم</h3>
                <p>
                  نقدم خدمات فك مطابخ الألمنيوم بطريقة احترافية وآمنة، سواء كان
                  ذلك بهدف النقل أو الاستبدال أو التجديد. يتم الفك بعناية فائقة
                  للحفاظ على جميع القطع سليمة.
                </p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4 items-start bg-white p-6 rounded-lg shadow-md'>
              <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shrink-0'>
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
                  <path d='M12 6v6l4 2'></path>
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2'>
                  صيانة مطابخ الألمنيوم
                </h3>
                <p>
                  نقدم خدمات صيانة دورية وطارئة لمطابخ الألمنيوم، لضمان استمرار
                  عملها بكفاءة وجمالها لأطول فترة ممكنة. فريق الصيانة لدينا مدرب
                  على التعامل مع جميع أنواع المشكلات وإصلاحها بسرعة واحترافية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 px-4 bg-primary'>
        <div className='container mx-auto text-center text-white'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            هل أنت مستعد لتحويل مطبخك إلى تحفة فنية؟
          </h2>
          <p className='text-xl mb-8 max-w-3xl mx-auto'>
            تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر خاص لمطبخك الجديد
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='#contact'
              className='bg-white text-primary py-3 px-6 rounded-md font-bold hover:bg-gray-100 transition-colors'
            >
              تواصل معنا
            </Link>
            <Link
              href='tel:0507249162'
              className='bg-transparent border-2 border-white text-white py-3 px-6 rounded-md font-bold hover:bg-white hover:text-primary transition-colors'
            >
              اتصل الآن: 0507249162
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-8'>
        <div className='container mx-auto px-4 text-center'>
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} - نجمه المناره
            للمطابخ
          </p>
        </div>
      </footer>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return (
    <section className='bg-header pt-28 pb-10 lg:pb-0 overflow-hidden' id='home'>
      <div className='container'>
        <div className='grid gap-8 lg:gap-4 grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-7 flex flex-col justify-center relative'>
            <Image
              src='/images/hero/star.svg'
              alt='star-image'
              width={95}
              height={97}
              className='absolute top-[-74px] right-[51px] opacity-10'
            />
            <Image
              src='/images/hero/lineone.svg'
              alt='line-image'
              width={190}
              height={148}
              className='absolute top-[-74px] right-[51px] opacity-5'
            />
            <Image
              src='/images/hero/linetwo.svg'
              alt='line-image'
              width={190}
              height={148}
              className='hidden xl:block absolute bottom-[-74px] right-[-38rem] opacity-5'
            />
            <div className='flex flex-col gap-4'>
              <h1 className="text-5xl lg:text-6xl max-w-2xl leading-tight text-midnight_text text-center lg:text-start mx-auto lg:mx-0">
                Pay school fees <br />
                <span className="font-bold">instantly, securely, hassle-free.</span>
              </h1>
              <p className='text-black/75 text-base lg:text-lg font-normal text-center lg:text-start max-w-lg mx-auto lg:mx-0'>
                No more queues, no more delays. Pay your school fees instantly from anywhere,
                anytime. <span className='font-bold italic'>ZEMSTO</span> makes fee payments quick, secure, and stress-free.
              </p>
              <div className='mx-auto lg:mx-0 mt-2'>
                <Link href={'/#contact'}>
                  <button className='text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-primary bg-primary hover:bg-transparent hover:cursor-pointer hover:text-primary'>
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        
          <div className='lg:col-span-5 relative'>
            <div className='relative'>
              <Image
                src='/images/hero/image.png'
                alt='ZEMSTO app preview'
                width={698}
                height={652}
                className='w-full h-auto object-contain'
                priority
              />
              
              {/* Payment Received Card - Bottom Left */}
              <div className='absolute bottom-8 left-0 bg-white rounded-2xl shadow-2xl p-5 w-64 animate-float'>
                <p className='text-gray-600 text-sm font-medium mb-1'>Payment Received</p>
                <p className='text-primary text-3xl font-bold mb-3'>+35,890.00</p>
                <div className='flex items-center justify-between text-sm'>
                  <span className='text-gray-500'>1st Jan, 2024</span>
                  <span className='text-green-600 font-semibold flex items-center gap-1'>
                    3.09%
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Active Users Card - Top Right */}
              <div className='absolute top-8 right-96 bg-white rounded-2xl shadow-2xl p-4 w-56 animate-float-delayed'>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='flex -space-x-2'>
                    <div className='w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm'>
                      J
                    </div>
                    <div className='w-10 h-10 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm'>
                      M
                    </div>
                    <div className='w-10 h-10 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm'>
                      S
                    </div>
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-gray-900'>120K+</p>
                    <p className='text-sm text-gray-600'>Active users</p>
                  </div>
                </div>
              </div>

              {/* Transactions Card - Bottom Right (Optional) */}
              <div className='hidden lg:block absolute top-52 left-[-6rem] bg-white rounded-xl shadow-xl p-3 animate-float'>
                <div className='flex items-center gap-2'>
                  <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
                    <svg className='w-5 h-5 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                    </svg>
                  </div>
                  <div>
                    <p className='text-xs text-gray-500'>Total Transactions</p>
                    <p className='text-lg font-bold text-gray-900'>50K+</p>
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
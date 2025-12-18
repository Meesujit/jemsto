import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const People = () => {
  return (
    <section className='pt-32 sm:pb-20 pb-10' id='people'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
          <div className='col-span-6 flex justify-center'>
            <div className="bg-Lightsuccess bg-[url('/images/people/bg-lines.png')] bg-no-repeat bg-contain bg-right-bottom w-full h-full flex flex-col gap-10 relative sm:py-11 py-14 sm:px-16 px-8 rounded-2xl after:absolute after:bg-[url('/images/people/quote.png')] after:w-48 after:h-40 after:-top-16 after:right-0">
              <div className='flex items-center gap-10'>
                <div className="h-[90px] w-[90px] rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                  <Image
                    src="/images/people/user1.webp"
                    alt="student user"
                    width={110}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className=''>
                  <p className='text-2xl font-semibold'>Priya Sharma</p>
                  <p className='text-lg text-black/55'>B.Tech Student, IIT Delhi</p>
                </div>
              </div>
              <p className='font-medium text-2xl leading-9'>
                "JEMSTO saved me from the hostel fee deadline stress! I paid my entire semester fees in under a minute. No bank visits, no queues—just instant payment and peace of mind."
              </p>
            </div>
          </div>
          <div className='col-span-6 flex justify-center flex-col gap-4 lg:pl-24 mt-10 lg:mt-0 '>
            <h2 className='text-midnight_text text-center lg:text-start'>
              Trusted by 120K+ students across India.
            </h2>
            <p className='text-black/75 text-lg font-normal text-center lg:text-start max-w-md mx-auto lg:mx-0'>
              JEMSTO helps students pay university fees instantly, track payment history, and never miss a deadline—all in one simple app.
            </p>
            <Link
              href={'/'}
              className='text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2 mx-auto lg:mx-0'>
              Learn more
              <Icon icon='tabler:arrow-right' className='text-2xl' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default People
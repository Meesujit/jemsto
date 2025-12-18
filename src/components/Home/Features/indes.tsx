import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FeatureData } from '@/app/api/data'

const Features = () => { 
  return (
    <section id='features'>
      <div className='container'>
        <h2 className='text-midnight_text text-center mb-5 max-w-xl mx-auto sm:leading-16'>
          Everything You Need. Built In.
        </h2>
        <p className='text-black/60 text-lg text-center md:max-w-[60%] mx-auto'>
          Pay university fees instantly, track payment history, and get reminders for upcoming deadlines. 
          JEMSTO gives you complete control over your academic payments with zero hassle.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          {FeatureData.map((item, i) => (
                <div key={i} className='bg-white rounded-2xl p-5 shadow-lg'>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={55}
                    height={55}
                    className='mb-2'
                  />
                  <h3 className='text-2xl font-semibold text-black mt-5'>
                    {item.heading}
                  </h3>
                  <p className='text-lg text-black/50 my-2 leading-6'>
                    {item.paragraph}
                  </p>
                  <Link
                    href={'/'}
                    className='text-primary hover:text-blue-700 text-xl font-medium flex items-center gap-2 mt-6 pb-2'>
                    Learn more
                    <Icon icon='tabler:arrow-right' className='text-2xl' />
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Features

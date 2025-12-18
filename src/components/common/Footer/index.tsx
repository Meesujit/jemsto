
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FooterLinks, SocialLinks } from '@/app/api/data'

const Footer = () => {

  return (
    <div className='bg-midnight_text'>
      <div className='container p-4'>
        <div className='my-6 grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-y-5'>
          {/* COLUMN-1 */}
          <div className='sm:col-span-6 lg:col-span-3'>
            <Link href='/' className='flex items-center gap-2'>
              <Image
                src='/images/logo/icon.svg'
                alt='logo'
                width={160}
                height={50}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
              />
              <span className='font-bold text-4xl text-gray-200'>JEMSTO</span>
            </Link>
          </div>
          <div className='sm:col-span-6 lg:col-span-5 flex items-center'>
            <div className='flex gap-4'>
              {FooterLinks.map((items, i) => (
                <div key={i}>
                  <Link
                    href={`${items.href}`}
                    className='text-lg font-normal text-white/60 flex items-center justify-center hover:text-white hover:underline'>
                    {items.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className='sm:col-span-6 lg:col-span-4'>
            <div className='flex gap-4 lg:justify-end'>
              {SocialLinks.map((items, i) => (
                <Link href={items.link} key={i}>
                  <div className='bg-white/20 h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center text-white hover:text-black hover:bg-white'>
                    <Icon icon={items.imgSrc} className='text-2xl' />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-t-white/30'>
          <h4 className='text-lg text-center md:text-start font-normal text-white/60'>
            © {new Date().getFullYear()}. All rights reserved.
            {' '}
            <Link
              href='/'
              className='hover:text-white'>
              JEMSTO
            </Link>
          </h4>
          <div className='flex gap-5  justify-center items-center md:justify-start'>
            <h4 className='text-lg font-normal text-white/60 hover:text-white'>
              <Link href='/' target='_blank'>
                Privacy policy
              </Link>
            </h4>
            <div className='h-5 bg-white opacity-60 w-0.5'></div>
            <h4 className='text-lg font-normal text-white/60 hover:text-white'>
              <Link href='/' target='_blank'>
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

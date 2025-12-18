'use client'
import { useEffect, useRef, useState } from 'react'
import { HeaderData } from '@/app/api/data'
import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import { Icon } from '@iconify/react'

const Header: React.FC = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <header
      className={`z-40 w-full transition-all fixed top-0 duration-300 ${sticky ? 'shadow-lg bg-white py-3' : 'shadow-none bg-transparent py-3'
        }`}>
      <div>
        <div className='container flex items-center justify-between'>
          <div>
            <Logo />
          </div>
          <nav className='hidden lg:flex grow items-center gap-8 justify-center md:ml-20'>
            {HeaderData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <button
            onClick={() => setNavbarOpen(true)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md cursor-pointer transition"
            aria-label="Open menu"
          >
            <Icon icon="mdi:menu" className="text-3xl text-midnight_text" />
          </button>
        </div>
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50`}>
          <div className='flex items-center justify-between p-4'>
            <h2 className='text-lg font-bold text-midnight_text'>
              <Logo />
            </h2>

            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md cursor-pointer transition"
              aria-label='Close menu Modal'>
                <Icon icon="mdi:close" className="text-3xl text-midnight_text" />
             </button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            {HeaderData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

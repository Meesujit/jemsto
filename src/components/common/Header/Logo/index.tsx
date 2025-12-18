import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image
        src='/images/logo/icon.svg'
        alt='logo'
        width={160}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
      />
      <span className='font-bold text-4xl'>ZEMSTO</span>
    </Link>
  )
}

export default Logo

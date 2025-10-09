import Link from 'next/link'
import HeaderAccountBtn from './HeaderaAccountBtn'

const HeaderNav = () => {
  return (
    <>
    <div className="flex flex-col gap-5">
    <ul className='flex items-center justify-center gap-5  absolute left-0 top-[13px] right-0 mx-auto'>
            <li>
              <Link className='text-[#7F04E3] text-[16px] font-[400]' href='/'>Home</Link>
            </li>
            <li>
              <Link className='text-[#77798F] text-[16px] font-[400]' href='/'>Features</Link>
            </li>
            <li>
              <Link className='text-[#77798F] text-[16px] font-[400]' href='/'>Pricing</Link>
            </li>
            <li>
              <Link className='text-[#77798F] text-[16px] font-[400]' href='/'>Gallery</Link>
            </li>
    </ul>
    <div className="lg:hidden md:hidden block">
    <HeaderAccountBtn/>
    </div>
    </div>
    </>
  )
}

export default HeaderNav
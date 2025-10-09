import Link from 'next/link'

const HeaderaAccountBtn = () => {
  return (
    <>
     <Link className='py-3 px-10 text-white font-medium rounded-full border border-[#2A2B3A]' href='#'>Sign In</Link>
          <Link className='gredient-btn py-3 px-10 text-white font-medium rounded-full border border-[#2A2B3A]' href='#'>Sign Up</Link>
    </>

  )
}

export default HeaderaAccountBtn
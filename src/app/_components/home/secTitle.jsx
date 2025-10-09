

const secTitle = ({title = "",parah = ""}) => {
  return (
 <>
 <h1 className="text-[70px] text-center font-bold mt-2"
style={{
  letterSpacing: '6.4px',
  backgroundImage: 'radial-gradient(70.71% 70.71% at 50% 50%, #FFF 30%, rgba(255, 255, 255, 0.50) 84.77%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}}
>{title}</h1>

<p className="max-w-[667px] w-full mx-auto text-center text-[#77798F] text-[24px] font-[400]">{parah}</p>
      
 </>
  )
}

export default secTitle


const PricingBox = ({price = '', type = '', plan = '', desc = '', popular = false, l1 = '',l2 = '',l3 = '',l4 = '',l5 = '',l6 = '',l7 = '',l8 = '',l9 = '',l10 = '',l11 = '',l12 = '',l13 = '',l14 = '',}) => {
    const lItems = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14].filter(Boolean);

  return (
    <div className={`pricing-box p-6 ${popular? 'popular-pricing' : ''} `}>
        {popular && <span className="popular-tag">MOST POPULAR</span>}
        <h1 className="text-white lg:text-[32px] md:text-[28px] text-[22px] font-[700]">{price} {type && <span className="ml-1 text-[#848199] text-[15px]">{type}</span>}</h1>
        <h2 className="text-white lg:text-[24px] md:text-[22px] text-[18px] font-[700] mt-2 mb-3">{plan}</h2>
        <h5 className="text-[#848199] text-[15px] font-[500]">{desc}</h5>
        <ul className="flex flex-col gap-5 mt-6">
        {lItems.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
        </ul>
        <button className="text-white" type="button">Choose plan</button>
    </div>
  )
}

export default PricingBox
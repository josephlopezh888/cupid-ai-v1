import PricingBox from "./PricingBox";

const MonthlyPricing = () => {
  return (
    <>
    <PricingBox
    price="£29.99"
    type="/month"
    plan="Individual"
    desc="For most businesses that want to otpimize web queries"
    l1="Realistic AI Image Generation"
    l2="AI Chatbot Usage"
    l3="Realistic AI Audio Generation"
     />
    <PricingBox
     price="£79.99"
     type="/month"
     plan="Entrepreneur"
     desc="For most businesses that want to otpimize web queries"
     l1="Realistic AI Image Generation"
     l2="AI Chatbot Usage"
     l3="Realistic AI Audio Generation"
     l4="Bot access"
     l5="AI Deepfake Technology"
    />
     <PricingBox
     price="£179.99"
     type="/month"
     plan="Business"
     popular= {true}
     desc="For most businesses that want to otpimize web queries"
     l1="Realistic AI Image Generation"
     l2="AI Chatbot Usage"
     l3="Realistic AI Audio Generation"
     l4="Bot access"
     l5="Photo editing Studio access"
     l6="Inpainting & Outpainting"
     l7="Model Training"
     l8="Early Beta Access"
     l9="Text to Video"
     l10="Priority Customer Support"
    />
     <PricingBox
     price="Contact Us"
     plan="Enterprise"
     desc="For most businesses that want to otpimize web queries"
     l1="Realistic AI Image Generation"
     l2="AI Chatbot Usage"
     l3="Realistic AI Audio Generation"
     l4="Bot access"
     l5="AI Deepfake Technology"
     l6="Photo editing Studio access"
     l7="Inpainting & Outpainting"
     l8="Model Training"
     l9="Early Beta Access"
     l10="Text to Video"
     l11="Priority Customer Support"
     l12="Custom AI built tools"
     l13="Custom software development"
     l14="Custom web application integration"
    />
    </>
  )
}

export default MonthlyPricing
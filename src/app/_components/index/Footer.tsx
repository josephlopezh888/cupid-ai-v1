import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <div className="w-full relative bottom-0 overflow-hidden pb-[80px] mt-[200px]">
      <div className="w-full h-[1080px] bg-page absolute bottom-[-320px] z-0 "></div>
      <div className="bg-[#010314] py-6 z-10 absolute bottom-0 w-full">
          <div className="xl:container mx-auto px-4 lg:px-8">
            <div className="flex justify-between items-center gap-4 flex-col sm:flex-row">
              <p className="text-sm text-[#77798F]">© 2023 CupidAI. All rights reserved.</p>
              <ul className="flex items-center gap-x-8 flex-wrap justify-center">
                <li>
                  <Link href="/" className="text-sm text-[#77798F]">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-[#77798F]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-[#77798F]">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer className="bg-no-repeat bg-bottom bg-cover pt-8 lg:pt-0">
          <div className="xl:container mx-auto px-4 lg:px-8 pb-20">
            <div className="flex justify-between lg:items-end gap-8 flex-col lg:flex-row">
              <div className="flex max-w-[400px] flex-col gap-4">
                <Image src="/logo.png" alt="logo" width={66} height={66} />
                <h4 className="font-medium text-[30px] title-footer">AI Revolutionary tool used for Media Content Creation.</h4>
                <p className="text-white">CupidAI, 2023.</p>
              </div>
              <div className="lg:max-w-xl w-full flex justify-between flex-col sm:flex-row gap-6 z-50">
                <div className="flex flex-col gap-4">
                  <h6 className="text-sm text-white font-medium">
                    Platform
                  </h6>
                  <ul className="space-y-[18px]">
                    <li>
                      <Link href="/" className="text-[#77798F] text-lg">Plans & Pricing</Link>
                    </li>
                    <li>
                      <Link href="/" className="text-[#77798F] text-lg">Dashboard</Link>
                    </li>
                    <li>
                      <Link href="/" className="text-[#77798F] text-lg">Chatbot</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className="text-sm text-white font-medium">
                    Company
                  </h6>
                  <ul className="space-y-[18px]">
                    <li>
                      <Link href="/" className="text-[#77798F] text-lg">Blog</Link>
                    </li>
                    <li>
                      <Link href="/" className="text-[#77798F] text-lg">About Us</Link>
                    </li>
                    <li>
                      <Link href="/" className="text-[#77798F] text-lg">News</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className="text-sm text-white font-medium">
                    Resources
                  </h6>
                  <ul className="space-y-[18px]">
                    <li>
                      <Link href="/" className="text-[#77798F] text-lg">Documentation</Link>
                    </li>
                    <li>
                      <Link href="/" className="text-[#77798F] text-lg">API</Link>
                    </li>
                    <li>
                      <Link href="/" className="text-[#77798F] text-lg">Support</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
      </div>
    </>
  )
}

export default Footer
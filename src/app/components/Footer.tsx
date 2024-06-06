import Image from "next/image";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Instagram from "../../public/assets/Instagram.svg";
import LinkedIn from "../../public/assets/LinkedIn.svg";

export function Footer() {
  return (
    <div className="bg-blue-50 py-10 lg:py-12">
      {/* Top section - Logo & Navigation */}
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:px-72">
        <p className="font-bold text-3xl text-blue-600 mb-6 lg:mb-0 animate__animated animate__bounceIn">
          MentorAura
        </p>
        <nav className="flex flex-col gap-y-4 text-blue-900 sm:flex-row sm:gap-x-8 md:gap-x-12 lg:gap-x-24">
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Pricing</a>
          <a href="#" className="hover:text-blue-600">Enterprise</a>
          <a href="#" className="hover:text-blue-600">Careers</a>
        </nav>
      </div>

      {/* Email subscription form, Social media & copyright */}
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between mt-8 lg:mt-12 lg:px-72">
        <form className="flex mb-6 lg:mb-0 relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="block w-full p-4 pl-10 text-sm border rounded-lg focus:ring-blue-600 focus:border-blue-600 bg-white border-gray-300 placeholder-gray-400"
              required
            />
          </div>
          <button type="submit" className="absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:text-blue-600 text-white hover:bg-white">
            Subscribe
          </button>
        </form>
        
        <div className="flex items-center gap-x-4 mb-6 lg:mb-0">
          <Image src={Facebook} alt="Facebook" width={24} height={24} />
          <Image src={Twitter} alt="Twitter" width={24} height={24} />
          <Image src={Instagram} alt="Instagram" width={24} height={24} />
          <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
        </div>
        
        <p className="text-center text-xs text-blue-900 lg:text-base">
          © Copyright 2024. MentorAura. All rights reserved.
        </p>
      </div>

      {/* Separator line */}
      <hr className="mt-8 border-b border-gray-300 lg:mt-12" />
    </div>
  );
}

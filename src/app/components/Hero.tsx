import Image from "next/image";
import Herobg from "../../public/assets/herobg.jpg";
import item1 from "../../public/assets/item1.png";

export function Hero() {
  return (
    <div className="relative flex">
      <Image src={Herobg} alt="lines background" />
      <div className="absolute flex">
          <div className="mx-auto max-w-screen-xl text-left lg:py-20 lg:px-72">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#1995AD] md:text-5xl lg:text-6xl dark:text-[#1995AD]">Fast Track Your Life: Find a Mentor for Anything</h1>
            <form className="max-w-3xl mx-auto lg:py-10">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm border text-white rounded-lg focus:ring-[#1995AD] focus:border-[#1995AD] bg-gray-600 border-gray-500 placeholder-gray-400" placeholder="Find mentor by name, skill, company, school..." required />
                <button type="submit" className="absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-[#1995AD] hover:text-[#1995AD] text-white hover:bg-white">Search</button>
              </div>
            </form>
            <p className="mb-4 tracking-tight leading-none text-black md:text-5xl lg:text-2xl font-mono">Trending Topics ..</p>
            <div className="mt-2 overflow-x-scroll no-scrollbar">
              <div className="flex space-x-4 items-center whitespace-nowrap" >
                <button className="text-white bg-gradient-to-br from-gray-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">NEET</button>
                <button className="text-white bg-gradient-to-br from-gray-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">JEE</button>
                <button className="text-white bg-gradient-to-br from-gray-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Yoga</button>
                <button className="text-white bg-gradient-to-br from-gray-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">SSC</button>
                <button className="text-white bg-gradient-to-br from-gray-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">DevOps</button>
                <button className="text-white bg-gradient-to-br from-gray-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Mental Health</button>
                <button className="text-white bg-gradient-to-br from-gray-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Diet Planner</button>
                <button className="text-white bg-gradient-to-br from-gray-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Lawyer</button>
              </div>
            </div>
          </div>
        <div className="lg:py-20">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image src={item1} alt="Logo" />
              </a>
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

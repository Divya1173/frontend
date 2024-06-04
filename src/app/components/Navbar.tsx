export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between py-[16px] lg:mx-auto lg:px-72 bg-gradient-to-r from-[#F1F1F2] via-gray-500 to-[#F1F1F2]">
      <div className="flex items-center">
        <p className="font-bold text-3xl text-[#1995AD]">
          MentorAura
        </p>
      </div>

      <div className="flex gap-x-5">
        <button className="bg-[#1995AD] hover:text-[#1995AD] text-white hover:bg-white font-bold py-2 px-4 rounded">
            For Mentors
        </button>

        <div className="bg-transparent hover:bg-[#1995AD] text-[#1995AD] font-semibold hover:text-white py-2 px-4 border border-[#1995AD] hover:border-transparent rounded">
          <button className="">
            Login / Create Account
          </button>
        </div>
      </div>
    </nav>
  );
}
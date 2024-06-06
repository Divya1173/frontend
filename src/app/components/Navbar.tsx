export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between py-[16px] bg-white shadow-md lg:mx-auto lg:px-72">
      <div className="flex items-center">
        <p className="font-bold text-3xl text-blue-600">
          MentorAura
        </p>
      </div>

      <div className="flex gap-x-5">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md">
            For Mentors
        </button>

        <button className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white font-semibold py-2 px-4 border border-blue-600 hover:border-transparent rounded shadow-md">
            Login / Create Account
        </button>
      </div>
    </nav>
  );
}

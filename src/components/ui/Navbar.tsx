const Navbar = () => {
  return (
    <>
      <div className="flex max-w-7xl mx-auto justify-between px-2 py-4 items-center">
        <div className="text-lg">JobPortal</div>
        <div className="flex w-1/2 justify-around items-center">
          <div className="flex justify-between w-96 font-bold cursor-pointer">
            <div>Jobs</div>
            <div>Companies</div>
            <div>Salaries</div>
            <div>Career Blog</div>
          </div>
        </div>

        <div className="flex w-52 justify-around">
          <button className="w-20 py-2 font-bold cursor-pointer hover:text-brand-blue">
            Login
          </button>
          <button className="bg-brand-blue border-4 border-transparent text-white rounded-lg cursor-pointer hover:border-4 hover:border-blue-700 hover:text-black hover:bg-white transition duration-700 w-24 py-2 font-bold">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

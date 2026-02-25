import { BellIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex max-w-7xl mx-auto justify-between px-2 py-4 items-center">
       <div onClick={() => navigate("/")} className="cursor-pointer">
         <img src="/logo/Container.svg" alt="" />
       </div>
        <div className="flex w-1/2 justify-around items-center">
          <div className="flex justify-between w-96 font-bold cursor-pointer">
            <div>Jobs</div>
            <div>Companies</div>
            <div>Salaries</div>
            <div>Career Blog</div>
          </div>
        </div>

        <div className="flex w-52 items-center">
         <div className="rounded-full border-2 border-gray-400 px-2 py-2 cursor-pointer">
           <BellIcon />
         </div>
          <button onClick={() => navigate("/login")} className="w-20 py-2 font-bold cursor-pointer hover:text-brand-blue">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [toggole, setToggle] = useState(false);

  const toggleHnadeler = () => {
    setToggle(!toggole);
  };

  return (
    <div className= "sticky top-0 sm:sticky sm:top-0">
      <header className="backdrop-blur-lg  ">
        <div className="container mx-auto">
          <nav className=" sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start w-full">
                <img className="w-16 sm:w-20" src="/school-logo.png" alt="" />
                <div>
                  <h2 className=" text-green-700 font-bold text-sm sm:text-2xl sm:font-bold">
                    মোজাহারদী ঊচ্চ বিদ্যালয়
                  </h2>
                  <p className="text-xs">
                    স্থাপতিঃ১৯১১ <span> EIIN:১১২০৮৭</span>
                  </p>
                </div>
              </div>
              <div
                className="Mobile-menu block text-4xl sm:hidden"
                onClick={toggleHnadeler}
              >
                {" "}
                {
                  toggole?<ImCross />:<IoMdMenu />
                }
                
              </div>
            </div>
            <div>
              <ul
                className={` ${
                  toggole ? "flex flex-col items-center justify-center backdrop-blur-lg py-10" : "hidden"
                } 
                 sm:flex sm:items-center sm:justify-end gap-3 `}
              >
                <li className="sm:px-4 sm:py-3 sm:bg-green-700 rounded-md sm:text-white sm:text-md sm:hover:bg-red-600 text-lg text-green-700">Home</li>
                <li className="sm:px-4 sm:py-3 sm:bg-green-700 rounded-md sm:text-white sm:text-md sm:hover:bg-red-600 text-lg text-green-700">About</li>
                <li className="sm:px-4 sm:py-3 sm:bg-green-700 rounded-md sm:text-white sm:text-md sm:hover:bg-red-600 text-lg text-green-700">Contact</li>
                <li className="sm:px-4 sm:py-3 sm:bg-green-700 rounded-md sm:text-white sm:text-md sm:hover:bg-red-600 text-lg text-green-700">Service</li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

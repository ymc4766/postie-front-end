import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu />
        </div>
        <h1 className="text-2xl  sm:text-3xl  md:text-4xl px-2">
          Som <span>Eventhe</span>
        </h1>

        <div className="hidden md:flex items-center bg-gray-200 roundsed-full space-x-2">
          <p>Getee</p>
          <p>Getee</p>
        </div>
      </div>
      <div className="flex items-start p-2 bg-slate-200 rounded-2xl">
        <AiOutlineSearch size={24} />
        <input
          placeholder="Search ..."
          className="bg-inherit outline-none rounded-2xl "
        />
      </div>
      <button className="bg-black text-white hover:text-slate-50">
        <BsFillCartFill className="" size={24} />
      </button>
      {/* Mobile Menu */}
      {/* Overlay  */}
      {nav ? (
        <div className="bg-black/80 fixed w-full top-0 h-screen z-20 left-0"></div>
      ) : (
        " "
      )}
      <div
        className={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-[400px] h-screen bg-white  z-40 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(false)}
          size={26}
          className="absolute right-2 top-3 text-gray-500 cursor-pointer"
        />
        <h2 className="top-4 text-4xl py-4 ml-2 font-bold">
          Som <span className="text-violet-600 text-3xl ">Eventhe</span>
          <nav className="py-2 mt-[20px]  ml-3">
            <ul>
              <li className="my-3 text-1xl font-semibold flex items-center space-x-1  ">
                {" "}
                <AiOutlineUser /> Users{" "}
              </li>
              <li className="my-3 text-1xl font-semibold">Users </li>
              <li className="my-3 text-1xl font-semibold">Users </li>
              <li className="my-3 text-1xl font-semibold">Users </li>
              <li className="my-3 text-1xl font-semibold">Users </li>
            </ul>
          </nav>
        </h2>
      </div>
    </div>
  );
};

export default Header;

import { AiOutlineMedicineBox } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import bgImg from "../../Image/image.png"

const Navber = () => {
    return (
      <div className="bg-gray-100">
          <div className="navbar  bg-gray-100">
  <div className="navbar-start  lg:ml-32 ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
      <li><a>Services</a></li>
      <li><a>Blog</a></li>
      <li><a>About Us</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-4xl font-bold">D <span className="border border-gray-300 rounded-3xl p-1 text-2xl bg-yellow-400"> <AiOutlineMedicineBox /></span> C+</a>
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu  menu-horizontal text-xl px-1">
      <li><a>Home</a></li>
      <li><a>Services</a></li>
      <li><a>Blog</a></li>
      <li><a>About Us</a></li>
    </ul>
  </div>
  <div className="navbar-end lg:mr-32">
    <a className="border border-gray-300 p-2 hover:bg-orange-500 hover:shadow-2xl flex items-center rounded-lg">Appointment <GoArrowUpRight /></a>
  </div>
</div>
<div >
  <img className="bg-cover bg-center h-full w-full lg:p-10 p-5 lg:px-44" src={bgImg} alt="" />
</div>

      </div>
    );
};

export default Navber;
import React from "react";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";

const DiscountDoc = () => {
  return (
    <div className="p-10 bg-gray-100">
        <div
      className="w-2/3  bg-cover bg-center lg:ml-80 h-[38rem] rounded-2xl relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(2, 0, 67, 0.8), rgba(2, 0, 67, 0.3)), url('https://media.istockphoto.com/id/1362936837/photo/medical-workers-walking-through-the-corridor.jpg?s=612x612&w=0&k=20&c=t0PCxzxi6BdJFXwZqk8qPpBmHZyK07NVO85u_bvPexc=')",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/40 bg-opacity-75 rounded-2xl lg:flex items-center justify-center">
        <div className=" lg:flex justify-between lg:gap-96 text-white">
          <div>
            <p className="text-4xl ">Get Your <br /> First Appointment <br /> at 50% Off!</p>
            <div className="flex gap-2">
            <a className="border border-black bg-orange-400 text-black p-2 flex items-center rounded-lg">Appointment <GoArrowUpRight /></a>
            <a className="border border-gray-300 p-2 flex items-center rounded-lg">Learn More <GoArrowUpRight /></a>

            </div>
          </div>
          <div className="relative bottom-36 left-5">
            <a className="btn btn-ghost text-4xl font-bold">
              D{" "}
              <span className="border border-gray-300 rounded-3xl p-1 text-2xl bg-yellow-400">
                {" "}
                <AiOutlineMedicineBox />
              </span>{" "}
              C+
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DiscountDoc;
